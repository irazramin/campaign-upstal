'use client'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookOpenReader, faChevronRight, faTimes, faUserPen} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {library} from "@fortawesome/fontawesome-svg-core";

export default function Sidebar({ sidebarOpen, setSidebarOpen, render, setRender, setUserLoggedOut, userLoggedOut, handleRemoveAccessToken }: any) {
    library.add(faChevronRight, faTimes, faUserPen)

    const router: any = useRouter();
    const pathname: any = usePathname();
    const [logoutData, setLogoutData]: any = useState({})

    const navItems: any = [
        {
            id: 1,
            name: 'Campaign',
            path: '/campaign',
            icon: faBookOpenReader
        },
        {
            id: 2,
            name: 'Prospects',
            path: '/prospects',
            icon: faUserPen
        }
    ];

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        setRender(!render);
        handleRemoveAccessToken(true);
    }

    return (
        <aside
            className={`${sidebarOpen ? 'left-0' : '-left-[300px]'} w-[280px] md:w-[300px] max-w-[300px] fixed z-50 h-screen bg-white text-[#1A1558]  transition-all duration-300 top-0 md:left-0`}>
            <div>
                <p className='text-center font-bold uppercase mt-[20px] p-2 border-black border-opacity-20 rounded-lg shadow mx-[40px]'>Dashboard</p>
            </div>
            <FontAwesomeIcon onClick={() => setSidebarOpen(false)} icon={faTimes} className='text-[#1A1558] text-[16px] w-[20px] h-[20px] absolute right-[10px] top-[30px] block md:hidden' />
            <ul className='mt-[30px]'>
                {
                    navItems.map((item: any) => (
                        <Link href={item.path} key={item?.id}>
                            <li
                                className="mb-[20px] group cursor-pointer duration-500 transition-all relative ease-linear"
                            >
                                <div
                                    className={`${pathname == item.path ? "after:content-[''] after:absolute after:rounded-tl-[15px] after:rounded-bl-[15px] after:block after:w-[8px] after:h-full after:bg-blue-500 after:duration-700 after:right-0" : ''} px-[20px] flex items-center gap-[20px] group-hover:after:content-[''] group-hover:after:absolute group-hover:after:rounded-tl-[15px] after:rounded-bl-[15px] group-hover:after:block after:w-[8px] after:h-full group-hover:after:bg-blue-500 after:duration-700 after:right-0`}
                                >
                                    <div
                                        className={`${pathname == item.path ? "bg-blue-500 bg-opacity-20" : ""} w-[40px] h-[40px] group-hover:bg-blue-500 group-hover:duration-300 group-hover:bg-opacity-20 rounded-[10px] flex items-center justify-center`}
                                    >
                                        <FontAwesomeIcon icon={item.icon} className={`${pathname == item.path ? "text-blue-500" : "text-gray-900 "} w-[20px] h-[20px] group-hover:text-blue-500 group-hover:duration-300`} />
                                    </div>
                                    <p
                                        className={`${pathname == item.path ? "text-blue-500" : "text-gray-900"}  hover:text-lg group-hover:text-blue-500 group-hover:duration-300 text-lg font-medium`}
                                    >
                                        {item.name}
                                    </p>
                                </div>
                            </li>
                        </Link>
                    ))
                }
                <li className='flex justify-center items-end absolute bottom-[30px] text-center text-md mx-auto font-medium left-[40%] cursor-pointer' onClick={handleLogout}>Log out</li>
            </ul>
        </aside>
    )
}