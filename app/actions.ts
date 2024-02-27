"use server"

import { redirect } from "next/navigation"
import prisma  from "./lib/db"

export async function createRentalItem ({userId}:{userId: string}){
    const data = await prisma.myRental.findFirst({
        where: {
            userId: userId
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    if(data === null){
        const data = await prisma.myRental.create({
            data: {
                userId: userId 
            }
        })
        return redirect(`/create/${data.id}/struct`)
    }
}