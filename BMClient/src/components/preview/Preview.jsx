import React, { useState } from 'react'
import { useSession } from '../../context/SessionContext'
import { getFormattedDate } from '../../scripts/date';

function Preview() {

    const { email, account, group } = useSession()

    const [recievers, setRecievers] = useState();

    useState(() => {
        const r = group?.recipients.map((rp) => {
            return rp.email;
        })
        setRecievers(r);
    }, [group])



    return (
        <React.Fragment>
            <div className='w-full h-full flex flex-col bg-white'>
                <div className='w-full h-24 text-xs bg-[#e0dfdf] py-2 flex flex-col px-5 items-start'>
                    <span className='flex gap-5 items-center'>
                        <h3 className='w-14 text-right'>Subject:</h3>
                        <p>{email?.subject || 'none'}</p>
                    </span>
                    <span className='flex gap-5 items-center'>
                        <h3 className='w-14 text-right'>From:</h3>
                        <p>
                            {`${account?.settings?.name || ''} <${account?.settings?.from || 'none'}>`}
                        </p>
                    </span>
                    <span className='flex gap-5 items-center'>
                        <h3 className='w-14 text-right'>Date:</h3>
                        <p>{getFormattedDate()}</p>
                    </span>
                    <span className='flex gap-5 items-center'>
                        <h3 className='w-14 text-right'>To:</h3>
                        <p>
                            {recievers?.length > 0? recievers.join(', ') : 'none'}
                        </p>
                    </span>
                </div>

                <div id='content-preview' className='w-full h-full p-2 flex flex-col gap-3'>
                    <div dangerouslySetInnerHTML={{__html: email?.body}} />
                    <hr />
                    <div dangerouslySetInnerHTML={{__html: account?.settings?.signature || ''}} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Preview
