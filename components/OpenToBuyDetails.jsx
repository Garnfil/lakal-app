import React from "react";
import { Button } from '@/components/ui/button';
import { Banknote, Calendar, Heart, MapPin, Ruler, ShieldCheck } from 'lucide-react';
import { format } from 'date-fns';
import { Badge } from "@/components/ui/badge"
import OpenToBuyBidForm from '@/components/OpenToBuyBidForm';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function OpenToBuyDetails({ post }) {
    console.log(post);
    return (
        <div className="flex justify-between w-full h-full">
            <div className="post-detail-content w-[75%] h-full flex-1">
                <div className="title-content py-7 px-5 border-b w-full">
                    <h2 className="text-2xl font-medium">{post.data.title}</h2>
                    <ul className="flex gap-5 mt-4">
                        <li>
                            <Badge variant="outline">{post.data.status.toUpperCase()}</Badge>
                        </li>
                        <li className="flex gap-1 items-center">
                            <MapPin color="#00a86b" size={18} />
                            {post.data.locationOfDelivery.municipality}, {post.data.locationOfDelivery?.province}
                        </li>
                    </ul>
                </div>
                <div className="description-content py-7 px-5 border-b w-full">{post.data.description}</div>
                <div className="amount-content py-7 px-5 border-b w-full">
                    <div className="flex justify-start items-start gap-20">
                        <div className="flex justify-center items-start gap-3">
                            <Banknote color="#00a86b" size={25} />
                            <h6 className="text-sm font-bold">
                                ₱ {numberWithCommas(post.data.ceilingPrice.toFixed(2))}
                                <br />
                                {post.data.partialFulfillment && <span className="text-green-800 text-xs">Partial Fulfillment Accepted</span>}
                            </h6>
                        </div>
                        <div className="flex justify-center items-start gap-3">
                            <Ruler color="#00a86b" size={25} />
                            <h6 className="text-sm font-bold">
                                {post.data.quantityOfPurchase.number} {post.data.quantityOfPurchase.unit}
                                <br />
                                <span className="text-xs font-normal">
                                    I am looking for producers/sellers <br /> with the lowest price.
                                </span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="commodity-content py-7 px-5 border-b w-full">
                    <h6 className="text-sm flex gap-2">
                        Commodity: {post.data.commodity.name}
                        <span className="font-bold">( {post.data.commodity.subCommodity} )</span>
                    </h6>
                </div>
                <div className="supplier-qualification-content py-7 px-5 border-b w-full">
                    <h3 className="text-lg font-semibold mb-2">Supplier Qualification</h3>
                    <p className="text-sm">{post.data.supplierQualification}</p>
                </div>
                <div className="other-info-content py-7 px-5 border-b w-full">
                    <h3 className="text-lg font-semibold mb-2">Other Information</h3>
                    <div className="flex gap-2 items-center text-sm my-2">
                        <Calendar size={15} color="#00a86b" />
                        Date of Delivery: {format(post.data.dateOfDelivery, "MMMM dd, yyyy")}
                    </div>
                    <div className="flex gap-2 items-center text-sm my-2">
                        <Calendar size={15} color="#00a86b" />
                        Date of Auction: {format(post.data.dateOfAuction, "MMMM dd, yyyy")}
                    </div>
                </div>
            </div>
            <div className="post-sidebar border-l py-7 px-5 w-[25%]">
                <div className="flex gap-10 flex-col">
                    <div className="flex gap-2 flex-col">
                        <OpenToBuyBidForm post={post} />
                        <Button variant={"outline"} className="w-full font-semibold rounded-full text-md">
                            <Heart className="mr-2" size={17} /> Save Post
                        </Button>
                    </div>
                    <div className="client-details">
                        <h2 className="font-medium text-xl mb-2">About the client</h2>
                        <div className="flex text-primary items-center gap-1 mb-2">
                            <ShieldCheck size={15} />
                            Client Verified
                        </div>
                        <h3>
                            {post.data.userInfo.firstname} {post.data.userInfo.lastname}
                        </h3>
                        <h4 className="text-sm text-green-800 font-bold">{post.data.userInfo.email}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
