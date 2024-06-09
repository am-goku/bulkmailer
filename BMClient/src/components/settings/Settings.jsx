import React, { useEffect, useState } from 'react';
import { useSession } from '../../context/SessionContext';
import { useAppSelector } from '../../utils/store';
import { useDispatch } from 'react-redux';
import { setNewAccountInfo, updateAccountInfo } from '../../utils/reducer';

function Settings() {

    // account = {id, accName, settings: {smtp, accoundID, password, from, name, replyTo, signature , single} }
    const { account, setAccount } = useSession();
    const dispatch = useDispatch()
    const allAccounts = useAppSelector((state) => state?.groupReducer?.accountGroup);

    const [newAccount, setNewAccount] = useState({
        id: allAccounts?.length +1,
        name: `Account ${allAccounts?.length +1}`,
        settings: {
            smtp: '',
            accountID: '',
            password: '',
            from: '',
            name: '',
            replyTo: '',
            signature: '',
            single: false
        }
    });


    const handleChange = (e) => {
        if (account) {
            const { name, value } = e.target;
            const updatedAccount = {
                ...account,
                ['settings']: {
                    ...account?.settings,
                    [name]: value
                }
            };

            dispatch(updateAccountInfo(updatedAccount));
            setAccount(updatedAccount);
        } else {
            const { name, value } = e.target;

            const updatedAccount = {
                ...newAccount,
                ['settings']: {
                    ...newAccount?.settings,
                    [name]: value
                }
            }

            setNewAccount(updatedAccount);
        }
    }


    const saveNewAccount = () => {
        if (newAccount) {
            dispatch(setNewAccountInfo(newAccount));
            setAccount(newAccount);
        }
    }


    const changeAccount = (id) => {

        if (!id) {
            return setAccount(null)
        }

        const acc = allAccounts?.find(a => a.id === +id);
        setAccount(acc);
    }


    return (
        <React.Fragment>
            <div className='w-full h-full flex flex-col bg-[#e0dfdf] px-5'>

                <form className='p-3 rounded-lg shadow-md text-xs h-full flex flex-col'>

                    <div className='flex items-center mb-4 ml-4 gap-5'>
                        <select defaultValue={account?.id} onChange={(e)=>changeAccount(e.target.value)} id="options" className='px-7 py-1 border text-left'>
                            <option value="">--Please choose an account--</option>
                            {
                                allAccounts?.map((a, i) => {
                                    return <option key={i} value={a.id}>{a.name}</option>
                                })
                            }
                        </select>

                        <button type='button' onClick={saveNewAccount} className='px-5 border border-gray-400 rounded hover:bg-gray-300'>Save</button>
                    </div>

                    {/* SMTP Server Access */}
                    <div className='flex items-center mb-4'>
                        <h1 className='font-bold underline text-blue-800 w-32 text-right mr-4'>SMTP Server Access</h1>
                        <div className='flex-1'></div>
                    </div>
                    <div className='mb-4 flex items-center'>
                        <label htmlFor='smtp' className='w-32 text-right mr-4'>SMTP host:</label>
                        <input onChange={handleChange} defaultValue={account?.settings.smtp || 'smtp.domain.com'} type='text' id='smtp' name='smtp' className='flex-1 p-2 border border-gray-300 rounded' />
                    </div>

                    {/* Authentication */}
                    <div className='flex items-center mb-4'>
                        <h1 className='font-bold underline text-blue-800 w-32 text-right mr-4'>Authentication</h1>
                        <div className='flex-1'></div>
                    </div>
                    <div className='mb-4 flex items-center'>
                        <label htmlFor='accountID' className='w-32 text-right mr-4'>Account ID:</label>
                        <input defaultValue={account?.settings?.accountID || ''} onChange={handleChange} type='email' id='accountID' name='accountID' className='flex-1 p-2 border border-gray-300 rounded' />
                    </div>
                    <div className='mb-4 flex items-center'>
                        <label htmlFor='password' className='w-32 text-right mr-4'>Password:</label>
                        <input defaultValue={account?.settings?.password || ''} onChange={handleChange} type='password' id='password' name='password' className='flex-1 p-2 border border-gray-300 rounded' />
                    </div>

                    {/* Delivery */}
                    <div className='flex items-center mb-4'>
                        <h1 className='font-bold underline text-blue-800 w-32 text-right mr-4'>Delivery</h1>
                        <input type='checkbox' onChange={(e)=>handleChange({target: {name:e.target.name, value:e.target.checked}})} checked={account?.single} id='single' name='single' className='mr-2' />
                        <label htmlFor='single'>Single (recommented)</label>
                    </div>

                    {/* Sender Information */}
                    <div className='flex items-center mb-4'>
                        <h1 className='font-bold underline text-blue-800 w-32 text-right mr-4'>Sender Information</h1>
                        <div className='flex-1'></div>
                    </div>
                    <div className='mb-4 flex items-center'>
                        <label htmlFor='from' className='w-32 text-right mr-4'>From:</label>
                        <input defaultValue={account?.settings?.email || ''} onChange={handleChange} type='email' id='from' name='from' className='flex-1 p-2 border border-gray-300 rounded' />
                    </div>
                    <div className='mb-4 flex items-center'>
                        <label htmlFor='name' className='w-32 text-right mr-4'>Name:</label>
                        <input defaultValue={account?.settings?.name || ''} onChange={handleChange} type='text' id='name' name='name' className='flex-1 p-2 border border-gray-300 rounded' />
                    </div>
                    <div className='mb-4 flex items-center'>
                        <label htmlFor='replyTo' className='w-32 text-right mr-4'>Reply To:</label>
                        <input defaultValue={account?.settings?.replyTo || ''} onChange={handleChange} type='email' id='replyTo' name='replyTo' className='flex-1 p-2 border border-gray-300 rounded' />
                    </div>
                    <div className='mb-4 flex items-center h-full'>
                        <label htmlFor='signature' className='w-32 text-right mr-4 self-start'>Signature:</label>
                        <textarea defaultValue={account?.settings?.signature || ''} onChange={handleChange} name="signature" id="signature" className='flex-1 p-2 border border-gray-300 rounded h-full' />
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Settings;
