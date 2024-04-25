"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { createSession } from "./session";
import { NextResponse } from "next/server";

export async function loginUser(formData) {
    const router = useRouter();

    const rawFormData = {
        email: formData.get('email'),
        password: formData.get('password'),
    };

    // return console.log(rawFormData);

    let response;
    response = await fetch(`http://localhost:5000/api/login`, {
        method: 'post',
        body: JSON.stringify(rawFormData),
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    });

    if (response.status !== 200) {
        throw new Error('Login failed');
    }

    const data = await response.json();

    return createSession(data.user);
}