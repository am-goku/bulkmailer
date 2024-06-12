import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import DataTable from './DataTable';
import { useAppSelector } from '../../utils/store';
import { useSession } from '../../context/SessionContext';

function Recipients() {

    const emailGroup = useAppSelector(state => state?.groupReducer?.emailGroup);

    const { group, setGroup } = useSession()

    const selectGroup = (id) => {
        if (!id) {
            return setGroup(null)
        }

        const selectedGroup = emailGroup.find(g => g.id === +id);
        setGroup(selectedGroup || null);
    }


    return (
        <React.Fragment>
            <div className='w-full h-full flex flex-col overflow-auto' style={{scrollbarWidth: 'thin'}}>
                <div className='w-full min-h-20 bg-[#e0dfdf] flex gap-1 px-5 items-center'>
                    <AddIcon className='border border-black rounded cursor-pointer hover:bg-slate-500' />
                    <DeleteIcon className='border border-black rounded cursor-pointer hover:bg-slate-500' />
                    <select value={group?.id || ""} onChange={(e) => selectGroup(e.target.value)} id="options" className='w-72 bg-transparent border border-gray-600'>
                        <option value=""></option>

                        {
                            emailGroup?.map((g, i) => {
                                return <option key={i} value={g?.id}>{g?.name}</option>
                            })
                        }

                    </select>
                    <button className='px-5 border border-gray-600 text-sm hover:bg-slate-500 rounded-sm' >Save</button>
                </div>

                <div className='w-full h-full relative'>
                    <DataTable group={group} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Recipients;