'use client'

import {usePathname, useRouter} from "next/navigation";
import {createClient} from "@supabase/supabase-js";
export default function Home() {
    const router: any = useRouter();
    const pathname: any = usePathname();
    const supabase = createClient('https://cjtzdsqouryfmydirtfm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqdHpkc3FvdXJ5Zm15ZGlydGZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMzMjc3NjksImV4cCI6MjAwODkwMzc2OX0.VOan3-qfoNET2jxsERxyz6j6O8Rhlq8kibn388ybFRI')

    async function signInWithLinkedIn() {
       try {
           const { data, error }: any = await supabase.auth.signInWithOAuth({
               provider: 'linkedin',
           });

           console.log(data)
       }catch (err: any) {
           console.log(err)
       }
    }

    return (
        <div className='flex items-center justify-center h-screen bg-white'>
           <div className="shadow-lg w-[300px] h-[150px] flex items-center justify-center p-[20px]">
               <button type="button"
                       onClick={signInWithLinkedIn}
                       className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full">Go to dashboard
               </button>

           </div>
        </div>
    )
}
