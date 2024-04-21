import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button';

export const FeedFilterForm = () => {
    return (
        <Card className="w-[40%]">
            <CardHeader>
                <CardTitle>Filter Form</CardTitle>
                <CardDescription>Search by your need</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="my-3">
                    <Input type="text" id="query" placeholder="Search anything..." />
                </div>
                <div className="my-3">
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Commodity" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Agricultural Products">Agricultural Products</SelectItem>
                            <SelectItem value="Minerals and Metals">Minerals and Metals</SelectItem>
                            <SelectItem value="Manufactured Goods">Manufactured Goods</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Button className="w-full">Filter</Button>
            </CardContent>
        </Card>
    )
}
