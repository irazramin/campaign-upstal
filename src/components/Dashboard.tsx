'use client'
import React, {useEffect, useState} from 'react';
import Sidebar from "@/components/shared/Sidebar";
import Topbar from "@/components/shared/Topbar";
import {redirect} from "next/navigation";

const Dashboard = ({children, accessToken, handleRemoveAccessToken}) => {
    const [sidebarOpen, setSidebarOpen]: any = useState(false);
    const [render, setRender]: any = useState(false);
    const [userLoggedOut, setUserLoggedOut] = useState(false);

    useEffect(() => {
        localStorage.setItem('access_token', JSON.stringify(accessToken.value));
    }, [accessToken]);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('access_token'));
        if (!token) {
            redirect(('/'));
        }
    }, [render]);



    return (
        <div className='text-black bg-[#FAFBFF]'>
            <div className="flex relative">
                <div>
                    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} render={render}
                             setRender={setRender} handleRemoveAccessToken={handleRemoveAccessToken} userLoggedOut={userLoggedOut} setUserLoggedOut={setUserLoggedOut}/>
                </div>

                <div
                    className={`w-[calc(100vh-300px)] md:ml-[300px] transition-all grow duration-150 overflow-hidden bg-[#F1F2F5] w-full pb-[30px]`}>
                    <Topbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
                    <section> {children} </section>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;