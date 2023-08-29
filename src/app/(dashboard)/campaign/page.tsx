'use client'
import React, {useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPen, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {usePathname, useRouter} from "next/navigation";
import axios from "axios";

const Campaign = () => {
    const router = useRouter();
    const pathname = usePathname();
    const form = useRef();

    const [render, setRender] = useState(false);
    const [campaigns, setCampaign]: any = useState([]);

    useEffect(() => {
        const campaignData = JSON.parse(localStorage.getItem("campaign"));
        if (campaignData) {
            setCampaign(campaignData);
        }
    }, [render])



    const handleNavigate = () => {
        router.push(pathname + '/add');
        console.log(pathname + '/add')
    }

    const handleDelete = index => {
        if (window.confirm("Do you really want to leave?")) {
            const afterDelete = campaigns.filter((item, idx): boolean => index !== idx);
            localStorage.setItem("campaign", JSON.stringify(afterDelete));
            setRender(!render)
        }
    }

    const handleSendMail = async (data) => {
        const apiKey = 'a0284f88fc95b688a60f7430c9592066-b0ed5083-0d6f72d2';
        const domain = 'sandboxb1b84b7a83ea4875af5377de3b5f074d.mailgun.org';
        console.log(data)
       for (const item of data.prospect) {
           const recipient = item.email;

           const formData = new FormData();
           formData.append('from', 'irazramin@gmail.com');
           formData.append('to', recipient);
           formData.append('subject', 'Test Email');

           formData.append('text', 'This is a test email sent from Vue.js using the Mailgun API.');

           try {
               await axios.post(`https://api.mailgun.net/v3/${domain}/messages`, formData, {
                   auth: {
                       username: 'api',
                       password: apiKey,
                   },
               });

               alert('Email sent successfully');
           } catch (error) {
               console.error('Error sending email:', error);
               alert('Failed to send email');
           }
       }
    }

    const handleEdit = (index) => {
        router.push(`${pathname}/${index + 1}`);
    }
    return (
        <div className="h-[calc(100vh-100px)] m-[10px] md:m-[40px]">
            <div className="bg-white p-3 flex items-center justify-between mb-5">
                <h4 className="text-xl font-semibold uppercase">Campaigns</h4>
                <button type="button"
                        onClick={handleNavigate}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Add Campaign
                </button>

            </div>

            {campaigns?.map((item, idx) => {
                return (
                    <div className="" key={idx}>
                        <div className="bg-white rounded border-b border-t w-full px-[30px] py-[20px]">
                            <div className="flex items-center justify-between h-full w-full min-h-[140px]">
                                <div>
                                    <h2 className="font-semibold text-xl">{item.name}</h2>
                                    <h4 className="mt-[5px] font-normal">Prospect by: {item.prospect.length}</h4>
                                </div>
                                <div className="flex items-center gap-[10px] justify-center flex-col">
                                    <div className="flex items-center gap-[10px]">
                                        <button
                                            className="w-[50px] h-[40px] bg-blue-500 bg-opacity-20 rounded flex items-center justify-center active:scale-[0.98]"
                                            onClick={() => handleEdit(idx)}><FontAwesomeIcon
                                            className="w-[18px] h-[18px] text-xs text-blue-500" icon={faPen}/></button>
                                        <button
                                            className="w-[50px] h-[40px] bg-blue-500 bg-opacity-20 rounded flex items-center justify-center active:scale-[0.98]"
                                            onClick={() => handleDelete(idx)}><FontAwesomeIcon
                                            className="w-[18px] h-[18px] text-blue-500" icon={faTrashAlt}/></button>
                                    </div>
                                    <button
                                        className="w-[50px] h-[40px] bg-blue-500 bg-opacity-20 rounded flex items-center justify-center active:scale-[0.98]"
                                        onClick={() => handleSendMail(item)}><FontAwesomeIcon
                                        className="w-[18px] h-[18px] text-blue-500" icon={faEnvelope}/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })

            }
        </div>
    );
};

export default Campaign;