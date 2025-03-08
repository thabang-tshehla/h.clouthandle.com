'use server'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';


export default async function LoginPage({ searchParams }: { searchParams: { token?: string } }) {


    
    const token = searchParams?.token;
    
    if (!token) {
        return <p>Missing token</p>;
    }

    const cookieStore = await cookies()

    

    cookieStore.set({
        name: 'authToken',
        value: token,
        httpOnly: true,
        path: '/',
    })

    redirect('/admin');
}
