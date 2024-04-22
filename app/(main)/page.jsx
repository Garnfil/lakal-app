"use client"
import React, { useEffect, useState } from "react";
import { FeedFilterForm } from "@/components/FeedFilterForm";
import { OpenToBuyPostCard } from "@/components/OpenToBuyPostCard";
import { StockToSellPostCard } from "@/components/StockToSellPostCard";
import { Store } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    const [posts, setPosts] = useState([]);
    const [userActiveRole, setUserActiveRole] = useState('supplier');

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if(user) {
            setUserActiveRole(user.activeRole);
            getPosts(user.activeRole);
        } else {
            router.replace('/login');
        }
    }, []);

    async function getPosts(activeRole) {
        let url = activeRole === "supplier" ? `http://127.0.0.1:5000/api/posts/open-to-buy` : `http://127.0.0.1:5000/api/posts/stock-to-sell`;
        let response = await fetch(url);
        let data = await response.json();
        setPosts(data);
        console.log(data);
    }

    return (
        <div className="h-auto">
            <div className="feed-container my-5">
                <h2 className="text-2xl font-bold mb-5 flex gap-2 items-center">
                    <Store size={20} /> Market Place
                </h2>
                <div className="flex items-start gap-5">
                    <FeedFilterForm />
                    <div className="flex flex-col gap-3 w-full">
                        {posts.length > 0 && posts.map((post) =>
                            userActiveRole == "supplier" ? <OpenToBuyPostCard key={post.postId} post={post} /> : <StockToSellPostCard key={post.postId} post={post} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
