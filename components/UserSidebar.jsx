import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'

export default function UserSidebar() {
    return (
        <div className="user-sidebar py-5 px-3 h-full w-[30%] border rounded-md">
            <div className="user-sidebar-header flex flex-col gap-2 justify-center items-center">
                <Avatar className="w-[90px] h-[90px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className='text-center'>
                    <h3>James Garnfil</h3>
                    <h6 className='text-green-800 font-bold text-sm'>jamesgarnfil15@gmail.com</h6>
                </div>
            </div>
            <div className="user-tabs mt-4">
                <nav className='flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1'>
                    <Link href="/user/profile" className='py-2 px-4 bg-muted rounded-md'>Profile</Link>
                    <Link href="/user/posts" className='py-2 px-4 rounded-md'>My Posts</Link>
                    <Link href="/user/calendar" className='py-2 px-4 rounded-md'>Calendar</Link>
                    <Link href="/user/settings" className='py-2 px-4 rounded-md'>Settings</Link>
                </nav>
            </div>
        </div>
    )
}
