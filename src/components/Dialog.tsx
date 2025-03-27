import { useAdminBioContext } from '@/app/admin/bio/page'
import React from 'react'

function Dialog({ children }: { children: React.ReactNode }) {

    const {setDialogComponent} = useAdminBioContext()
    
    return (
        <div className='z-10 w-screen h-screen fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
            <div className='w-80 h-80 bg-white p-4 rounded'>
                <div className='flex flex-row-reverse mb-2'>
                    <span onClick = {() => setDialogComponent(null)} className='w-7 h-7 rounded-full flex justify-center cursor-pointer text-gray-500 bg-slate-200'>&times;</span>
                </div>
                <div>
                    {children}
                </div>
            </div>
            <div className='absolute w-full h-full bg-black opacity-70 -z-10'></div>

        </div>
    )
}

export default Dialog