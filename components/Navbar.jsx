"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) setUser(user);
    }, []);

    return (
        <div className="flex items-center h-16 border p-4 rounded-md">
            <nav className="flex items-center space-x-4 lg:space-x-6 ">
                <Link className="text-sm text-black font-medium" href="/">
                    Market Place
                </Link>
                <Link className="text-sm text-black font-medium" href="">
                    My Posts
                </Link>
                <Link className="text-sm text-black font-medium" href="">
                    Reports
                </Link>
                <Link className="text-sm text-black font-medium" href="">
                    Contracts
                </Link>
            </nav>
            <div className="ml-auto flex items-center space-x-3">
                <Input type="search" placeholder="Search..." className="md:w-[100px] lg:w-[300px]" />
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Bell />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[350px]">
                        <DropdownMenuLabel>
                            <h5>Notifications</h5>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer text-wrap flex flex-col items-start justify-start">
                            <h6 className="font-medium">Offer Accepted</h6>
                            <p className="w-full">Joe Cristian Jamis accepted your offer for "Need of Rice"</p>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer text-wrap flex flex-col items-start justify-start">
                            <h6 className="font-medium">Offer Declined</h6>
                            <p className="w-full">Michael Mendez declined your offer for "Need of Ginger"</p>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer flex justify-center">Read All Notifications</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" />
                            <AvatarFallback>JG</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>
                            <h5>James Garnfil</h5>
                            <h6 className="font-light text-[12px]">{user?.email}</h6>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer" asChild>
                            <Link href="/user/profile">Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">Calendar</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer" asChild>
                            <Link href="/login">Logout</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};
