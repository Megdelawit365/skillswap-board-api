import { prisma } from '../lib/prisma.js'

export const getResponses = async (id) => {
    const responses = await prisma.response.findMany({
        where: { listingId: Number(id) }
    })
    return responses
}
export const createResponse = async (id, body) => {
    const { content } = body
    const currentListing = await prisma.listing.findUnique({ where: { id: Number(id) } })
    const newResponse = await prisma.response.create({
        data: {
            content: content,
            listing: {
                connect: { id: Number(id) }
            }
        }
    })
    return newResponse
}