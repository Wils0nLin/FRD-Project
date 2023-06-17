import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { Prisma, PrismaClient, Users } from "@prisma/client";
import {
    RegisterConFormDTO,
    RegisterMerFormDTO,
    RegisterUserFormDTO,
} from "./dto/createPublic.dto";
import { log } from "console";
const prisma = new PrismaClient();
@Injectable()
export class PublicService {
    constructor(private readonly prisma: PrismaService) {}

    //merchant未完
    async Register(form: any, identity: string) {
        async function conRegister(form: any, users_id: number) {
            let consumer: Prisma.ConsumerCreateInput;
            consumer = {
                users: { connect: { id: users_id } },
                QRcode: form.QRcode,
                consumer_name: form.consumer_name,
                consumer_phone: form.consumer_phone,
            };
            const createConsumer = await prisma.consumer.create({ data: consumer });

            return createConsumer;
        }

        async function merRegister(form: any, users_id: number) {
            //係呢到攞番由front
            const district_id = 1;
            const bank_acc_id = 1;
            let merchant: Prisma.MerchantCreateInput;
            merchant = {
                users: { connect: { id: users_id } },
                merchant_image: form.merchant_image,
                merchant_name: form.merchant_name,
                merchant_phone: form.merchant_phone,
                biz_registration: form.biz_registration,
                district: { connect: { id: district_id } },
                address: form.address,
                bank_acc: { connect: { id: bank_acc_id } },
                opening_hour: form.opening_hour,
                announcement: form.announcement,
            };

            const createMerchant = await prisma.merchant.create({ data: merchant });
            console.log(createMerchant);

            return createMerchant;
            // console.log("write your register query here", form);
        }

        async function registerCondition(form: any, identity: any) {
            let users: Prisma.UsersCreateInput;
            users = {
                username: form.username,
                password: form.password,
                email: form.email,
                identity: identity,
            };

            const createUser = await prisma.users.create({ data: users });
            let users_id = Number(createUser.id);
            console.log("uses_id: ", users_id);

            return { form, users_id };
        }

        if (identity === "consumer") {
            registerCondition(form, identity)
                .then((output) => {
                    conRegister(output.form, output.users_id);
                })
                .then(async () => {
                    await prisma.$disconnect();
                })
                .catch(async (e) => {
                    console.error(e);
                    await prisma.$disconnect();
                    process.exit(1);
                });
        } else if (identity === "merchant") {
            registerCondition(form, identity)
                .then((output) => {
                    merRegister(output.form, output.users_id);
                })
                .then(async () => {
                    await prisma.$disconnect();
                })
                .catch(async (e) => {
                    console.error(e);
                    await prisma.$disconnect();
                    process.exit(1);
                });
        }
    }

    // area and district only for register select
    //done
    async selectArea() {
        const selectArea = await prisma.area.findMany();
        return selectArea;
    }

    //done
    //front end pass個area_id過黎，呢到要攞番個area_id，再用where id = area_id嘅方法做filter fil出邊個area有咩district
    async selectDistrict(area_id: number) {
        const selectDistrict = await prisma.district.findMany({
            where: {
                area_id: { in: 1 },
            },
        });
        return selectDistrict;
    }

    // bank and branch for register select
    //done
    async bank() {
        const bank = await prisma.bank.findMany();
        return bank;
    }

    //done
    async branch(bank_id: number) {
        const branch = await prisma.branch.findMany({
            where: {
                bank_id: { in: 1 },
            },
        });
        return branch;
    }

    //done
    async bankAcc(branch_id: number) {
        const bankAcc = await prisma.bank_acc.findMany({
            where: {
                branch_id: { in: branch_id },
            },
        });
        return bankAcc;
    }

    //

    // login info for users
    //done
    async login(userLoginInfo: any) {
        const userInfo = await prisma.users.findMany();
        return userInfo;
        // console.log(`compare ${userLoginInfo} with query result`);
    }

    //Homepage
    //未完
    hot() {
        console.log(`arrange by views`);
        return "Test";
    }

    //done
    async comingSoon() {
        const limit = 10;
        const comingSoon = await prisma.product.findMany({
            orderBy: {
                release_date: "desc",
            },
            take: limit,
        });
        return comingSoon;

        console.log(`select products by a desc of time `);
    }

    //done
    async displayTag() {
        const homeTag = await prisma.tag.findMany();
        return homeTag;
        console.log(`display Tag filter in Homepage`);
    }

    //done
    async displayPlatform() {
        const homePlatform = await prisma.platform.findMany();

        return homePlatform;
        console.log(`display platform filter in Homepage`);
    }
    //

    // search engine
    //done
    async platformFilter() {
        const platform = await this.prisma.platform.findMany({
            include: {
                products: {
                    include: {
                        versions: true,
                    },
                },
            },
        });

        return platform;
    }

    //done
    async tagFilter(tags: string[]) {
        const product = await this.prisma.product.findMany({
            where: {
                product_tags: {
                    some: {
                        tag: {
                            tag: {
                                in: tags,
                            },
                        },
                    },
                },
            },
            include: {
                product_tags: true,
            },
        });
        return product;
        console.log("using query to get all value which is NOT repeat", tags);
    }

    //done
    async search(search: string) {
        const target = `%${search}%`;

        const version =
            await prisma.$queryRaw`select n.product_id,n.versionId,product_name,product_status,product_image,release_date,product_intro,view,platform_id,version,version_image from (select product.id as productId,version.id as versionId,* from product join version on version.product_id = product.id) as n where version like ${target} or product_name like ${target} ; `;

        const merchant =
            await prisma.$queryRaw`select n.merchant_name, n.district, n.area from (select merchant.merchant_name, district.district, area.area from merchant join district on merchant.district_id = district.id join area on district.area_id = area.id) as n where merchant_name like ${target} or district like ${target} or area like ${target};`;

        return { merchant, version };

        console.log(
            "using query to get all value which is NOT repeat and remember to split with bank"
        );
    }

    //3個未完
    async version(productId: any) {
        //try

        const version = await prisma.version.findMany({
            where: {
                product: {
                    id: productId,
                },
            },
            include: {
                items: {
                    include: {
                        merchant: true,
                    },
                },
            },
        });

        return version.map((version) => ({
            versionId: version.id,
            versionName: version.version,
            items: version.items.map((item) => ({
                itemId: item.id,
                merchant: item.merchant_id,
            })),
        }));
        //

        // const product = await prisma.product.findFirst({
        //     where: {
        //         id: productId,
        //     },
        // });

        // if (!product) {
        //     throw new NotFoundException("Product not found");
        // }

        // const version = await prisma.version.findFirst({
        //     where: {
        //         id: versionId,
        //         product_id: productId,
        //     },
        // });

        // if (!version) {
        //     throw new NotFoundException("Version not found");
        // }

        console.log(`select all iems with props`, productId);
    }
    district(productid: any, versionId: any, district: any) {
        console.log(`select all iems with props`, productid, versionId, district);
    }
    area(productid: any, versionId: any, area: any) {
        console.log(`select all iems with props`, productid, versionId, area);
    }

    // for search 商戶報價 and 評論

    //done
    async priceDesc(productid: any, versionId: any) {
        const item = await prisma.item.findMany({
            orderBy: {
                newest_price: "desc",
            },
            include: {
                version: {
                    include: {
                        product: true,
                    },
                },
            },
        });
        return item;
        console.log(`set price desc`, productid, versionId);
    }

    //done
    async priceAsec(productid: any, versionId: any) {
        const item = await prisma.item.findMany({
            orderBy: {
                newest_price: "asc",
            },
            include: {
                version: {
                    include: {
                        product: true,
                    },
                },
            },
        });
        return item;

        console.log(`set price asec`, productid, versionId);
    }
    ratingDesc(productid: any, versionId: any) {
        console.log(`set rating asce`, productid, versionId);
    }
    ratingAsce(productid: any, versionId: any) {
        console.log(`set rating asce`, productid, versionId);
    }
    searchItem(productid: any, versionId: any, string: Array<string>) {
        console.log(
            "using query to get all value which is NOT repeat and remember to split with bank",
            productid,
            versionId,
            string
        );
    }
    //Homepage tag

    //order display
    displayOrder(JWTpayload: any): void {
        console.log(`display order by userId`, JWTpayload);
    }
    displayOrderHistory(JWTpayload: any): void {
        console.log(`display order history by userId`, JWTpayload);
    }
    //
}
