// prisma/seed.ts
// users, item, tag
import { PrismaClient } from "@prisma/client";

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
    // create two dummy articles
    const users = await prisma.users.createMany({
        data: [
            {
                username: "user1",
                password: "password1",
                email: "user1@example.com",
                identity: "consumer",
            },

            // 添加更多 users
        ],
    });

    const tag = await prisma.tag.createMany({
        data: [
            {
                tag: "開放世界",
            },
            {
                tag: "FPS",
            },
        ],
    });

    const product = await prisma.product.createMany({
        data: [
            {
                product_status: true,
                product_image: "bafuabgowabgoa",
                release_date: new Date("2023-06-06"),
                product_intro: "Hi",
                view: 30,
            },
        ],
    });

    const products = await prisma.product.findMany();
    const tags = await prisma.tag.findMany();

    const product_tag = await prisma.product_tag.createMany({
        data: [
            {
                product_id: products[0].id,
                tag_id: tags[0].id,
            },
        ],
    });

    console.log({ users, tag, product, product_tag });
}

// execute the main function
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        // close Prisma Client at the end
        await prisma.$disconnect();
    });
