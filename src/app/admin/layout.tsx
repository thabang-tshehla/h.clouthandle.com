import Navigation from '@/components/Navigation'
import React from 'react'

function layout({ children, }: { children: React.ReactNode }) {

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