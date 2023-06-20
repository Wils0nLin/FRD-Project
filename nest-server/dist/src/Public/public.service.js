"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const client_1 = require("@prisma/client");
const hash_1 = require("./hash");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const prisma = new client_1.PrismaClient();
let PublicService = exports.PublicService = class PublicService {
    constructor(prisma, jwt, config) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
    }
    async Register(form, identity, files) {
        async function conRegister(form, users_id) {
            let consumer;
            consumer = {
                users: { connect: { id: users_id } },
                QRcode: form.QRcode,
                consumer_name: form.consumer_name,
                consumer_phone: form.consumer_phone,
            };
            const createConsumer = await prisma.consumer.create({ data: consumer });
            return createConsumer;
        }
        async function merRegister(form, users_id, files) {
            console.log("files: ", files);
            console.log("form: ", form);
            let merchant;
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
        }
        async function registerCondition(form, identity) {
            let hashedPassword = await (0, hash_1.hashPassword)(form.password);
            let users;
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
        }
        else if (identity === "merchant") {
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
    async selectArea() {
        const selectArea = await prisma.area.findMany();
        return selectArea;
    }
    async selectDistrict() {
        const selectDistrict = await prisma.district.findMany();
        return selectDistrict;
    }
    async bank() {
        const bank = await prisma.bank.findMany();
        return bank;
    }
    async branch() {
        const branch = await prisma.branch.findMany();
        return branch;
    }
    async login(form) {
        const user = await this.prisma.users.findUnique({
            where: { username: form.username },
            select: { id: true, password: true, identity: true },
        });
        if (!user || !(await (0, hash_1.checkPassword)(form.password, user.password))) {
            throw new common_1.UnauthorizedException();
        }
        return this.signToken(user.id, user.identity);
    }
    async signToken(userId, userIdentity) {
        const payload = { signId: userId, signIdentity: userIdentity };
        console.log(this.config.get("JWT_SECRET"));
        return {
            access_token: await this.jwt.signAsync(payload, {
                expiresIn: "1d",
                secret: this.config.get("JWT_SECRET"),
            }),
        };
    }
    hot() {
        console.log(`arrange by views`);
        return "Test";
    }
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
    async displayTag() {
        const homeTag = await prisma.tag.findMany();
        return homeTag;
        console.log(`display Tag filter in Homepage`);
    }
    async displayPlatform() {
        const homePlatform = await prisma.platform.findMany();
        return homePlatform;
        console.log(`display platform filter in Homepage`);
    }
    async platformFilter(platformName) {
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
    async tagFilter(tags) {
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
    async search(search) {
        const target = `%${search}%`;
        const version = await prisma.$queryRaw `select n.product_id,n.versionId,product_name,product_status,product_image,release_date,product_intro,view,platform_id,version,version_image from (select product.id as productId,version.id as versionId,* from product join version on version.product_id = product.id) as n where version like ${target} or product_name like ${target} ; `;
        const merchant = await prisma.$queryRaw `select n.merchant_name, n.district, n.area from (select merchant.merchant_name, district.district, area.area from merchant join district on merchant.district_id = district.id join area on district.area_id = area.id) as n where merchant_name like ${target} or district like ${target} or area like ${target};`;
        return { merchant, version };
    }
    async getMerchantByItemId(itemId) {
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
    async version(productId, versionId) {
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
        const merchants = await Promise.all(items.map((item) => this.getMerchantByItemId(item.itemId)));
        return {
            versionId: version.id,
            versionName: version.version,
            items: items.map((item, index) => ({
                itemId: item.itemId,
                merchant: merchants[index],
            })),
        };
    }
    district(productid, versionId, district) {
        console.log(`select all iems with props`, productid, versionId, district);
    }
    area(productid, versionId, area) {
        console.log(`select all iems with props`, productid, versionId, area);
    }
    async priceDesc(productid, versionId) {
        const item = await prisma.item.findMany({
            orderBy: {
                original_price: "desc",
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
    async priceAsec(productid, versionId) {
        const item = await prisma.item.findMany({
            orderBy: {
                original_price: "asc",
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
    ratingDesc(productid, versionId) {
        console.log(`set rating asce`, productid, versionId);
    }
    ratingAsce(productid, versionId) {
        console.log(`set rating asce`, productid, versionId);
    }
    searchItem(productid, versionId, string) {
        console.log("using query to get all value which is NOT repeat and remember to split with bank", productid, versionId, string);
    }
    displayOrder(JWTpayload) {
        console.log(`display order by userId`, JWTpayload);
    }
    displayOrderHistory(JWTpayload) {
        console.log(`display order history by userId`, JWTpayload);
    }
};
exports.PublicService = PublicService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], PublicService);
//# sourceMappingURL=public.service.js.map