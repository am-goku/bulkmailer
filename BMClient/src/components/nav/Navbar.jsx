import React from 'react'

function Navbar() {




    return (
        <React.Fragment>
            <div className='w-full h-14 text-sm flex px-5 items-end'>
                <button onClick={() => {}} className='px-2 border border-b-0 bg-[#aeaeae]'>Message</button>
                <button onClick={() => {}} className='px-2 border border-b-0'>Recipients</button>
                <button onClick={() => {}} className='px-2 border border-b-0'>Settings</button>
                <button onClick={() => {}} className='px-2 border border-b-0'>Preview</button>
                <button onClick={() => {}} className='px-2 border border-b-0'>Delivery</button>
            </div>
        </React.Fragment>
    )
}

export default Navbar
