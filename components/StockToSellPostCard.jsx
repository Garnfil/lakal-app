import React from 'react'
import { format } from "date-fns";
import { Button } from "@/components/ui/button"
import { Banknote, Check, Eye, MapPin, Ruler, Truck, User } from 'lucide-react';
import Link from 'next/link';


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const StockToSellPostCard = (props) => {
    const { post } = props;
    return (
        <div className="border p-5 w-full rounded-md cursor-pointer">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-lg font-bold">{post.data.title}</h2>
                    <div className="flex justify-start items-center gap-5">
                        <div className='flex items-center gap-1' title='Ceiling Price'>
                            <Banknote color="#00a86b" size={18} />
                            <h6 className='text-sm'>₱ {numberWithCommas(post.data.floorPrice.toFixed(2))}</h6>
                        </div>
                        <div className='flex items-center gap-1' title='Location of Delivery'>
                            <MapPin color="#00a86b" size={18} />
                            <h6 className='text-sm'>{post.data.locationOfStock.municipality}, {post.data.locationOfStock?.province}</h6>
                        </div>
                    </div>
                </div>
                <h6 className="text-sm">{post.data.commodity.name.toUpperCase()} - <span className="font-bold">{post.data.commodity.subCommodity.toUpperCase()}</span></h6>
            </div>

            <p className="text-sm py-3">{post.data.description}</p>

            <div className="flex gap-2 mt-2">
                <div className="text-sm">
                    <span className='flex justify-center items-center gap-2 py-2 px-4 bg-green-50 rounded-full text-primary'>
                        <Check size={15} /> Partial Offer Accepted
                    </span>
                </div>
                <div className="text-sm">
                    <span className='flex justify-center items-center gap-2 py-2 px-4 bg-green-50 rounded-full text-primary'>
                        <Ruler size={15} /> {post.data.quantityOfPurchase.number} {post.data.quantityOfPurchase.unit}
                    </span>
                </div>
            </div>

            <div className="flex justify-end items-center space-x-2 pt-3">
                <Button variant="outline">Seller Profile <User className='ml-2' size={16} /></Button>
                <Button variant="default" asChild>
                    <Link href={`/posts/${post.data.type}/${post.postId}`}>
                        View Details <Eye className='ml-2' size={16} />
                    </Link>
                </Button>
            </div>
        </div>
    )
}
