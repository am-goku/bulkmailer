import React, { useCallback } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useSession } from '../../context/SessionContext';
import { validateBeforeSend } from '../../scripts/validator';
import { sendBulkMail, sendSingleMail } from '../../services/apiMethods';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../utils/store';
import { updateSentEmails } from '../../utils/reducer';

function SendBtn() {

    const { account, group, email } = useSession();
    const dispatch = useDispatch();
    const sentEmails = useAppSelector(state => state?.groupReducer.sentEmails)

    const handleEmail = async () => {
        if (validateBeforeSend(account, email, group)) {
            if (!account.settings.single) {
                try {
                    const res = await sendBulkMail(email, account, group)
                    const info = {
                        accepted: res?.info?.accepted,
                        rejected: res?.info?.rejected
                    }
                    createStatusObject(info)
                    alert("Email sent successfully")
                } catch (error) {
                    alert("Error sending email: check the console for more details.")
                    console.log(error);
                }
            } else {
                handleSingleMail((info)=>{
                    createStatusObject(info)
                    alert("Email sent successfully")
                })
            }
        }
    }

    const handleSingleMail = async (cb) => {
        const recipients = group.recipients
        const info = {accepted: [], rejected: []};
        for (const rescipient of recipients) {
            try {
                const res = await sendSingleMail(email, account, rescipient);
                const accepted = res?.info?.accepted;
                const rejected = res?.info?.rejected;
                if(accepted.length){
                    info.accepted.push(accepted[0]);
                }
                if(rejected.length){
                    info.accepted.push(accepted[0]);
                }
            } catch (error) {
                alert("Error sending email: check the console for more details.")
                console.log("Error sending emails individually: " + error);
            }
        }

        cb(info);
    }


    const createStatusObject = useCallback((info) => {
        const data = {
            name: `${group.name}_${sentEmails?.length}`,
            accepted: info.accepted,
            rejected: info.rejected,
            total: info.accepted?.length + info.rejected?.length,
            success: info.accepted?.length,
            failed: info.rejected?.length,
            percentage: (info.accepted?.length / (info.accepted?.length + info.rejected?.length)) * 100,
            status: (info.accepted?.length / (info.accepted?.length + info.rejected?.length)) * 100 === 100? 'Success' : 'Failed'
        };

        dispatch(updateSentEmails(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [group, sentEmails])


    return (
        <React.Fragment>
            <span onClick={handleEmail} className='flex flex-col justify-center items-center cursor-pointer hover:bg-blue-300 p-3 hover:bg-opacity-25'>
                <PlayArrowIcon className='text-blue-900' fontSize='large' />
                <span className='text-black text-xs'>Send</span>
            </span>
        </React.Fragment>
    )
}

export default SendBtn
