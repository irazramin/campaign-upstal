'use client'

import {usePathname, useRouter} from "next/navigation";

export default function Home() {
    const router: any = useRouter();
    const pathname: any = usePathname();
    console.log(pathname+'campaign')
    return (
        <div className='flex items-center justify-center h-screen bg-white'>
           <div className="shadow-lg w-[300px] h-[150px] flex items-center justify-center p-[20px]">
               <button type="button"
                       onClick={() => router.push(pathname+'campaign')}
                       className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full">Go to dashboard
               </button>

           </div>
        </div>
    )
}
