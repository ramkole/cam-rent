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
    } else if(!data.addCategory && !data.addLocation && data.addDesc){
        return redirect(`/create/${data.id}/struct`)
    } else if(data.addCategory && !data.description ){
        return redirect(`/create/${data.id}/description`)
    }
}


export async function createRentalPage(formData: FormData){
    const categoryItemName = formData.get('categoryItemName')
    const rentalId = formData.get('rentalId')
    const data = await prisma.myRental.update({
        where: {
            id: rentalId
        },
        data: {
            categoryName: categoryItemName,
            addCategory: true
        }
    })
}