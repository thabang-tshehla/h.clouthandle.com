"use client"
import Navigation from '@/components/Navigation'
import React, { useEffect, useState } from 'react'
import { useAppContext } from '@/contexts/AppContext'
import { useRouter } from 'next/navigation';
import SpinnerLoader from '@/components/SpinnerLoader';

function layout({ children, }: { children: React.ReactNode }) {

    const router = useRouter();
    const { user } = useAppContext()
    const [isChecking, setIsChecking] = useState(true);


    useEffect(() => {
        if (!user) {
            router.push('/login');
        } else {
            setIsChecking(false);
        }
    }, [user, router]);


    if (isChecking) {
        return(
            <div className='w-screen h-screen flex items-center justify-center'>
                <SpinnerLoader></SpinnerLoader>
            </div>
        )
    }

    return (
        <div className='px-6 pt-6'>
            <div>{children}</div>
            <div className='fixed bottom-0 left-0 right-0'>
                <Navigation />
            </div>
        </div>
    )
}

export default layout