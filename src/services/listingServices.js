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