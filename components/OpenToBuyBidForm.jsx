"use client"

import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Send } from 'lucide-react'
import { Textarea } from "@/components/ui/textarea"


export default function OpenToBuyBidForm({ post }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full font-semibold rounded-full text-md">Send Bid</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="py-2">Bid Form</DialogTitle>
                    <hr />
                    <div className="form">
                        <div className="my-2">
                            <Label>Amount to Fulfill</Label>
                            <div className="flex gap-4 items-center mt-2">
                                <Input placeholder="Number" name="number" type="number" max={post.data.quantityOfPurchase.number} />
                                <h5>{post.data.quantityOfPurchase.unit}</h5>
                            </div>
                        </div>
                        <div className="my-2">
                            <Label>Offer Price</Label>
                            <Input className="mt-2" placeholder="Offer Price" name="number" type="number" />
                        </div>
                        <div className="my-2">
                            <Label>Other Information</Label>
                            <Textarea className="mt-2" />
                        </div>
                    </div>
                </DialogHeader>
                <DialogFooter>
                    <Button>Submit Bid <Send className='ml-2' size={15} /></Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
