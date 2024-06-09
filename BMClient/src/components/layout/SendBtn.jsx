import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useSession } from '../../context/SessionContext';
import { validateBeforeSend } from '../../scripts/validator';
import { sendBulkMail, sendSingleMail } from '../../services/apiMethods';

function SendBtn() {

    const { account, group, email } = useSession();

    const handleEmail = async () => {
        if (validateBeforeSend(account, email, group)) {
            if (!account.settings.single) {
                try {
                    const res = await sendBulkMail(email, account, group)
                    console.log(res.message);
                } catch (error) {
                    console.log(error);
                }
            } else {
                handleSingleMail()
            }
        }
    }

    const handleSingleMail = async () => {
        for (const rescipient of group) {
            try {
                const res = await sendSingleMail(email, account, rescipient);
                console.log("Email has been sent individually", res.message);
            } catch (error) {
                console.log("Error sending emails individually: " + error.message);
            }
        }
    }


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
