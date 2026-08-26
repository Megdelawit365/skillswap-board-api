import { prisma } from '../lib/prisma'

export const getResponses = async (id) => {
    const responses = prisma.response.findMany({
        where: { listingId: id }
    })
    return responses
}
export const createResponse = async (id, body) => {
    const { content, listingId, userId } = body
    const currentListing = prisma.listing.findUnique({ where: { id: id } })
    const newResponse = await currentListing.create({
        data: {
            content: content,
            listingId: listingId,
            userId: userId
        }
    })
    return newResponse
}