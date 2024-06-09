import React from 'react';

function Settings() {
    return (
        <React.Fragment>
            <div className='w-full h-full flex flex-col bg-[#e0dfdf] px-5'>

                <form className='p-3 rounded-lg shadow-md text-xs h-full flex flex-col'>

                    <div className='flex items-center mb-4 ml-4 gap-5'>
                        <select id="options" className='px-7 py-1 border text-left'>
                            <option value="">--Please choose an option--</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>

                        <button type='button' className='px-5 border border-gray-400 rounded hover:bg-gray-300'>Save</button>
                    </div>

                    {/* SMTP Server Access */}
                    <div className='flex items-center mb-4'>
                        <h1 className='font-bold underline text-blue-800 w-32 text-right mr-4'>SMTP Server Access</h1>
                        <div className='flex-1'></div>
                    </div>
                    <div className='mb-4 flex items-center'>
                        <label htmlFor='smtp' className='w-32 text-right mr-4'>SMTP host:</label>
                        <input defaultValue={'smtp.domain.com'} type='text' id='smtp' name='smtp' className='flex-1 p-2 border border-gray-300 rounded' />
                    </div>

                    {/* Authentication */}
                    <div className='flex items-center mb-4'>
                        <h1 className='font-bold underline text-blue-800 w-32 text-right mr-4'>Authentication</h1>
                        <div className='flex-1'></div>
                    </div>
                    <div className='mb-4 flex items-center'>
                        <label htmlFor='accID' className='w-32 text-right mr-4'>Account ID:</label>
                        <input type='email' id='accID' name='accID' className='flex-1 p-2 border border-gray-300 rounded' />
                    </div>
                    <div className='mb-4 flex items-center'>
                        <label htmlFor='password' className='w-32 text-right mr-4'>Password:</label>
                        <input type='password' id='password' name='password' className='flex-1 p-2 border border-gray-300 rounded' />
                    </div>

                    {/* Delivery */}
                    <div className='flex items-center mb-4'>
                        <h1 className='font-bold underline text-blue-800 w-32 text-right mr-4'>Delivery</h1>
                        {/* <div className='flex-1'></div> */}
                        <input type='checkbox' id='delivery' name='delivery' className='mr-2' />
                        <label htmlFor='delivery'>Single (recommented)</label>
                    </div>

                    {/* Sender Information */}
                    <div className='flex items-center mb-4'>
                        <h1 className='font-bold underline text-blue-800 w-32 text-right mr-4'>Sender Information</h1>
                        <div className='flex-1'></div>
                    </div>
                    <div className='mb-4 flex items-center'>
                        <label htmlFor='from' className='w-32 text-right mr-4'>From:</label>
                        <input type='email' id='from' name='from' className='flex-1 p-2 border border-gray-300 rounded' />
                    </div>
                    <div className='mb-4 flex items-center'>
                        <label htmlFor='name' className='w-32 text-right mr-4'>Name:</label>
                        <input type='text' id='name' name='name' className='flex-1 p-2 border border-gray-300 rounded' />
                    </div>
                    <div className='mb-4 flex items-center'>
                        <label htmlFor='replyTo' className='w-32 text-right mr-4'>Reply To:</label>
                        <input type='email' id='replyTo' name='replyTo' className='flex-1 p-2 border border-gray-300 rounded' />
                    </div>
                    <div className='mb-4 flex items-center h-full'>
                        <label htmlFor='sign' className='w-32 text-right mr-4 self-start'>Signature:</label>
                        <textarea name="sign" id="sign" className='flex-1 p-2 border border-gray-300 rounded h-full' />
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Settings;
