// prisma/seed.ts
// users, item, tag
import { PrismaClient } from "@prisma/client";

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
    // create two dummy articles
    // user

    const users = await prisma.users.createMany({
        data: [
            {
                username: "Chan Tai Man",
                password: "123123",
                email: "TaiMan@gmail.com",
                identity: "consumer",
            },
            {
                username: "Chan Siu Man",
                password: "321321",
                email: "TaiMan@gmail.com",
                identity: "merchant",
            },
        ],
    });

    const existUsers = await prisma.users.findMany();

    const consumers = await prisma.consumer.createMany({
        data: [
            {
                users_id: existUsers[0].id,
                QRcode: "ThisIsAQRCodeTest",
                consumer_name: "Chan Tai Man",
                consumer_phone: "55555555",
            },
        ],
    });

    //

    // merchant
    const merchant = await prisma.merchant.createMany({
        data: [
            {
                users_id: existUsers[1].id,
                merchant_image: Buffer.from("hi"),
                merchant_name: "2000Fun",
                merchant_phone: "24983168",
                biz_registration: Buffer.from("biz_registration_data"),
                district_id: 1,
                address: "樓角路138-168號荃豐中心地下A7A鋪",
                bank_account: "102846961961",
                branch_id: 1,
                opening_hour: "11am - 9pm",
                announcement: "2000Fun is good",
            },
        ],
    });

    const existMerchant = await prisma.merchant.findMany();
    //

    // product
    const product = await prisma.product.createMany({
        data: [
            {
                product_status: true,
                product_name: "寶可夢朱紫",
<<<<<<< HEAD
                product_image: Buffer.from('../../ENTITABASE/src/assets/images/pikmin4.jpg'),
=======
                product_image: "../imageUpload/imageProduct/PKM朱紫.jpeg",
>>>>>>> 226f35722613a4440faef1756bfcc52cb611284e
                release_date: "2022-11-18",
                product_intro: "Hi",
                view: 0,
                platform_id: 2,
            },
            {
                product_status: true,
                product_name: "薩爾達傳說王國之淚",
<<<<<<< HEAD
                product_image: Buffer.from('../../ENTITABASE/src/assets/images/zelda.jpg'),
=======
                product_image: "../imageUpload/imageProduct/薩爾達傳說王國之淚.jpeg",
>>>>>>> 226f35722613a4440faef1756bfcc52cb611284e
                release_date: "2023-06-06",
                product_intro: "Hi",
                view: 0,
                platform_id: 2,
            },
            {
                product_status: true,
                product_name: "2K23",
<<<<<<< HEAD
                product_image: Buffer.from('../../ENTITABASE/src/assets/images/Kirby.jpg'),
=======
                product_image: "../imageUpload/imageProduct/2K23.jpeg",
>>>>>>> 226f35722613a4440faef1756bfcc52cb611284e
                release_date: "2023-06-06",
                product_intro: "Hi",
                view: 0,
                platform_id: 1,
            },
        ],
    });

    const existProduct = await prisma.product.findMany();

    // version
    const version = await prisma.version.createMany({
        data: [
            {
                product_id: existProduct[0].id,
                version: "朱版",
                version_image: "../imageUpload/imageVersion/PKM朱.jpeg",
            },
            {
                product_id: existProduct[0].id,
                version: "紫版",
                version_image: "../imageUpload/imageVersion/PKM紫.jpeg",
            },
            {
                product_id: existProduct[1].id,
                version: "普通版",
                version_image: "../imageUpload/imageVersion/薩爾達傳說王國之淚 普通.jpeg",
            },
            {
                product_id: existProduct[1].id,
                version: "特典",
                version_image: "../imageUpload/imageVersion/薩爾達傳說王國之淚 特典.jpeg",
            },
            {
                product_id: existProduct[2].id,
                version: "普通版",
                version_image: "../imageUpload/imageVersion/2K23.jpeg",
            },
            {
                product_id: existProduct[2].id,
                version: "豪華版",
                version_image: "../imageUpload/imageVersion/2K23 豪華版.jpeg",
            },
        ],
    });
    const existVersion = await prisma.version.findMany();
    //

    // product_tag
    const product_tag = await prisma.product_tag.createMany({
        data: [
            {
                product_id: existProduct[0].id,
                tag_id: 1,
            },
            {
                product_id: existProduct[0].id,
                tag_id: 2,
            },
            {
                product_id: existProduct[0].id,
                tag_id: 4,
            },
            {
                product_id: existProduct[0].id,
                tag_id: 6,
            },
            {
                product_id: existProduct[0].id,
                tag_id: 14,
            },
            {
                product_id: existProduct[1].id,
                tag_id: 1,
            },
            {
                product_id: existProduct[1].id,
                tag_id: 2,
            },
            {
                product_id: existProduct[1].id,
                tag_id: 5,
            },
            {
                product_id: existProduct[1].id,
                tag_id: 11,
            },
            {
                product_id: existProduct[1].id,
                tag_id: 4,
            },
            {
                product_id: existProduct[1].id,
                tag_id: 6,
            },
            {
                product_id: existProduct[1].id,
                tag_id: 7,
            },
        ],
    });

    const item = await prisma.item.createMany({
        data: [
            {
                merchant_id: existMerchant[0].id,
                version_id: existVersion[0].id,
                price: 400,
                end_date: "2023-12-06",
                stock_status: "大量存貨",
                availability: true,
            },
        ],
    });
    const existItem = await prisma.item.findMany();
    //
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