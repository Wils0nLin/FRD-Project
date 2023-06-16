import { Injectable } from "@nestjs/common";
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
    async selectArea() {
        const selectArea = await prisma.area.findMany();
        return selectArea;
    }
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
    async bank() {
        const bank = await prisma.bank.findMany();
        return bank;
    }

    async branch(bank_id: number) {
        const branch = await prisma.branch.findMany({
            where: {
                bank_id: { in: 1 },
            },
        });
        return branch;
    }

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
    async login(userLoginInfo: any) {
        const userInfo = await prisma.users.findMany();
        return userInfo;
        // console.log(`compare ${userLoginInfo} with query result`);
    }

    //Homepage
    hot() {
        console.log(`arrange by views`);
        return "Test";
    }
    comingSoon() {
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
    //未完
    // async platformFilter(platform: Array<string>) {
    //     const results = await this.prisma.platform.findMany({
    //         where: {
    //           products: {
    //             some: {
    //               product_name: platform,
    //             },
    //           },
    //         },
    //         include: {
    //           products: {
    //             where: {
    //               product_name: platform,
    //             },
    //             include: {
    //               versions: true,
    //             },
    //           },
    //         },
    //       });

    //     return results;
    //     console.log("using query to get all value which is NOT repeat", platform);
    // }
    //未完
    async tagFilter(tag: Array<string>) {
        const searchTag = await prisma.tag.findMany();
        return searchTag;

        console.log("using query to get all value which is NOT repeat", tag);
    }

    async search(search: any) {
        const version = await prisma.version.findMany({
            where: {
                product: {
                    product_name: search,
                },
            },
            include: {
                product: true,
            },
        });

        //need join table
        const merchant = await prisma.merchant.findMany({
            where: {
                district: {
                    district: search,
                },
            },
            include: {
                district: true,
            },
        });

        // const district = await this.prisma.district.findMany();
        return { merchant, version };

        console.log(
            "using query to get all value which is NOT repeat and remember to split with bank"
        );
    }

    version(productid: any, versionId: any) {
        console.log(`select all iems with props`, productid, versionId);
    }
    district(productid: any, versionId: any, district: any) {
        console.log(`select all iems with props`, productid, versionId, district);
    }
    area(productid: any, versionId: any, area: any) {
        console.log(`select all iems with props`, productid, versionId, area);
    }

    // for 商戶報價

    priceDesc(productid: any, versionId: any) {
        console.log(`set price desc`, productid, versionId);
    }
    priceAsec(productid: any, versionId: any) {
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
