import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function SendBtn() {

    const handleEmail = () => {
        alert("Mail has been sent")
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
