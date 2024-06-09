import React from 'react'
import PropTypes from 'prop-types'

function Navbar({setPath}) {
    return (
        <React.Fragment>
            <div className='w-full h-14 text-sm flex px-5 items-end'>
                <button onClick={() => {setPath('message')}} className='px-2 border border-b-0 bg-[#e0dfdf]'>Message</button>
                <button onClick={() => {setPath('recipients')}} className='px-2 border border-b-0'>Recipients</button>
                <button onClick={() => {setPath('settings')}} className='px-2 border border-b-0'>Settings</button>
                <button onClick={() => {setPath('preview')}} className='px-2 border border-b-0'>Preview</button>
                <button onClick={() => {setPath('delivery')}} className='px-2 border border-b-0'>Delivery</button>
            </div>
        </React.Fragment>
    )
}

Navbar.propTypes = {
    setPath: PropTypes.func.isRequired,
}

export default Navbar
