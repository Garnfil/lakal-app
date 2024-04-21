"use client"
import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function LoginPage() {

    const handleButtonClick = () => {
        console.log(true);
    }

    const handleInput = (e) => {
        console.log(e.target.value);
    }

    return (
        <main className='max-w-[100%] mx-auto h-[100vh]'>
            <div className="auth-container h-full">
                <div className="flex justify-center items-start h-full">
                    <div className="w-[50%] p-[20px] lg:p-[40px] xl:p-[80px]">
                        <div className="h-auto">
                            <h5 className='text-primary font-bold'>LAKAL APP</h5>
                            <form className='w-full mt-8' noValidate>
                                <div className="my-6 grid w-full items-center gap-3">
                                    <Label htmlFor="email">Email</Label>
                                    <Input type="email" id="email" placeholder="Enter your email address..." onInput={handleInput} />
                                </div>
                                <div className="my-6 grid w-full items-center gap-3">
                                    <Label htmlFor="password">Password</Label>
                                    <Input type="password" id="password" placeholder="Enter your password..." />
                                </div>
                                <div className="w-full">
                                    <Button onClick={handleButtonClick}>Login</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="w-[50%] bg-primary h-full flex justify-center items-center">
                        <div>
                            <h2 className='text-white'>LAKAL APP</h2>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
