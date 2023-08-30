
import Dashboard from "@/components/Dashboard";
import {cookies} from "next/headers";


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    const accessToken: any = cookies().get('access_token');

    const handleRemoveAccessToken: any = async (userLoggedOut: any): any => {
        "use server"
        if(userLoggedOut) {
            cookies().delete('access_token');
        }
    }

    return (
        <Dashboard children={children} accessToken={accessToken} handleRemoveAccessToken={handleRemoveAccessToken}/>
    )
}
