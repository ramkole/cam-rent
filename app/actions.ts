"use server"

import { redirect } from "next/navigation"
import prisma  from "./lib/db"
import { supabase } from "./lib/supabase"

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
        return redirect(`/create/${data.id}/structure`)
    } else if(!data.addCategory && !data.addLocation && data.addDesc){
        return redirect(`/create/${data.id}/structure`)
    } else if(data.addCategory && !data.description ){
        return redirect(`/create/${data.id}/description`)
    }

}


export async function createRentalPage(formData: FormData){
    const rentalItemName = formData.get('rentalItemName') as string
    const rentalId = formData.get('rentalId') as string
    
    const data = await prisma.myRental.update({
        where: {
            id: rentalId,
        },
        data: {
            categoryName: rentalItemName,
            addCategory: true
        }

    })

    return redirect(`/create/${rentalId}/description`)
}


export async function createRentaDescription(formData: FormData){
    const productName = formData.get('productName') as string
    const description = formData.get('description') as string
    const price = formData.get('price')
    const photo = formData.get('photo') as File
    const rentalId = formData.get('decId') as string
    

    const {data : photoData } = await supabase.storage.from('productPhoto').upload(`${photo.name}-${new Date()}`, photo, {
        cacheControl: '2592000',
        contentType: 'image/png'
    })

    const data = await prisma.myRental.update({
        where: {
            id: rentalId,
        },
        data: {
            productTitle: productName,
            description: description,
            price: Number(price),
            photo: photoData?.path,
            addDesc: true
        }

    })

    return redirect(`/create/${rentalId}/address`)
}
