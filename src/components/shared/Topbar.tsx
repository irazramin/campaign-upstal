"use client"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faBell, faChevronDown} from "@fortawesome/free-solid-svg-icons"


export default function Topbar({ sidebarOpen, setSidebarOpen }) {

    const handleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }
    return (
        <nav
            className='bg-white min-h-[60px] w-full relative shadow flex items-center justify-end px-[30px] md:px-[44px] py-[16px] '>
          <div className="absolute left-[10px] block md:hidden">
              <button className="w-[40px] h-[40px] border border-blue-500 flex items-center justify-center hover:bg-blue-500 hover:bg-opacity-20 duration-500 rounded" onClick={handleSidebar}>
                  <FontAwesomeIcon className="w-[20px] h-[20px] text-blue-500" icon={faBars} />
              </button>
          </div>
            <div className="flex gap-[16.38px] items-center">
                <div className="bg-[#FFA78D] w-[33.988px] h-[33.988px] rounded-full overflow-hidden block md:hidden">
                    <img className="w-[28.988px] h-[28.988px]" src="/user.png" alt=""/>
                </div>
                <div
                    className="p-[10.24px]  md:flex items-center justify-between gap-[10.24px] border-2 shadow-sm rounded-lg cursor-pointer hidden">
                    <img className="w-[33.988px] h-[33.988px]" src="/user.png" alt=""/>
                    <div className="mr-[30px]">
                        <p className="text-[14px] font-medium text-[#373B5C]">Welcome back,</p>
                        <h3 className="text-[16px] text-[#373B5C] font-medium">Hello</h3>
                    </div>
                </div>
            </div>
        </nav>
    )
}