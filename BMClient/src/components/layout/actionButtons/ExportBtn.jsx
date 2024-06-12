import React, { useEffect, useState } from 'react'
import NorthIcon from '@mui/icons-material/North';
import PropTypes from 'prop-types'
import { convertToExcel } from '../../../scripts/extractor';
import { useAppSelector } from '../../../utils/store';
import { Modal } from '@mui/material';


function ExportBtn() {

    const [isOpen, setIsOpen] = useState(false)



    return (
        <React.Fragment>
            <span onClick={() => { setIsOpen(true) }} className='flex flex-col justify-center items-center cursor-pointer hover:bg-blue-300 p-3 hover:bg-opacity-25'>
                <NorthIcon className='text-green-900' fontSize='large' />
                <span className='text-black text-xs'>Export</span>
            </span>

            {isOpen && <OptionsModal isOpen={isOpen} setIsOpen={setIsOpen} />}


        </React.Fragment>
    )
}
export default ExportBtn




const OptionsModal = ({ isOpen, setIsOpen }) => {
    const sentMails = useAppSelector((state) => state?.groupReducer?.sentEmails);

    const [expFile, setExpFile] = useState(null)
    const [error, setError] = useState(null)

    const handleExport = () => {
        if (expFile) {
            if (sentMails?.length) {
                convertToExcel(sentMails[expFile]).then(() => {
                    setIsOpen(false)
                });
            } else {
                setError("Not found any file to export!")
            }
        } else {
            setError("Please choose a file to export!")
        }
    }

    const changeFile = (e) => {
        setExpFile(e.target.value)
        setError(null)
    }

    useEffect(() => {
        return () => {
            setError(null)
            setExpFile(null)
        }
    }, [])

    return (
        <React.Fragment>
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className='p-2 h-52 w-96 flex flex-col gap-5 border border-black border-solid bg-[#ddd] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
                    <span className='text-sm font-semibold'>Export</span>

                    <div className='w-full h-full flex flex-col gap-3 px-10 relative text-center font-bold'>
                        <h4>Choose file to export</h4>
                        <select value={expFile || ""} onChange={changeFile} name="exportFile" id="exportFile">
                            <option value="">Choose a file</option>
                            {
                                sentMails.map((m, i) => {
                                    return <option key={i} value={i}>{m.name}</option>
                                })
                            }
                        </select>

                        {
                            error && <span className='text-xs font-normal text-red-600'>{error}</span>
                        }

                        <div className='flex gap-5 absolute top-[70%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
                            <button onClick={handleExport} className='border rounded border-[#000000] px-3 hover:bg-slate-300'>Export</button>
                            <button onClick={() => setIsOpen(false)} className='border rounded border-[#000000] px-3 hover:bg-slate-300'>Cancel</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    )
}

OptionsModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
}