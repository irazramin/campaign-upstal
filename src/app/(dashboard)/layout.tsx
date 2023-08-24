'use client'
import Sidebar from "@/components/shared/Sidebar";
import Topbar from "@/components/shared/Topbar";
import {useState} from "react";


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    const [sidebarOpen, setSidebarOpen]: any = useState(false);
    return (
            <div className='text-black bg-[#FAFBFF]'>
                <div className="flex relative">
                        <div>
                            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
                        </div>

                        <div
                            className={`w-[calc(100vh-300px)] md:ml-[300px] transition-all grow duration-150 overflow-hidden bg-[#F1F2F5] w-full pb-[30px]`}>
                            <Topbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
                            <section> {children} </section>
                        </div>
                </div>
            </div>
    )
}
