import { prisma } from '../lib/prisma'
export default getListings = async () => {
    const allListings = await prisma.listing.findMany()
    return allListings
}