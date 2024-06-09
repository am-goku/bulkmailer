import React, {} from 'react'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import DataTable from './DataTable';


function Recipients() {
    return (
        <React.Fragment>
            <div className='w-full h-full flex flex-col bg-white'>
                <div className='w-full h-24 bg-[#aeaeae] flex gap-1 px-5 items-center'>
                    <AddIcon className='border border-black rounded cursor-pointer hover:bg-slate-500' />
                    <DeleteIcon className='border border-black rounded cursor-pointer hover:bg-slate-500' />
                    <select id="options" className='w-72 bg-transparent border border-gray-600'>
                        <option value="">--Please choose an option--</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    <button className='px-5 border border-gray-600 text-sm hover:bg-slate-500 rounded-sm' >Save</button>
                </div>

                <div className='w-full h-full relative'>
                    <DataTable />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Recipients;