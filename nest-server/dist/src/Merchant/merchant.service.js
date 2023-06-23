"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchantService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let MerchantService = exports.MerchantService = class MerchantService {
    async getSelfInfo(userId) {
        const foundUser = await prisma.$queryRawUnsafe(`select merchant.id, merchant_name, merchant_phone, address, bank_account, opening_hour, district, area from users JOIN merchant on users.id = users_id JOIN district on district.id = district_id JOIN area on area.id = area_id where users.id = ${userId};`);
        return foundUser;
    }
    async editMerProfile(merchantId, form) {
        const merchant = {
            merchant_image: form.merchant_image,
            merchant_name: form.merchant_name,
            merchant_phone: form.merchant_phone,
            biz_registration: form.biz_registration,
            address: form.address,
            opening_hour: form.opening_hour,
            announcement: form.announcement,
            district: form.district,
            bank_account: form.bank_account,
        };
        const editMerProfile = await prisma.merchant.update({
            where: { id: Number(merchantId) },
            data: merchant,
        });
        return editMerProfile;
    }
    async getAllItem(merId) {
        const foundItem = await prisma.$queryRawUnsafe(`select item.id, stock_status, price, version, version_image, platform, product_name, end_date from item JOIN version on version.id = version_id JOIN product on product.id = product_id JOIN platform on platform.id = platform_id JOIN merchant on merchant.id = merchant_id where merchant.id = ${merId} AND availability = true ORDER BY item.id;`);
        return foundItem;
    }
    async getComment(merId) {
        const foundComment = await prisma.$queryRawUnsafe(`select consumer_name, rating, comment, create_time from feedback JOIN consumer on consumer.id = conumber_id where merchant_id = ${merId} ORDER BY create_time DESC;`);
        return foundComment;
    }
    async uploadItems(merchantId, productId, versionIds, itemData) {
        console.log("yo itemData: ", itemData);
        const product = await prisma.product.findUnique({
            where: { id: productId },
        });
        if (!product) {
            throw new Error("Invalid product ID");
        }
        const versions = await prisma.version.findMany({
            where: { id: { in: versionIds } },
        });
        if (versionIds.length !== versions.length) {
            throw new Error("Invalid version ID");
        }
        const items = [];
        for (const version of versions) {
            const item = await prisma.item.create({
                data: Object.assign(Object.assign({}, itemData), { merchant: { connect: { id: merchantId } }, version: { connect: { id: version.id } }, price: itemData.price, end_date: new Date("2023-07-01T00:00:00Z"), stock_status: itemData.stock_status, availability: itemData.availability }),
            });
            items.push(item);
        }
        return { product, versions, items };
    }
    async updateItems(itemId, form) {
        let itemInfo = {
            price: form.price,
            stock_status: form.stock_status,
            end_date: form.end_date,
        };
        const userUpdate = await prisma.item.update({
            where: { id: Number(itemId) },
            data: itemInfo,
        });
        return true;
    }
    async deleteItems(itemId) {
        let itemInfo = {
            availability: false,
        };
        const userUpdate = await prisma.item.update({
            where: { id: Number(itemId) },
            data: itemInfo,
        });
        return true;
    }
    pairUserId(consumerid) {
        console.log(`find items by user id which is generate by code and published day`, consumerid);
    }
    paymentConfirm(result) {
        console.log(`change order status by ${result}`);
    }
    async getOrderRecord(merId) {
        const foundRecord = await prisma.$queryRawUnsafe(`select consumer_name, amount remain_payment, create_time, version, product_name from feedback JOIN consumer on consumer.id = conumber_id where merchant_id = ${merId} ORDER BY create_time DESC;`);
        return foundRecord;
    }
};
exports.MerchantService = MerchantService = __decorate([
    (0, common_1.Injectable)()
], MerchantService);
//# sourceMappingURL=merchant.service.js.map