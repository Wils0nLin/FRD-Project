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
const prisma = new client_1.PrismaClient();
let PublicService = exports.PublicService = class PublicService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async Register(form, identity) {
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
        async function merRegister(form, users_id) {
            const district_id = 1;
            const bank_acc_id = 1;
            let merchant;
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
        }
        async function registerCondition(form, identity) {
            let users;
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
        }
        else if (identity === "merchant") {
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
    async selectArea() {
        const selectArea = await prisma.area.findMany();
        return selectArea;
    }
    async selectDistrict(area_id) {
        const selectDistrict = await prisma.district.findMany({
            where: {
                area_id: { in: 1 },
            },
        });
        return selectDistrict;
    }
    async bank() {
        const bank = await prisma.bank.findMany();
        return bank;
    }
    async branch(bank_id) {
        const branch = await prisma.branch.findMany({
            where: {
                bank_id: { in: 1 },
            },
        });
        return branch;
    }
    async bankAcc(branch_id) {
        const bankAcc = await prisma.bank_acc.findMany({
            where: {
                branch_id: { in: branch_id },
            },
        });
        return bankAcc;
    }
    async login(userLoginInfo) {
        const userInfo = await prisma.users.findMany();
        return userInfo;
    }
    hot() {
        console.log(`arrange by views`);
        return "Test";
    }
    comingSoon() {
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
    async tagFilter(tags) {
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
    async search(search) {
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
        const merchant = await this.prisma.merchant.findMany({
            where: {
                district: {
                    district: search,
                },
            },
            include: {
                district: {
                    include: {
                        area: true,
                    },
                },
            },
        });
        return { merchant, version };
        console.log("using query to get all value which is NOT repeat and remember to split with bank");
    }
    version(productid, versionId) {
        console.log(`select all iems with props`, productid, versionId);
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
    async priceAsec(productid, versionId) {
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
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PublicService);
//# sourceMappingURL=public.service.js.map