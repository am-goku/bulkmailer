import React from 'react'
import RichTextEditor from './RichTextEditor'

function EditorPad() {

    


    return (
        <React.Fragment>
            <div className='w-full h-full flex flex-col bg-white'>
                <div className='w-full h-24 bg-[#aeaeae] flex gap-3 px-5 items-center'>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" id="subject" className='w-full h-7 px-2' />
                </div>

                <div className='w-full h-full relative'>
                    <RichTextEditor />
                </div>
            </div>
        </React.Fragment>
    )
}

export default EditorPad
