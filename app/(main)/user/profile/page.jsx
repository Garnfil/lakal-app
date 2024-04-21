import UserSidebar from '@/components/UserSidebar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'


export default function page() {
    return (
        <div>
            <div className="w-full h-full mt-5">
                <div className="flex justify-between w-full gap-4 h-full">
                    <UserSidebar />
                    <div className='profile-container border py-4 px-5 flex-1 rounded-md'>
                        <h2 className='text-xl font-bold'>My Profile</h2>
                        <div className="form mt-3 grid grid-cols-2 gap-3">
                            <div className="form-group flex flex-col gap-3 mt-2">
                                <Label>Email</Label>
                                <Input placeholder="Enter your ..." />
                            </div>
                            <div className="form-group flex flex-col gap-3 mt-2">
                                <Label>Phone Number</Label>
                                <Input placeholder="Enter your ..." />
                            </div>
                            <div className="form-group flex flex-col gap-3 mt-2">
                                <Label>First Name</Label>
                                <Input placeholder="Enter your ..." />
                            </div>
                            <div className="form-group flex flex-col gap-3 mt-2">
                                <Label>Last Name</Label>
                                <Input placeholder="Enter your ..." />
                            </div>
                            <div className="form-group flex flex-col gap-3 mt-2">
                                <Label>Region</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Region" />
                                    </SelectTrigger>
                                </Select>
                            </div>
                            <div className="form-group flex flex-col gap-3 mt-2">
                                <Label>Province</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Province" />
                                    </SelectTrigger>
                                </Select>
                            </div>
                            <div className="form-group flex flex-col gap-3 mt-2">
                                <Label>Municipality</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Municipality" />
                                    </SelectTrigger>
                                </Select>
                            </div>
                            <div className="form-group flex flex-col gap-3 mt-2">
                                <Label>Barangay</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Barangay" />
                                    </SelectTrigger>
                                </Select>
                            </div>
                        </div>
                        <div className="flex justify-start  mt-3 py-4">
                            <Button>Save Profile</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
