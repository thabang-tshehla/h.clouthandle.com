import { headers } from 'next/headers'

export default async function Home() {

    const reqheaders = await headers()
    const handle = reqheaders.get('x-original-host');

    return (
        <div>
            Home
        </div>
    );
}
