import React from 'react'
import BioSocialLink from './BioSocialLink'
import { BioSocialPlatformType } from '@/types'


function BioSocialPlatforms({ links }: { links: BioSocialPlatformType[] }) {

    return (
        <div className='w-full flex'>
            {links.map(link => <BioSocialLink key={link.platformName} link={link} />)}
        </div>
    )
}

export default BioSocialPlatforms