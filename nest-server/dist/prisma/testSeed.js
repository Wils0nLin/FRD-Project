"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
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
    const bank_acc = await prisma.bank_acc.createMany({
        data: [
            {
                branch_id: 1,
                account_number: "456-789-001",
            },
        ],
    });
    const existBank_acc = await prisma.bank_acc.findMany();
    const merchant = await prisma.merchant.createMany({
        data: [
            {
                users_id: existUsers[1].id,
                merchant_image: "../imageUpload/imageMerchant/storeImage/2000Fun.png",
                merchant_name: "2000Fun",
                merchant_phone: "24983168",
                biz_registration: "../imageUpload/imageMerchant/BRImage/fake_BR.jpeg",
                district_id: 1,
                address: "樓角路138-168號荃豐中心地下A7A鋪",
                bank_acc_id: existBank_acc[0].id,
                opening_hour: "11am - 9pm",
                announcement: "2000Fun is good",
            },
        ],
    });
    const existMerchant = await prisma.merchant.findMany();
    const product = await prisma.product.createMany({
        data: [
            {
                product_status: true,
                product_name: "寶可夢朱紫",
                product_image: "../imageUpload/imageProduct/PKM朱紫.jpeg",
                release_date: new Date("2022-11-18"),
                product_intro: "Hi",
                view: 0,
                platform_id: 1,
            },
            {
                product_status: true,
                product_name: "薩爾達傳說王國之淚",
                product_image: "../imageUpload/imageProduct/薩爾達傳說王國之淚.jpeg",
                release_date: new Date("2023-06-06"),
                product_intro: "Hi",
                view: 0,
                platform_id: 1,
            },
            {
                product_status: true,
                product_name: "2K23",
                product_image: "../imageUpload/imageProduct/2K23.jpeg",
                release_date: new Date("2023-06-06"),
                product_intro: "Hi",
                view: 0,
                platform_id: 1,
            },
        ],
    });
    const existProduct = await prisma.product.findMany();
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
    const product_tag = await prisma.product_tag.createMany({
        data: [
            {
                product_id: existProduct[0].id,
                tag_id: 1,
            },
            {
                product_id: existProduct[0].id,
                tag_id: 1,
            },
            {
                product_id: existProduct[0].id,
                tag_id: 1,
            },
            {
                product_id: existProduct[0].id,
                tag_id: 1,
            },
            {
                product_id: existProduct[0].id,
                tag_id: 1,
            },
            {
                product_id: existProduct[1].id,
                tag_id: 1,
            },
            {
                product_id: existProduct[1].id,
                tag_id: 1,
            },
            {
                product_id: existProduct[1].id,
                tag_id: 1,
            },
            {
                product_id: existProduct[1].id,
                tag_id: 1,
            },
            {
                product_id: existProduct[1].id,
                tag_id: 1,
            },
            {
                product_id: existProduct[2].id,
                tag_id: 1,
            },
        ],
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=testSeed.js.map