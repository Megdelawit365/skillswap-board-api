import { prisma } from '../lib/prisma.js'

export const checkHealth = async () => {
    await prisma.$queryRaw`SELECT 1`
    return {
        status: "ok",
        database: "Connected",
        timestamp: new Date().toISOString()
    }

}