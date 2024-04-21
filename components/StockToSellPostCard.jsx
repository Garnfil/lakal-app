import React from 'react'
import { Button } from "@/components/ui/button"
import { Eye, User } from 'lucide-react';

export const StockToSellPostCard = (props) => {
    const { post } = props;
    return (
        <div className="border p-5 w-full rounded-md cursor-pointer">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-lg font-bold">{post.data.title}</h2>
                    <h5 className="text-[#6e8d62]">₱ {post.data.floorPrice.toFixed(2)}</h5>
                </div>
                <h6 className="text-sm">{post.data.commodity.name.toUpperCase()} - <span className="font-bold">{post.data.commodity.subCommodity.toUpperCase()}</span></h6>
            </div>
            <p className="text-sm py-3">{post.data.description}</p>
            <div className="flex justify-end items-center space-x-2 pt-3 border-t">
                <Button variant="outline">Seller Profile <User className='ml-2' size={16} /></Button>
                <Button variant="default">View Info <Eye className='ml-2' size={16} /></Button>
            </div>
        </div>
    )
}
