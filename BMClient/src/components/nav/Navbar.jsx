import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

function Navbar({setPath, path}) {

    useEffect(() => {
        const btns = document.getElementsByClassName('navBtn');

        for (let i = 0; i < btns.length; i++) {
            if (btns[i].innerText.toLowerCase() === path.toLowerCase()) {
                btns[i].classList.add('bg-[#e0dfdf]');
            } else {
                btns[i].classList.remove('bg-[#e0dfdf]');
            }
        }
    }, [path])
    
    return (
        <React.Fragment>
            <div className='w-full h-14 text-sm flex px-5 items-end'>
                <button onClick={() => {setPath('message')}} className='navBtn px-2 border border-b-0'>Message</button>
                <button onClick={() => {setPath('recipients')}} className='navBtn px-2 border border-b-0'>Recipients</button>
                <button onClick={() => {setPath('settings')}} className='navBtn px-2 border border-b-0'>Settings</button>
                <button onClick={() => {setPath('preview')}} className='navBtn px-2 border border-b-0'>Preview</button>
                <button onClick={() => {setPath('delivery')}} className='navBtn px-2 border border-b-0'>Delivery</button>
            </div>
        </React.Fragment>
    )
}

Navbar.propTypes = {
    setPath: PropTypes.func.isRequired,
    path: PropTypes.string,
}

export default Navbar
