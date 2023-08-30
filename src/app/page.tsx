import HomePage from "@/components/Home";
import {cookies} from "next/headers";

export default function Home() {
    const accessToken: any = cookies().get('access_token');
    console.log(accessToken)
    return (
        <HomePage accessToken={accessToken}/>
    )
}
