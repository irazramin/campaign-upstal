import {useEffect, useState} from "react";
import axios from "axios";

async function useUser () {
    const [user, setUser]: any = useState({});

    useEffect(() => {
        const accessToken = JSON.parse(localStorage.getItem('access_token'));

        // const data = axios.get('', {
        //     method: 'GET',
        //     headers: {
        //         'Authorization': `Bearer ${accessToken}`
        //     }
        // });

    }, [])
}