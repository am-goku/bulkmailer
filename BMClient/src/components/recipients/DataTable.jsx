import React, { useState } from "react";

const DataTable = () => {

    const [emailGroups, setEmailGroups] = useState([
        { fname: 'John', lname: 'Doe', company: 'Company A', email: 'john@example.com' },
        { fname: 'Jane', lname: 'Smith', company: 'Company B', email: 'jane@example.com' },
    ]);

    const [newCompany, setNewCompany] = useState({ fname: '', lname: '', company: '', email: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCompany({ ...newCompany, [name]: value });
    };

    const handleAddCompany = () => {
        setEmailGroups([...emailGroups, newCompany]);
        setNewCompany({ fname: '', lname: '', company: '', email: '' });
    };



    return (
        <React.Fragment>
            <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <thead>
                        <tr className='bg-[#f2f2f2]'>
                            <th className='hover:bg-[#e0dfdf] border border-solid border-[#ddd] p-2' >First Name</th>
                            <th className='hover:bg-[#e0dfdf] border border-solid border-[#ddd] p-2' >Last Name</th>
                            <th className='hover:bg-[#e0dfdf] border border-solid border-[#ddd] p-2' >Company</th>
                            <th className='hover:bg-[#e0dfdf] border border-solid border-[#ddd] p-2' >Email</th>
                            <th className='hover:bg-[#e0dfdf] border border-solid border-[#ddd] p-2' >Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emailGroups.map((group, index) => (
                            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff' }}>
                                <td className='border border-solid border-[#ddd] p-2' >{group.fname}</td>
                                <td className='border border-solid border-[#ddd] p-2' >{group.lname}</td>
                                <td className='border border-solid border-[#ddd] p-2' >{group.company}</td>
                                <td className='border border-solid border-[#ddd] p-2' >{group.email}</td>
                            </tr>
                        ))}
                        <tr style={{ backgroundColor: '#e0e0e0' }}>
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
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}


export default DataTable;