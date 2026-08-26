import { prisma } from '../lib/prisma'
export const getListings = async () => {
    const allListings = await prisma.listing.findMany()
    return allListings
}
export const getListingById = async (id) => {
    const listing = await prisma.listing.findUnique({
        where: { id: id }
    })
    return listing
}
export const createListing = async (body) => {
    const { type, skills, responses, userId } = body
    const newListing = await prisma.listing.create({
        data: {
            type: type,
            skills: skills,
            responses: responses,
            userId: userId
        }
    })
    return newListing
}
export const updateListing = async (id, body) => {
    const updatedListing =
        await prisma.listing.update({
            where: {
                id: id
            },
            data: {

            }
        });
    return updateListing
}
export const deleteListing = async (id) => {
    await prisma.listing.delete({
        where: {
            id: id
        }
    })
    return true
}