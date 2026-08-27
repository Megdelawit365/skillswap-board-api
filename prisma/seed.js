import { prisma } from '../src/lib/prisma.js'

async function main() {
    // delete existing data
    await prisma.skill.deleteMany()
    await prisma.response.deleteMany()
    await prisma.listing.deleteMany()

    // add skills
    const skill1 = await prisma.skill.create({
        data: {
            name: "Javascript"
        }
    })
    const skill2 = await prisma.skill.create({
        data: {
            name: "Adobe"
        }
    })
    const skill3 = await prisma.skill.create({
        data: {
            name: "React"
        }
    })

    // add listings
    const listing1 = await prisma.listing.create({
        data: {
            type: "OFFERING",
            description: "I can teach javascript basics.",
            skills: {
                connect: [{ id: skill1.id }]
            }
        }
    })

    const listing2 = await prisma.listing.create({
        data: {
            type: "WANTING",
            description: "I need a graphic designer.",
            skills: {
                connect: [{ id: skill2.id }]
            }
        }
    })

    // add responses

    await prisma.response.create({
        data: {
            content: 'I would love to learn Js.',
            listingId: listing1.id
        }
    });
    await prisma.response.create({
        data: {
            content: "I'm a graphic designer, would love to work for you.",
            listingId: listing2.id
        }
    });
}

main()
    .catch((e) => {
        console.error(`Error seeding db: ${e}`)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })