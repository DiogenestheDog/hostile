import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import { faker } from '@faker-js/faker';

async function seedDb() {
    // use faker to generate dummy data
    for(let i = 0; i < 50; i++) {
        // email needs to be the same in the user and post
        // section so save a copy of it before upsert
        const email = faker.internet.email();
        
        // prisma migrate reset fails if title is too long
        // const spotTitle = faker.lorem.words(6);
        // console.log(spotTitle.length);
        await prisma.user.upsert({
            where: { email: email },
            update: {},
            create: {
                email: email,
                username: faker.internet.userName(),
                spots: {
                    create: {
                        title: faker.lorem.words(6),
                        description: faker.lorem.paragraph(),
                        latitude: faker.location.latitude({ max: 33.658142, min: 33.594620, precision: 6 }),
                        longitude: faker.location.longitude({ max: -117.789052, min: -117.902299, precision: 6 })
                    },
                },
            },
        });
    }
}


// 33.658142, -117.902299 top left
// 33.594620, -117.789052 bottom right

seedDb()
    .then(async () => {
        await prisma.$disconnect();
        console.log("No errors detected");
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
});