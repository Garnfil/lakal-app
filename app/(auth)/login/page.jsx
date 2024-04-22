"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const router = useRouter();

    const [userCredential, setUserCredential] = useState({
        email: "",
        password: "",
    });

    const handleButtonClick = async () => {
        let response = await fetch(`http://localhost:5000/api/login`, {
            method: 'post',
            body: JSON.stringify(userCredential),
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            }
        })

        if(response.status != 200) {
            return alert('Failed!');
        }


        let data = await response.json();
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("access-token", data.user.tokens.accessToken);

        router.push('/');
    };

    return (
        <main className="max-w-[100%] mx-auto h-[100vh]">
            <div className="auth-container h-full">
                <div className="flex justify-center items-start h-full">
                    <div className="w-[50%] p-[20px] lg:p-[40px] xl:p-[80px]">
                        <div className="h-auto">
                            <h5 className="text-primary font-bold">LAKAL APP</h5>
                            <form className="w-full mt-8" noValidate>
                                <div className="my-6 grid w-full items-center gap-3">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        placeholder="Enter your email address..."
                                        value={userCredential.email}
                                        onInput={(e) => setUserCredential((prevCredential) => ({ ...prevCredential, email: e.target.value }))}
                                    />
                                </div>
                                <div className="my-6 grid w-full items-center gap-3">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        type="password"
                                        id="password"
                                        placeholder="Enter your password..."
                                        value={userCredential.password}
                                        onInput={(e) => setUserCredential((prevCredential) => ({ ...prevCredential, password: e.target.value }))}
                                    />
                                </div>
                                <div className="w-full">
                                    <Button type="button" onClick={handleButtonClick}>Login</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="w-[50%] bg-primary h-full flex justify-center items-center">
                        <div>
                            <h2 className="text-white">LAKAL APP</h2>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
