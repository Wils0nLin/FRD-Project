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

    // area
    // const area = await prisma.area.createMany({
    //     data: [
    //         {
    //             area: "新界",
    //         },
    //         {
    //             area: "九龍",
    //         },
    //         {
    //             area: "港島",
    //         },
    //     ],
    // });

    // const existArea = await prisma.area.findMany();
    //

    // district
    // const district = await prisma.district.createMany({
    //     data: [
    //         {
    //             area_id: existArea[0].id,
    //             district: "荃灣區",
    //         },
    //         {
    //             area_id: existArea[0].id,
    //             district: "葵青區",
    //         },
    //         {
    //             area_id: existArea[0].id,
    //             district: "屯門區",
    //         },
    //         {
    //             area_id: existArea[0].id,
    //             district: "元朗區",
    //         },
    //         {
    //             area_id: existArea[0].id,
    //             district: "北區",
    //         },
    //         {
    //             area_id: existArea[0].id,
    //             district: "大埔區",
    //         },
    //         {
    //             area_id: existArea[0].id,
    //             district: "沙田區",
    //         },
    //         {
    //             area_id: existArea[0].id,
    //             district: "西貢區",
    //         },
    //         {
    //             area_id: existArea[0].id,
    //             district: "離島區",
    //         },
    //         {
    //             area_id: existArea[1].id,
    //             district: "深水埗區",
    //         },
    //         {
    //             area_id: existArea[1].id,
    //             district: "九龍城區",
    //         },
    //         {
    //             area_id: existArea[1].id,
    //             district: "黃大仙區",
    //         },
    //         {
    //             area_id: existArea[1].id,
    //             district: "觀塘區",
    //         },
    //         {
    //             area_id: existArea[1].id,
    //             district: "油尖旺區",
    //         },
    //         {
    //             area_id: existArea[2].id,
    //             district: "中西區",
    //         },
    //         {
    //             area_id: existArea[2].id,
    //             district: "灣仔區",
    //         },
    //         {
    //             area_id: existArea[2].id,
    //             district: "東區",
    //         },
    //         {
    //             area_id: existArea[2].id,
    //             district: "西區",
    //         },
    //     ],
    // });

    // const existDistrict = await prisma.district.findMany();
    //

    // bank
    // const bank = await prisma.bank.createMany({
    //     data: [
    //         {
    //             bank_code: "004",
    //             bank_name: "香港滙豐銀行",
    //         },
    //     ],
    // });

    // const existBank = await prisma.bank.findMany();
    //

    // branch
    // const branch = await prisma.branch.createMany({
    //     data: [
    //         {
    //             bank_id: existBank[0].id,
    //             branch_code: "123",
    //             branch_name: "荃灣分行",
    //         },
    //     ],
    // });

    // const existBranch = await prisma.branch.findMany();
    //

    // bank_acc
    // const bank_acc = await prisma.bank_acc.createMany({
    //     data: [
    //         {
    //             branch_id: 1,
    //             account_number: "456-789-001",
    //         },
    //     ],
    // });

    // const existBank_acc = await prisma.bank_acc.findMany();
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

    // tag
    // const tag = await prisma.tag.createMany({
    //     data: [
    //         {
    //             tag: "角色扮演",
    //         },
    //         {
    //             tag: "動作冒險",
    //         },
    //         {
    //             tag: "射擊",
    //         },
    //         {
    //             tag: "競技",
    //         },
    //         {
    //             tag: "劇情",
    //         },
    //         {
    //             tag: "合作",
    //         },
    //         {
    //             tag: "體育",
    //         },
    //         {
    //             tag: "策略",
    //         },
    //         {
    //             tag: "格鬥",
    //         },
    //         {
    //             tag: "音樂",
    //         },
    //         {
    //             tag: "解謎",
    //         },
    //         {
    //             tag: "卡牌",
    //         },
    //         {
    //             tag: "家庭",
    //         },
    //         {
    //             tag: "育成",
    //         },
    //         {
    //             tag: "生存",
    //         },
    //         {
    //             tag: "工藝",
    //         },
    //         {
    //             tag: "恐怖",
    //         },
    //     ],
    // });

    // const existTag = await prisma.tag.findMany();
    //

    // platform
    // const platform = await prisma.platform.createMany({
    //     data: [
    //         {
    //             platform: "PlayStation",
    //         },
    //         {
    //             platform: "Switch",
    //         },
    //         {
    //             platform: "XBOX",
    //         },
    //     ],
    // });

    // const existPlatform = await prisma.platform.findMany();
    //

    // product
    const product = await prisma.product.createMany({
        data: [
            {
                product_status: true,
                product_name: "寶可夢朱紫",
                product_image: Buffer.from('../../ENTITABASE/src/assets/images/pikmin4.jpg'),
                release_date: "2022-11-18",
                product_intro: "Hi",
                view: 0,
                platform_id: 2,
            },
            {
                product_status: true,
                product_name: "薩爾達傳說王國之淚",
                product_image: Buffer.from('../../ENTITABASE/src/assets/images/zelda.jpg'),
                release_date: "2023-06-06",
                product_intro: "Hi",
                view: 0,
                platform_id: 2,
            },
            {
                product_status: true,
                product_name: "2K23",
                product_image: Buffer.from('../../ENTITABASE/src/assets/images/Kirby.jpg'),
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