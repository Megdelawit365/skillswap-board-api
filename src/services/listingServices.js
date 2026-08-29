import { prisma } from '../lib/prisma.js'
export const getListings = async (query) => {
    const queries = {}
    if (query.type) {
        queries.type = query.type
    }
    if (query.skill) {
        queries.skill = query.skill
    }
    if (query.search) {
        queries.description = {
            contains: query.search
        }
    }
    const page = Number(query.page) || 1
    const limit = Number(query.limit) || 10
    const skip = (page - 1) * limit

    const allListings = await prisma.listing.findMany({ where: queries, skip, take: limit })
    return allListings
}
export const getListingById = async (id) => {
    id = Number(id)
    const listing = await prisma.listing.findUnique({
        where: { id: id }
    })
    return listing
}
export const createListing = async (body) => {
    const { type, skills, responses, description, email } = body
    const newListing = await prisma.listing.create({
        data: {
            type: type.toUpperCase(),
            skills: {
                connect: skills.map((skillId) => ({ id: Number(skillId) }))
            },
            responses: responses,
            description: description,
            email: email
        }, include: {
            skills: true
        }
    })
    return newListing
}
export const updateListing = async (id, body) => {
    const updateFields = {}
    if (body.type) {
        updateFields.type = body.type.toUpperCase();
    }

    if (body.skills && Array.isArray(body.skills)) {
        updateFields.skills = {
            set: body.skills.map((skillId) => ({ id: Number(skillId) }))
        };
    }

    if (body.description) {
        updateFields.description = body.description;
    }
    const updatedListing = await prisma.listing.update({
        where: {
            id: Number(id)
        },
        data: updateFields,
        include: {
            skills: true,
            responses: true
        }
    })
    return updatedListing
}


export const deleteListing = async (id) => {
    await prisma.listing.delete({
        where: {
            id: Number(id)
        }
    })
    return true
}