'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import clouthandleAPI from '@/lib/clouthandleAPI';
import { useAppContext } from '@/contexts/AppContext';

export default function LoginPage() {

    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('authToken');

    const {user, setUser} = useAppContext()

    const fetchUser = async () => {

        try {
            const response = await clouthandleAPI.post('/auth/refresh', {
                refreshToken: token
            })
    
            const {user, authToken} = response.data

            setUser(user)

        } catch (error) {
            console.log(error);
            
        }
        
    }

    useEffect(() => {

        if (!token){
            router.push('https://clouthandle.com/login')
            return
        }


        console.log(token);
        
        localStorage.setItem('authToken', token)
        // fetc hUser()

        // document.cookie = `authToken=${token}; path=/; secure; HttpOnly`;


        router.push('/admin');



    }, [token, router]);


    if (!token) {
        return (
            <p><input type="text" /></p>
        )
    }

    return <p>Logging in...</p>;
}
