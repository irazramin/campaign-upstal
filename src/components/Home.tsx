'use client'
import React, {useEffect} from 'react';
import {redirect} from "next/navigation";

const HomePage = ({ accessToken = '' }: any) => {
    const handleLoginButtonClick = () => {
        window.location.href = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=860ia2isxmjjdj&redirect_uri=http://localhost:3000/api/oauth/callback&scope=profile%20email`;
    }

    useEffect(() => {
        if(accessToken.value) {
            redirect(('/campaign'));
        }
    }, [accessToken])

    return (
        <div className='flex items-center justify-center h-screen bg-white'>
            <div className="shadow-lg w-[300px] h-[150px] flex items-center justify-center p-[20px]">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"
                        onClick={() => handleLoginButtonClick()}>
                    Login with Linkedin
                </button>
            </div>
        </div>
    );
};

export default HomePage;