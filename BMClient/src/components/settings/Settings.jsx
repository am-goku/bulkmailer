import React, { useState } from 'react';
import { useSession } from '../../context/SessionContext';
import { useAppSelector } from '../../utils/store';
import { useDispatch } from 'react-redux';
import { setNewAccountInfo, updateAccountInfo } from '../../utils/reducer';

function Settings() {

    const { account, setAccount } = useSession();
    const dispatch = useDispatch();
    const allAccounts = useAppSelector((state) => state?.groupReducer?.accountGroup);

    const [newAccount, setNewAccount] = useState({
        id: allAccounts?.length + 1,
        name: `Account ${allAccounts?.length + 1}`,
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
        const { name, value } = e.target;

        if (account) {
            const updatedAccount = {
                ...account,
                settings: {
                    ...account.settings,
                    [name]: value
                }
            };

            dispatch(updateAccountInfo(updatedAccount));
            setAccount(updatedAccount);
        } else {
            const updatedAccount = {
                ...newAccount,
                settings: {
                    ...newAccount.settings,
                    [name]: value
                }
            };

            setNewAccount(updatedAccount);
        }
    };

    const saveNewAccount = () => {
        if (newAccount && !account) {
            if (!newAccount.settings.accountID || !newAccount.settings.password) {
                alert('Please fill out the credentials');
                return;
            }
            dispatch(setNewAccountInfo(newAccount));
            setAccount(newAccount);
        }
    };

    const changeAccount = (id) => {
        if (!id) {
            setAccount(null);
            return;
        }
        const acc = allAccounts.find(a => a.id === +id);
        setNewAccount(null);
        setAccount(acc);
    };

    const currentSettings = account ? account.settings : newAccount?.settings;

    return (
        <React.Fragment>
            <div className='w-full h-full flex flex-col bg-[#e0dfdf] px-5'>
                <form className='p-3 rounded-lg shadow-md text-xs h-full flex flex-col'>
                    <div className='flex items-center mb-4 ml-4 gap-5'>
                        <select defaultValue={account?.id || ""} onChange={(e) => changeAccount(e.target.value)} id="options" className='px-7 py-1 border text-left'>
                            <option value="">--Please choose an account--</option>
                            {
                                allAccounts?.map((a, i) => (
                                    <option key={i} value={a.id}>{a.name}</option>
                                ))
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
                        <input onChange={handleChange} value={currentSettings.smtp || ''} placeholder='smtp.domain.com' type='text' id='smtp' name='smtp' className='flex-1 p-2 border border-gray-300 rounded' />
                    </div>

                    {/* Authentication */}
                    <div className='flex items-center mb-4'>
                        <h1 className='font-bold underline text-blue-800 w-32 text-right mr-4'>Authentication</h1>
                        <div className='flex-1'></div>
                    </div>
                    <div className='mb-4 flex items-center'>
                        <label htmlFor='accountID' className='w-32 text-right mr-4'>Account ID:</label>
                        <input value={currentSettings.accountID || ''} onChange={handleChange} type='email' id='accountID' name='accountID' className='flex-1 p-2 border border-gray-300 rounded' />
                    </div>
                    <div className='mb-4 flex items-center'>
                        <label htmlFor='password' className='w-32 text-right mr-4'>Password:</label>
                        <input value={currentSettings.password || ''} onChange={handleChange} type='password' id='password' name='password' className='flex-1 p-2 border border-gray-300 rounded' />
                    </div>

                    {/* Delivery */}
                    <div className='flex items-center mb-4'>
                        <h1 className='font-bold underline text-blue-800 w-32 text-right mr-4'>Delivery</h1>
                        <input type='checkbox' onChange={(e) => handleChange({ target: { name: 'single', value: e.target.checked } })} checked={currentSettings.single || false} id='single' name='single' className='mr-2' />
                        <label htmlFor='single'>Single (recommended)</label>
                    </div>

                    {/* Sender Information */}
                    <div className='flex items-center mb-4'>
                        <h1 className='font-bold underline text-blue-800 w-32 text-right mr-4'>Sender Information</h1>
                        <div className='flex-1'></div>
                    </div>
                    <div className='mb-4 flex items-center'>
                        <label htmlFor='from' className='w-32 text-right mr-4'>From:</label>
                        <input value={currentSettings.from || ''} onChange={handleChange} type='email' id='from' name='from' className='flex-1 p-2 border border-gray-300 rounded' />
                    </div>
                    <div className='mb-4 flex items-center'>
                        <label htmlFor='name' className='w-32 text-right mr-4'>Name:</label>
                        <input value={currentSettings.name || ''} onChange={handleChange} type='text' id='name' name='name' className='flex-1 p-2 border border-gray-300 rounded' />
                    </div>
                    <div className='mb-4 flex items-center'>
                        <label htmlFor='replyTo' className='w-32 text-right mr-4'>Reply To:</label>
                        <input value={currentSettings.replyTo || ''} onChange={handleChange} type='email' id='replyTo' name='replyTo' className='flex-1 p-2 border border-gray-300 rounded' />
                    </div>
                    <div className='mb-4 flex items-center h-full'>
                        <label htmlFor='signature' className='w-32 text-right mr-4 self-start'>Signature:</label>
                        <textarea value={currentSettings.signature || ''} onChange={handleChange} name="signature" id="signature" className='flex-1 p-2 border border-gray-300 rounded h-full' />
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Settings;
