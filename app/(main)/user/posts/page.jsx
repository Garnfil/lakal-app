import UserSidebar from "@/components/UserSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function page() {
    return (
        <div className="w-full h-full mt-5">
            <div className="flex justify-between w-full gap-4 h-full">
                <UserSidebar />
                <div className="post-container border py-4 px-5 flex-1 rounded-md">
                    <h2 className="text-xl font-bold mb-4">Posts</h2>
                    <Tabs defaultValue="all" className="w-full">
                        <TabsList>
                            <TabsTrigger value="all">All Posts</TabsTrigger>
                            <TabsTrigger value="open posts">Open Posts</TabsTrigger>
                            <TabsTrigger value="posts for review">Posts for Review</TabsTrigger>
                            <TabsTrigger value="forward contract posts">Forward Contract Posts</TabsTrigger>
                        </TabsList>
                        <TabsContent value="all">Make changes to your account here.</TabsContent>
                        <TabsContent value="open posts">Change your password here.</TabsContent>
                        <TabsContent value="posts for review">Posts For Review</TabsContent>
                        <TabsContent value="forward contract posts">Forward Contract Posts</TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
