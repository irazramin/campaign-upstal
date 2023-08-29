'use client'
import React, {useEffect, useState} from 'react';
import {usePathname, useRouter} from "next/navigation";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

const Prospects = () => {
    const [render, setRender] = useState(false);

    const [prospectInput, setProspectInput]: any = useState([{
        email: "",
        firstName: "",
        lastName: "",
        company: "",
        website: "",
        linkedin: ""
    }]);

    const addProspectHandle = () => {
        setProspectInput([...prospectInput, {
            email: "",
            firstName: "",
            lastName: "",
            company: "",
            website: "",
            linkedin: ""
        }]);
    }

    const handleInput = (e, index) => {
        e.preventDefault();
        const {name, value} = e.target;
        const inputsData = [...prospectInput];

        if (index >= 0 && index < inputsData.length) {
            inputsData[index][name] = value;
            setProspectInput(inputsData);
            localStorage.setItem("prospectData", JSON.stringify(inputsData));
        }
    }

    useEffect(() => {
        const data: any = JSON.parse(localStorage.getItem("prospectData"));
        if(data) {
            setProspectInput(data);
        }else {
            setProspectInput([{
                email: "",
                firstName: "",
                lastName: "",
                company: "",
                website: "",
                linkedin: ""
            }]);
        }
    }, [render]);

    const handleDelete = index => {
        if (window.confirm("Do you really want to leave?")) {
            const afterDelete = prospectInput.filter((item, idx) => index !== idx);
            localStorage.setItem("prospectData", JSON.stringify(afterDelete));
            setRender(!render)
        }
    }


    return (
        <div className="h-[calc(100vh-100px)] m-[20px] md:m-[40px]">
            <div className="bg-white p-3 flex items-center justify-between mb-5">
                <h4 className="text-xl font-semibold uppercase">Prospects</h4>
            </div>

            <div className="bg-white p-[20px]">
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-left text-sm font-light">
                                    <thead
                                        className="border-b border-gray-300 bg-blue-500 text-white font-medium border">
                                    <tr>
                                        <th scope="col" className="px-6 py-4 border">Email</th>
                                        <th scope="col" className="px-6 py-4 border">First Name</th>
                                        <th scope="col" className="px-6 py-4 border">Last Name</th>
                                        <th scope="col" className="px-6 py-4 border">Company</th>
                                        <th scope="col" className="px-6 py-4 border">Website</th>
                                        <th scope="col" className="px-6 py-4 border">Linkedin Url</th>
                                        <th scope="col" className="px-6 py-4 border w-[100px]">Action</th>

                                    </tr>
                                    </thead>
                                    <tbody className="border border-gray-300">
                                    {prospectInput?.map((item, idx) => {
                                        return (
                                            <tr
                                                key={idx}
                                                className="border border-gray-300">
                                                <td className="whitespace-nowrap font-medium border border-gray-300 w-[120px] h-[80px]">
                                                    <input type="email" name="email" value={item.email}
                                                           onChange={(e: any) => handleInput(e, idx)}
                                                           className="w-full h-full  outline-2 outline-blue-500  p-3"/>
                                                </td>
                                                <td className="whitespace-nowrap font-medium border border-gray-300 w-[120px] h-[80px]">
                                                    <input type="text" name="firstName" value={item.firstName}
                                                           onChange={(e: any) => handleInput(e, idx)}
                                                           className="w-full h-full  outline-2 outline-blue-500 p-3"/>
                                                </td>
                                                <td className="whitespace-nowrap font-medium border border-gray-300 w-[120px] h-[80px]">
                                                    <input type="text" name="lastName" value={item.lastName}
                                                           onChange={(e: any) => handleInput(e, idx)}
                                                           className="w-full h-full  outline-2 outline-blue-500 p-3"/>
                                                </td>
                                                <td className="whitespace-nowrap font-medium border border-gray-300 w-[120px] h-[80px]">
                                                    <input type="text" name="company" value={item.company}
                                                           onChange={(e: any) => handleInput(e, idx)}
                                                           className="w-full h-full  outline-2 outline-blue-500 p-3"/>
                                                </td>
                                                <td className="whitespace-nowrap font-medium border border-gray-300 w-[120px] h-[80px]">
                                                    <input type="text" name="website" value={item.website}
                                                           onChange={(e: any) => handleInput(e, idx)}
                                                           className="w-full h-full  outline-2 outline-blue-500 p-3"/>
                                                </td>
                                                <td className="whitespace-nowrap font-medium border border-gray-300 w-[120px] h-[80px]">
                                                    <input type="text" name="linkedin" value={item.linkedin}
                                                           onChange={(e: any) => handleInput(e, idx)}
                                                           className="w-full h-full  outline-2 outline-blue-500 p-3"/>
                                                </td>
                                                <td className="whitespace-nowrap font-medium border border-gray-300 w-full h-[80px] flex items-center justify-center">
                                                    <button type="button" onClick={() => handleDelete(idx)}>
                                                        <FontAwesomeIcon icon={faTrashAlt}/>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center my-[10px] '>
                    <button
                        className="w-[40px] h-[40px] border border-blue-500 flex items-center justify-center hover:bg-blue-500 hover:bg-opacity-20 duration-500 rounded active:scale-[0.98]"
                        onClick={addProspectHandle}><FontAwesomeIcon icon={faPlus} className="w-[18px] h-[18px] text-blue-500 font-semibold" /></button>
                </div>
            </div>
        </div>
    );
};

export default Prospects;