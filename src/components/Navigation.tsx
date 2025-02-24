'use client';
import Image from "next/image"
import { usePathname } from 'next/navigation';
import Link from "next/link";


const tabs = [

    {
        label: 'Home',
        path: '/admin',
        iconOutlined: '/IconHome-Outlined.svg',
        iconFilled: '/IconHome-Filled.svg'
    },
    {
        label: 'Bio',
        path: '/admin/bio',
        iconOutlined: '/IconBio-Outlined.svg',
        iconFilled: '/IconBio-Filled.svg'
    },

    {
        label: 'Settings',
        path: '/admin/settings',
        iconOutlined: '/IconSettings-Outlined.svg',
        iconFilled: '/IconSettings-Filled.svg'
    }
]
export default function Navigation() {

    const pathname = usePathname();


    return (
        <div className="flex bg-white  h-20 items-center px-10 justify-between shadow-[0_-4px_6px_-2px_rgba(0,0,0,0.1)]">
            {
                tabs.map((tab, key) => (
                    <Link key={key} href={tab.path}>
                        <div className="flex flex-col items-center gap-1">
                            <img className="h-5 w-5" src={pathname === tab.path ? tab.iconFilled : tab.iconOutlined} alt="" />
                            <span className={`text-sm ${pathname === tab.path ? 'font-bold' : ''}`}>{tab.label}</span>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}