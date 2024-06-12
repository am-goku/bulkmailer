import { Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { organizeCsv } from '../../scripts/organizer';
import { useSession } from '../../context/SessionContext';

function CsvModal({ csvData, setCsvData, isOpen, setIsOpen }) {

    const [csvKeys, setCsvKeys] = useState([]);
    const [csvMap, setCsvMap] = useState({});

    const {setCsvGroup} = useSession()

    useEffect(() => {
        if (csvData?.length) {
            const dataSample = csvData[0];
            const keys = Object.keys(dataSample);
            setCsvKeys(keys);
        }
    }, [csvData])

    const closeModal = () => {
        setCsvData(null);
        setIsOpen(false);
    }

    const handleChange = (name, value) => {
        return setCsvMap((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleImport = () => {
        const organizedData = organizeCsv(csvData, csvMap);
        setCsvGroup(organizedData)
        closeModal();
    }

    return (
        <React.Fragment>
            <Modal
                open={isOpen}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className='w-96 h-96 flex flex-col gap-3 bg-[#ddd] rounded border border-blue-900 border-solid absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
                    <div className='w-full h-fit p-2 border-b border-[#404040]'>
                        <h5 className='font-semibold text-sm max-w-[50%] truncate'>bulk_datalist.csv</h5>
                    </div>

                    <div className='flex-1 flex gap-2 p-2 overflow-auto'>

                        <div className='h-full w-full flex flex-col gap-5 px-5 items-center'>

                            <div className='w-full flex'>
                                <span className='w-[50%] px-2 text-end mr-4'>FirstName :</span>
                                <OptionsList selectedOption={csvMap} setCsvMap={setCsvMap} handleChange={handleChange} csvKeys={csvKeys} name='fname' />
                            </div>

                            <div className='w-full flex'>
                                <span className='w-[50%] px-2 text-end mr-4'>LastName :</span>
                                <OptionsList selectedOption={csvMap} setCsvMap={setCsvMap} handleChange={handleChange} csvKeys={csvKeys} name='lname' />
                            </div>

                            <div className='w-full flex'>
                                <span className='w-[50%] px-2 text-end mr-4'>Company :</span>
                                <OptionsList selectedOption={csvMap} setCsvMap={setCsvMap} handleChange={handleChange} csvKeys={csvKeys} name='company' />
                            </div>

                            <div className='w-full flex'>
                                <span className='w-[50%] px-2 text-end mr-4'>Email Address :</span>
                                <OptionsList selectedOption={csvMap} setCsvMap={setCsvMap} handleChange={handleChange} csvKeys={csvKeys} name='email' />
                            </div>

                        </div>

                        <div className='p-3 w-fit absolute bottom-5 right-5 flex gap-5'>
                            <button onClick={handleImport} className='border border-gray-700 px-3 rounded text-sm font-medium hover:bg-[#bbb9b9] '>Import</button>
                            <button onClick={closeModal} className='border border-gray-700 px-3 rounded text-sm font-medium hover:bg-[#bbb9b9] '>Cancel</button>
                        </div>

                    </div>
                </div>
            </Modal>
        </React.Fragment>
    )
}

CsvModal.propTypes = {
    csvData: PropTypes.any,
    setCsvData: PropTypes.func,
    setIsOpen: PropTypes.func,
    isOpen: PropTypes.bool,
}

export default CsvModal




const OptionsList = ({ csvKeys, name, setCsvMap, selectedOption, handleChange }) => {
    const change = (e) => {
        const { name, value } = e.target;

        for (const key in selectedOption) {
            if (selectedOption[key] && selectedOption[key] === value) {
                setCsvMap((prev) => {
                    return {
                        ...prev,
                        [key]: ""
                    }
                })
            }
        }

        handleChange(name, value)
    }

    return (
        <React.Fragment>
            <select value={selectedOption[name]} onChange={change} name={name} id={name} className='border border-black rounded px-3'>
                <option value="">select</option>
                {
                    csvKeys.map((k, i) => {
                        return <option key={i} value={k}>{k}</option>
                    })
                }
            </select>
        </React.Fragment>
    )
}

OptionsList.propTypes = {
    csvKeys: PropTypes.array,
    name: PropTypes.string,
    setCsvMap: PropTypes.func,
    selectedOption: PropTypes.object,
    handleChange: PropTypes.func,
}