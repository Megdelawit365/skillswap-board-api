import { prisma } from '../lib/prisma'
export const getSkills = async () => {
    const allSkills = await prisma.skill.findMany()
    return allSkills
}