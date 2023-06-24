import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { Prisma, PrismaClient, Users } from "@prisma/client";
import {
    RegisterConFormDTO,
    RegisterMerFormDTO,
    RegisterUserFormDTO,
} from "./dto/createPublic.dto";
import { log } from "console";
import { hashPassword, checkPassword } from "./hash";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

const prisma = new PrismaClient();
@Injectable()
export class PublicService {
    getHot() {
        throw new Error("Method not implemented.");
    }
    // getMerchantByItemId(itemId: number) {
    //     throw new Error("Method not implemented.");
    // }
    constructor(
        private readonly prisma: PrismaService,
        private readonly jwt: JwtService,
        private readonly config: ConfigService
    ) {}

    //merchant未完
    async Register(form: any, identity: string, files: any | null) {
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

        async function merRegister(form: any, users_id: number, files: any) {
            //係呢到攞番由front
            console.log("files: ", files);
            console.log("form: ", form);
            // const merchant =
            // await prisma.$queryRaw`insert into merchant (users_id,merchant_image,merchant_name,merchant_phone,biz_registration,district_id,address,opening_hour,bank_account,branch_id) values ();`;

            let merchant: Prisma.MerchantUncheckedCreateInput;
            merchant = {
                users_id: users_id,
                merchant_image: files.IconImg[0].buffer,
                merchant_name: form.name,
                merchant_phone: form.phone,
                biz_registration: files.RegisImg[0].buffer,
                district_id: parseInt(form.district),
                address: form.address,
                branch_id: parseInt(form.branch),
                bank_account: form.accNum,
                opening_hour: form.Hour,
            };

            const createMerchant = await prisma.merchant.create({ data: merchant });
            console.log(createMerchant);

            return createMerchant;
            // console.log("write your register query here", form);
        }

        async function registerCondition(form: any, identity: any) {
            let hashedPassword = await hashPassword(form.password);
            let users: Prisma.UsersCreateInput;
            users = {
                username: form.username,
                password: hashedPassword,
                email: form.email,
                identity: identity,
            };

            const createUser = await prisma.users.create({ data: users });
            let users_id = Number(createUser.id);

            return { form, users_id, files };
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
                    merRegister(output.form, output.users_id, output.files);
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
    async selectDistrict() {
        const selectDistrict = await prisma.district.findMany();
        return selectDistrict;
    }

    // bank and branch for register select
    //done
    async bank() {
        const bank = await prisma.bank.findMany();
        return bank;
    }

    //done
    async branch() {
        const branch = await prisma.branch.findMany();
        return branch;
    }

    //done
    // async bankAcc(branch_id: number) {
    //     const bankAcc = await prisma.bank_acc.findMany({
    //         where: {
    //             branch_id: { in: branch_id },
    //         },
    //     });
    //     return bankAcc;
    // }

    //

    // login info for users
    //done
    async login(form: any) {
        const user: any = await this.prisma.users.findUnique({
            where: { username: form.username },
            select: { id: true, password: true, identity: true },
        });

        if (!user || !(await checkPassword(form.password, user.password))) {
            throw new UnauthorizedException();
        }

        return this.signToken(user.id, user.identity);
    }

    async signToken(userId: number, userIdentity: string) {
        const payload = { signId: userId, signIdentity: userIdentity };
        console.log(this.config.get("JWT_SECRET"));
        return {
            access_token: await this.jwt.signAsync(payload, {
                expiresIn: "1d",
                secret: this.config.get("JWT_SECRET"),
            }),
        };
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
    async platformFilter(platformName: string) {
        const platform = await this.prisma.platform.findMany({
            where: {
                platform: {
                    equals: platformName,
                },
            },
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

    //done tag search game
    async tagFilter(tags: string[]) {
        const tagIds = await this.prisma.tag
            .findMany({
                where: {
                    tag: {
                        in: tags,
                    },
                },
                select: {
                    id: true,
                },
            })
            .then((tags) => tags.map((tag) => tag.id));

        // 使用獲取的標籤ID進行產品搜索
        const product = await this.prisma.product.findMany({
            where: {
                product_tags: {
                    some: {
                        tag: {
                            id: {
                                in: tagIds,
                            },
                        },
                    },
                },
            },
            include: {
                product_tags: true,
            },
        });

        console.log("using query to get all value which is NOT repeat", tags);
        return product;
    }
    // async tagFilter(tags: string[]) {
    //     const product = await this.prisma.product.findMany({
    //         where: {
    //             product_tags: {
    //                 some: {
    //                     tag: {
    //                         tag: {
    //                             in: tags,
    //                         },
    //                     },
    //                 },
    //             },
    //         },
    //         include: {
    //             product_tags: true,
    //         },
    //     });
    //     return product;
    //     console.log("using query to get all value which is NOT repeat", tags);
    // }

    //done
    async searchVersion(id: number) {
        console.log(id);
        const value = `${id}`;
        const version =
            await prisma.$queryRaw` select version.id as version_id,* from version join product on product.id = product_id where product_id = (${value}::integer) ;`;
        return version;
    }
    async searchItem(version_id: number) {
        console.log(version_id);
        const value = `${version_id}`;
        const items =
            await prisma.$queryRaw`select item.price,item.stock_status,item.availability,item.end_date,merchant_name,merchant_phone,merchant.address,district.district from item join merchant on merchant_id = merchant.id join district on district.id = merchant.district_id where version_id=(${value}::integer);`;
        return items;
    }

    //3個未完
    //select product then select version to find which merchant have this item
    async getMerchantByItemId(itemId: any) {
        const item = await prisma.item.findUnique({
            where: {
                id: itemId,
            },
            include: {
                merchant: true,
            },
        });
        if (!item) {
            throw new Error("Item not found");
        }
        return {
            itemId: item.id,
            merchantId: item.merchant.id,
            merchantName: item.merchant.merchant_name,
            merchantPhone: item.merchant.merchant_phone,
        };
    }
    async searchText(Text: string) {
        console.log("i am service", Text);
        let value = `%${Text}%`;
        console.log(value);
        const result =
            await prisma.$queryRaw`select * from product where product_name like ${value};`;
        return result;
    }
    //done
    async version(productId: any, versionId: any) {
        //try
        const version = await prisma.version.findUnique({
            where: {
                id: versionId,
            },
            include: {
                items: true,
            },
        });

        if (!version || version.product_id !== productId) {
            throw new Error("Version not found");
        }

        const items = version.items.map((item) => ({
            itemId: item.id,
            merchantId: item.merchant_id,
        }));

        const merchants = await Promise.all(
            items.map((item) => this.getMerchantByItemId(item.itemId))
        );
        return {
            versionId: version.id,
            versionName: version.version,
            items: items.map((item, index) => ({
                itemId: item.itemId,
                merchant: merchants[index],
            })),
        };

        // console.log(`select all iems with props`, productId);
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
                price: "desc",
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
                price: "asc",
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
