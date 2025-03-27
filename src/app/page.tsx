import clouthandleAPI from '@/lib/clouthandleAPI';
import { headers } from 'next/headers'
import BioProfilePicture from '@/components/BioProfilePicture';
import BioTitle from '@/components/BioTitle';
import { publicClouthandle } from '@/types';
import BioLabels from '@/components/BioLabels';
import BioCountries from '@/components/BioCountries';
import BioSocialPlatforms from '@/components/BioSocialPlatforms';


export default async function Home() {

    const reqheaders = await headers()
    const handle = reqheaders.get('x-original-host');

    const response = await clouthandleAPI.get(`/clouthandles/${handle}`)
    
    const user: publicClouthandle = response.data
    user.links = [
        {
            platformHandle: 'leomessi',
            numFollowers: 8000,
            platformName: 'instagram'
        }
    ]
    return (
        <div>
            <BioProfilePicture user= {user}/>
            <BioTitle title={user.name} />
            <BioLabels labels={user.labels}/>
            <BioCountries  countries={user.countries}/>
            <BioSocialPlatforms links={user.links}/>
                     
        </div>
    );
}
