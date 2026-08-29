import { prisma } from '../lib/prisma.js'
export const getSkills = async () => {
    const allSkills = await prisma.skill.findMany()
    return allSkills
}
export const createSkill = async (name) => {
    const newSkill = await prisma.skill.create({
        data: {
            name: name
        }
    })
    return newSkill
}