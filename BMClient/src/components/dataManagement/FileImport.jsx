import React, { useEffect } from 'react'
import { parseDataFile } from '../../scripts/extractor';
import PropTypes from 'prop-types';

function FileImport({ click, setClick, setCsvData }) {

    const handleChange = async (e) => {
        const file = e.target.files[0];
        const d = await parseDataFile(file);
        setCsvData(d?.data || d);
    }

    useEffect(() => {
        if (click) {
            document.getElementById('dataFile').click();
            setClick(false);
        }
    }, [click, setClick]);

    return (
        <React.Fragment>
            <input onChange={handleChange} type="file" name="dataFile" id="dataFile" accept='.csv .xlsx .xls' className='hidden' />
        </React.Fragment>
    )
}

FileImport.propTypes = {
    click: PropTypes.bool,
    setClick: PropTypes.func,
    setCsvData: PropTypes.func,
}

export default FileImport
