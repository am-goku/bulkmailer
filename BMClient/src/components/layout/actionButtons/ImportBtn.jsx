import React, { useEffect, useState } from 'react'
import NorthIcon from '@mui/icons-material/North';
import FileImport from '../../dataManagement/FileImport'
const CsvModal = React.lazy(()=> import('../../modal/CsvModal'))

function ImportBtn() {

    const [click, setClick] = useState(false);
    const [csvData, setCsvData] = useState(null);

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if(csvData){
            setIsOpen(true);
        }
    }, [csvData])

    return (
        <React.Fragment>
            <span onClick={() => { setClick(true) }} className='flex flex-col justify-center items-center cursor-pointer hover:bg-blue-300 p-3 hover:bg-opacity-25'>
                <NorthIcon className='text-green-900 rotate-180' fontSize='large' />
                <FileImport setCsvData={setCsvData} click={click} setClick={setClick} />
                <span className='text-black text-xs'>Import</span>
            </span>

            {isOpen && <CsvModal csvData={csvData} setCsvData={setCsvData} isOpen={isOpen} setIsOpen={setIsOpen} />}

        </React.Fragment>
    )
}

export default ImportBtn
