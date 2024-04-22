import React from 'react'
import { Button } from '@/components/ui/button';
import { Banknote, Calendar, Heart, MapPin, Ruler, ShieldCheck } from 'lucide-react';
import { format } from 'date-fns';
import { Badge } from "@/components/ui/badge"
import OpenToBuyBidForm from '@/components/OpenToBuyBidForm';
import OpenToBuyDetails from '@/components/OpenToBuyDetails';
import StockToSellDetails from '@/components/StockToSellDetails';

async function getPost(id) {
    let response = await fetch(`http://127.0.0.1:5000/api/posts/${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
    });

    return await response.json();
}

export default async function page({ params }) {
    const post = await getPost(params.id);
    const type = params.type;

    return (
        <div className='w-full h-full mt-5'>
            { type == 'open-to-buy' ? (
                <OpenToBuyDetails post={post} />
            ) : (
                <StockToSellDetails post={post} />
            )}
        </div>
    )
}
