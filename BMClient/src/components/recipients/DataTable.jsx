import React, { useState } from "react";
import PropTypes from 'prop-types'
import { useDispatch } from "react-redux";
import { useSession } from "../../context/SessionContext";
import { setNewEmailGroup, updateEmailGroup } from "../../utils/reducer";
import { useAppSelector } from "../../utils/store";

const DataTable = ({ group }) => {

    const dispatch = useDispatch()

    const { setGroup } = useSession()

    const emailGroup = useAppSelector(state => state?.groupReducer?.emailGroup)

    const [newCompany, setNewCompany] = useState({ fname: '', lname: '', company: '', email: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCompany({ ...newCompany, [name]: value });
    };

    const handleAddCompany = () => {
        if (newCompany && newCompany.company && newCompany.email && newCompany.fname && newCompany.lname) {
            if (group) {
                const updatedGroup = {
                    ...group,
                    ['recipients']: [...group.recipients, newCompany]
                }

                dispatch(updateEmailGroup(updatedGroup));
                setGroup(updatedGroup)
            } else {
                const id = emailGroup?.length + 1
                const name = `Group ${id}`;
                const newGroup = { id, name, recipients: [newCompany] }
                dispatch(setNewEmailGroup(newGroup))
                setGroup(newGroup)
            }
            setNewCompany({ fname: '', lname: '', company: '', email: '' })
        }
    };

    return (
        <React.Fragment>
            <div className="h- p-2 bg-inherit" style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <thead>
                        <tr className='bg-[#f2f2f2]'>
                            <th className='hover:bg-[#e0dfdf] border border-solid border-[#ddd] p-2 truncate'>Index</th>
                            <th className='hover:bg-[#e0dfdf] border border-solid border-[#ddd] p-2 max-w-56 truncate' >First Name</th>
                            <th className='hover:bg-[#e0dfdf] border border-solid border-[#ddd] p-2 max-w-56 truncate' >Last Name</th>
                            <th className='hover:bg-[#e0dfdf] border border-solid border-[#ddd] p-2 max-w-56 truncate' >Company</th>
                            <th className='hover:bg-[#e0dfdf] border border-solid border-[#ddd] p-2 max-w-56 truncate' >Email</th>
                            <th className='hover:bg-[#e0dfdf] border border-solid border-[#ddd] p-2 max-w-56 truncate' >Actions</th>
                        </tr>
                    </thead>
                    <tbody className="h-full overflow-auto">
                        <AddDataButton handleAddCompany={handleAddCompany} handleInputChange={handleInputChange} newCompany={newCompany} />
                        {group?.recipients?.map((g, index) => (
                            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff' }}>
                                <td className='border border-solid border-[#ddd] p-2 max-w-56 truncate' >{index+1}</td>
                                <td className='border border-solid border-[#ddd] p-2 max-w-56 truncate' >{g.fname}</td>
                                <td className='border border-solid border-[#ddd] p-2 max-w-56 truncate' >{g.lname}</td>
                                <td className='border border-solid border-[#ddd] p-2 max-w-56 truncate' >{g.company}</td>
                                <td className='border border-solid border-[#ddd] p-2 max-w-56 truncate' >{g.email}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}




const AddDataButton = ({ newCompany, handleInputChange, handleAddCompany }) => {
    return (
        <React.Fragment>
            <tr style={{ backgroundColor: '#e0e0e0' }}>
                <td style={{ padding: '1px', border: '1px solid #ddd' }}>
                </td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                    <input
                        type="text"
                        name="fname"
                        value={newCompany.fname}
                        onChange={handleInputChange}
                        placeholder="First Name"
                        style={{ width: '100%', padding: '5px' }}
                    />
                </td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                    <input
                        type="text"
                        name="lname"
                        value={newCompany.lname}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                        style={{ width: '100%', padding: '5px' }}
                    />
                </td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                    <input
                        type="text"
                        name="company"
                        value={newCompany.company}
                        onChange={handleInputChange}
                        placeholder="Company"
                        style={{ width: '100%', padding: '5px' }}
                    />
                </td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                    <input
                        type="email"
                        name="email"
                        value={newCompany.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        style={{ width: '100%', padding: '5px' }}
                    />
                </td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                    <button onClick={handleAddCompany} style={{ padding: '5px 10px' }}>Add</button>
                </td>
            </tr>
        </React.Fragment>
    )
}


//PropType Validation
DataTable.propTypes = {
    group: PropTypes.object,
}
AddDataButton.propTypes = {
    newCompany: PropTypes.object,
    handleInputChange: PropTypes.func,
    handleAddCompany: PropTypes.func
}


export default DataTable;