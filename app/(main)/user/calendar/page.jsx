import UserSidebar from "@/components/UserSidebar";
import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function page() {
    return (
        <div className="w-full h-full mt-5">
            <div className="flex justify-between w-full gap-4 h-full">
                <UserSidebar />
                <div className="calendar-content border py-4 px-5 rounded-md">
                    <h2 className="text-xl font-bold mb-4">Calendar</h2>
                    <Table>
                        <TableCaption>A list of your monthly commodities.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Commodities</TableHead>
                                <TableHead>January</TableHead>
                                <TableHead>February</TableHead>
                                <TableHead>March</TableHead>
                                <TableHead>April</TableHead>
                                <TableHead>May</TableHead>
                                <TableHead>June</TableHead>
                                <TableHead>July</TableHead>
                                <TableHead>August</TableHead>
                                <TableHead>September</TableHead>
                                <TableHead>October</TableHead>
                                <TableHead>November</TableHead>
                                <TableHead>December</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">INV001</TableCell>
                                <TableCell>Paid</TableCell>
                                <TableCell>Credit Card</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
