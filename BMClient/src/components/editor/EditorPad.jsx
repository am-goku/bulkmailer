import React from 'react'
import RichTextEditor from './RichTextEditor'
import { useSession } from '../../context/SessionContext'

function EditorPad() {

    const {email, setEmail} = useSession()

    const bodyHandler = (b) => {
        setEmail({...email, ['body']: b})
    }

    const subjectHandler = (e) => {
        setEmail({...email, ['subject']: e.target.value})
    }

    return (
        <React.Fragment>
            <div className='w-full h-full flex flex-col bg-white'>
                <div className='w-full h-24 bg-[#e0dfdf] flex gap-3 px-5 items-center'>
                    <label htmlFor="subject">Subject</label>
                    <input defaultValue={email?.subject} onChange={subjectHandler} type="text" name="subject" id="subject" className='w-full h-7 px-2' />
                </div>

                <div className='w-full h-full relative'>
                    <RichTextEditor theme='snow' onChange={bodyHandler} currentValue={email?.body} className='h-[90%] w-full absolute' />
                </div>
            </div>
        </React.Fragment>
    )
}

export default EditorPad
