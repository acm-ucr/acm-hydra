import React from "react";
import { useState } from "react";
import Snackbar from "../Snackbar";

const ClubroomRequest = () => {
    const SnackbarType = {
        SUCCESS: "success",
        ERROR: "error",
    };

    const [userData, setUserData] = useState({});
    const [snackbarType, setSnackbarType] = useState(SnackbarType.SUCCESS);
    const [submission, setSubmission] = useState(false);

    const handleTyping = e => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const click = async () => {
        // ADD CONDITIONS SO THAT THIS WORKS PROPERLY
        if (true) {
            setSnackbarType(SnackbarType.ERROR);
            setSubmission(true);
            setTimeout(() => {
                setSubmission(false);
            }, 2000);
        } else {
            setSnackbarType(SnackbarType.SUCCESS);
            setSubmission(true);
            setTimeout(() => {
                setSubmission(false);
            }, 2000);
        }
    };

    return (
        <section>
            {submission ? (
                <Snackbar
                    snackbarType={snackbarType}
                    message={
                        snackbarType === "error"
                            ? "Please ensure that you have filled out all the fields properly!"
                            : "Success"
                    }
                />
            ) : (
                <></>
            )}
            <form
                noValidate=''
                action=''
                className='container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid'
            >
                <fieldset className='grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900'>
                    <div className='space-y-2 col-span-full lg:col-span-1'>
                        <p className='font-medium text-white'>Profile</p>
                        <p className='text-xs text-white'>
                            Adipisci fuga autem eum!
                        </p>
                    </div>
                    <div className='grid grid-cols-6 gap-4 col-span-full lg:col-span-3'>
                        <div className='col-span-full sm:col-span-3'>
                            <label
                                htmlFor='username'
                                className='text-sm text-white'
                            >
                                Full Name
                            </label>
                            <input
                                onChange={handleTyping}
                                name='full_name'
                                id='username'
                                type='text'
                                placeholder='ie. Scotty Highlander'
                                className='w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
                            />
                        </div>
                        <div className='col-span-full sm:col-span-3'>
                            <label
                                htmlFor='website'
                                className='text-sm text-white'
                            >
                                R&apos;Card Number
                            </label>
                            <input
                                onChange={handleTyping}
                                name='card_number'
                                id='website'
                                type='text'
                                placeholder='XXXX-XXXX-XXXX-XXXX'
                                className='w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
                            />
                        </div>
                        <div className='col-span-full sm:col-span-3'>
                            <label
                                htmlFor='website'
                                className='text-sm text-white'
                            >
                                Year
                            </label>
                            <input
                                onChange={handleTyping}
                                name='year'
                                id='website'
                                type='text'
                                placeholder='ie. Freshmen'
                                className='w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
                            />
                        </div>
                        <div className='col-span-full sm:col-span-3'>
                            <label
                                htmlFor='website'
                                className='text-sm text-white'
                            >
                                Major
                            </label>
                            <input
                                onChange={handleTyping}
                                name='major'
                                id='website'
                                type='text'
                                placeholder='ie. Computer Science'
                                className='w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
                            />
                        </div>
                        <div className='col-span-full'>
                            <div className='flex items-center space-x-2'>
                                <button
                                    onClick={click}
                                    type='button'
                                    className='px-4 py-2 border rounded-md dark:border-gray-100 text-white'
                                >
                                    Change
                                </button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default ClubroomRequest;
