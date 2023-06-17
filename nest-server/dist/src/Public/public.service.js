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
let PublicService = exports.PublicService = class PublicService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async register(form, identity) {
        let transaction;
        try {
            transaction = await this.prisma.$transaction(async (prisma) => {
                const users = await prisma.users.create({
                    data: {
                        username: form.username,
                        password: form.password,
                        email: form.email,
                        identity: identity,
                    },
                });
                if (identity === "consumer") {
                    await prisma.consumer.create({
                        data: {
                            users_id: users.id,
                            QRcode: form.QRcode,
                            consumer_name: form.consumer_name,
                            consumer_phone: form.consumer_phone,
                        },
                    });
                }
                else if (identity === "merchant") {
                    await prisma.merchant.create({
                        data: {
                            users_id: users.id,
                            merchant_image: form.merchant_image,
                            merchant_name: form.merchant_name,
                            merchant_phone: form.merchant_phone,
                            biz_registration: form.biz_registration,
                            district_id: form.district_id,
                            address: form.address,
                            bank_acc_id: form.bank_acc_id,
                            opening_hour: form.opening_hour,
                            announcement: form.announcement,
                        },
                    });
                }
                const result = users;
            });
        }
        catch (error) {
            console.log("error");
        }
    }
    async login(userLoginInfo) {
        const getUserInfo = await this.prisma.users.findMany();
        return getUserInfo;
    }
    hot() {
        console.log(`arrange by views`);
        return "Test";
    }
    comingSoon() {
        console.log(`select products by a desc of time `);
    }
    displayTag() {
        console.log(`display Tag filter in Homepage`);
    }
    displayPlatform() {
        console.log(`display platform filter in Homepage`);
    }
    platformFilter(platform) {
        console.log("using query to get all value which is NOT repeat", platform);
    }
    tagFilter(tag) {
        console.log("using query to get all value which is NOT repeat", tag);
    }
    search(string) {
        console.log("using query to get all value which is NOT repeat and remember to split with bank", string);
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
    priceDesc(productid, versionId) {
        console.log(`set price desc`, productid, versionId);
    }
    priceAsec(productid, versionId) {
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