'use client'
import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {useParams, useRouter} from "next/navigation";

const Edit = () => {
    const param: any = useParams();
    const router: any = useRouter();
    const [render, setRender]: any = useState(false)
    const [prospectInput, setProspectInput]: any = useState([{
        email: "",
        firstName: "",
        lastName: "",
        company: "",
        website: "",
        linkedin: ""
    }]);

    const [selectedProspect, setSelectedProspect]: any = useState([])
    const [prospectCollapse, setProspectCollapse]: any = useState(false);
    const [campaigns, setCampaigns]: any = useState([]);
    const [campaign, setCampaign]: any = useState({});

    // fetch prospect data from localstorage
    useEffect((): any => {
        const data: any = JSON.parse(localStorage.getItem("prospectData") as any);
        setProspectInput(data);
    }, []);

    // fetch data from localstorage
    useEffect(() => {
        const storedCampaigns: any = localStorage.getItem("campaign");
        if (storedCampaigns) {
            setCampaigns(JSON.parse(storedCampaigns as any));
        }
    }, []);

    const handleProspectCheck = (selectedProspectData: any): any => {
        if (selectedProspect) {
            setSelectedProspect([...selectedProspect, selectedProspectData]);
        } else {
            setSelectedProspect([selectedProspectData]);

        }
    }

    // set single data to state based on id
    useEffect((): any => {
        const {id} = param;
        if(campaigns) {
            if (typeof id === "string") {
                const campaignData: any = campaigns.filter((item: any, idx: any): boolean => parseInt(id) === (idx+1))
                setCampaign(campaignData[0]);
            }
        }
    }, [campaigns]);

    // this useEffect will call, if campaigns data is updated. Then it will store in localstorage
    useEffect(() => {
        localStorage.setItem("campaign", JSON.stringify(campaigns) as any)
    }, [campaigns])

    // set input data to state
    const handleInput = (e: any): any => {
        const {name, value} = e.target;
        const inputValue = {...campaign};
        inputValue[name] = value;
        setCampaign(inputValue);
    }

    // update campaign date
    const handleSubmit = (e: any): any => {
        const {id} = param;
        e.preventDefault();

        campaigns.forEach((item: any, idx: any): any => {
            if((idx+1) === parseInt(id as string)) {
                const updatedItems = [...campaigns];
                updatedItems[idx] = campaign;
                setCampaigns(updatedItems);
            }
        });

        setRender(!render)
    }

    return (
        <div className="h-[calc(100vh-100px)] m-[20px] md:m-[40px] mb-[50px]">
            <div className="bg-white p-3 flex items-center justify-between mb-5">
                <h4 className="text-xl font-semibold uppercase">Edit a Campaign</h4>
                <button type="button"
                        onClick={() => router.back()}
                        className="w-[40px] h-[40px] border border-blue-500 flex items-center justify-center hover:bg-blue-500 hover:bg-opacity-20 duration-500 rounded">
                    <FontAwesomeIcon className="w-[20px] h-[20px] text-blue-500" icon={faArrowLeft}/>
                </button>
            </div>

            <div className="bg-white p-[20px] w-full  mx-auto mb-[50px]">
                <form action="#" onSubmit={handleSubmit}>
                    <div className="flex items-center gap-[20px] w-full">
                        <div className="flex flex-col w-full">
                            <label htmlFor="name">Campaign Name</label>
                            <input type="text" name="name" className="border border-gray-300 p-3 rounded w-full mt-2" value={campaign?.name} onChange={(e) => handleInput(e)}/>
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="contents">Campaign Contents</label>
                            <input type="text" name="contents"
                                   className="border border-gray-300 p-3 rounded w-full mt-2" value={campaign?.contents} onChange={(e) => handleInput(e)}/>
                        </div>
                    </div>
                    <div className="flex items-center gap-[20px] w-full mt-[15px]">
                        <div className="flex flex-col w-full">
                            <label htmlFor="start">Campaign Start</label>
                            <input type="date" name="start" className="border border-gray-300 p-3 rounded w-full mt-2" value={campaign?.start} onChange={(e) => handleInput(e)}/>
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="end">Campaign end</label>
                            <input type="date" name="end" className="border border-gray-300 p-3 rounded w-full mt-2" value={campaign?.end} onChange={(e) => handleInput(e)}/>
                        </div>
                    </div>
                    <div
                        className={`w-full mt-[15px] border border-gray-300 p-3 rounded transition-all duration-300 cursor-pointer ${prospectCollapse ? 'h-full' : 'h-[55px] overflow-hidden'}`}>
                        <div className="flex items-center justify-between"
                             onClick={() => setProspectCollapse(!prospectCollapse)}>
                            <p>Prospects</p>
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </div>
                        <div className="flex flex-col mt-[30px]">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">
                                        <table className="min-w-full text-left text-sm font-light">
                                            <thead
                                                className="border-b border-gray-300 bg-blue-500 text-white font-medium border">
                                            <tr>
                                                <th scope="col" className="px-6 py-4 border w-[120px]">#</th>
                                                <th scope="col" className="px-6 py-4 border">Email</th>
                                                <th scope="col" className="px-6 py-4 border">First Name</th>
                                                <th scope="col" className="px-6 py-4 border">Last Name</th>
                                                <th scope="col" className="px-6 py-4 border">Company</th>
                                                <th scope="col" className="px-6 py-4 border">Website</th>
                                                <th scope="col" className="px-6 py-4 border">Linkedin Url</th>

                                            </tr>
                                            </thead>
                                            <tbody className="border border-gray-300">
                                            {prospectInput?.map((item: any, idx: any): any => {
                                                return (
                                                    <tr
                                                        key={idx}
                                                        className="border border-gray-300">
                                                        <td className="whitespace-nowrap font-medium border border-gray-300">
                                                            <input type="checkbox" name="check"
                                                                   onChange={() => handleProspectCheck(item)}
                                                                   className="w-full h-full  outline-2 p-3"/>
                                                        </td>
                                                        <td className="whitespace-nowrap font-medium border border-gray-300 w-[120px] h-[80px]">
                                                            <input type="email" name="email" value={item.email}
                                                                   readOnly={true}
                                                                   className="w-full h-full  outline-2 p-3" />
                                                        </td>

                                                        <td className="whitespace-nowrap font-medium border border-gray-300 w-[120px] h-[80px]">
                                                            <input type="text" name="firstName" value={item.firstName}
                                                                   readOnly={true}
                                                                   className="w-full h-full  outline-2 p-3"/>
                                                        </td>
                                                        <td className="whitespace-nowrap font-medium border border-gray-300 w-[120px] h-[80px]">
                                                            <input type="text" name="lastName" value={item.lastName}
                                                                   readOnly={true}
                                                                   className="w-full h-full  outline-2 p-3"/>
                                                        </td>
                                                        <td className="whitespace-nowrap font-medium border border-gray-300 w-[120px] h-[80px]">
                                                            <input type="text" name="company" value={item.company}
                                                                   readOnly={true}
                                                                   className="w-full h-full  outline-2 p-3"/>
                                                        </td>
                                                        <td className="whitespace-nowrap font-medium border border-gray-300 w-[120px] h-[80px]">
                                                            <input type="text" name="website" value={item.website}
                                                                   readOnly={true}
                                                                   className="w-full h-full  outline-2 p-3"/>
                                                        </td>
                                                        <td className="whitespace-nowrap font-medium border border-gray-300 w-[120px] h-[80px]">
                                                            <input type="text" name="linkedin" value={item.linkedin}
                                                                   readOnly={true}
                                                                   className="w-full h-full  outline-2 p-3"/>
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
                    </div>
                    <div className="flex flex-col w-full  mt-[15px]">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="" cols={30} rows={10}
                                  className="border border-gray-300 p-3 rounded w-full mt-2" value={campaign?.message} onChange={(e) => handleInput(e)}></textarea>
                    </div>
                    <div className="text-center mt-[30px]">
                        <input type="submit"
                               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-3 w-[150px] cursor-pointer dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                               value="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Edit;