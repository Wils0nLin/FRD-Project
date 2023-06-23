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
        const foundUser = await prisma.$queryRawUnsafe(`select users_id, merchant.id, merchant_name, merchant_phone, address, bank_account, opening_hour, district, area from users JOIN merchant on users.id = users_id JOIN district on users.id = users_id JOIN area on area.id = area_id where users.id = ${userId};`);
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
    async getAllItem(userId) {
        const foundItem = await prisma.$queryRawUnsafe(`select item.id, stock_status, availability, price, version, version_image, platform, product_name, merchant_name from item JOIN version on version.id = version_id JOIN product on product.id = product_id JOIN platform on platform.id = platform_id JOIN merchant on merchant.id = merchant_id JOIN users on users.id = users_id where users.id = ${userId};`);
        return foundItem;
    }
    async uploadItems(form, merchantId) {
        try {
            const uploadItem = await prisma.item.create({
                data: {
                    merchant_id: merchantId,
                    version_id: form.version_id,
                    end_date: new Date(form.end_date),
                    price: parseInt(form.price),
                    availability: form.availability,
                    stock_status: form.stock_status,
                },
            });
            return uploadItem;
        }
        catch (error) {
            console.error("Error creating item:", error);
            throw new Error("Failed to create item");
        }
    }
    updateItems(form) {
        console.log(`update item by body and also running query to get all values with all consumer in wish list sees is there have matches of consumer wishes`, form);
    }
    async changeItemStatus(itemId, stock_status) {
        const changeItemStatus = await prisma.item.update({
            where: { id: Number(itemId) },
            data: { stock_status: stock_status },
        });
        return changeItemStatus;
    }
    handleChangeStatus(formData) {
        const { itemId, stockStatus } = formData;
        if (stockStatus) {
            const changeStatus = this.changeItemStatus(itemId, stockStatus);
            return changeStatus;
        }
    }
    pairUserId(consumerid) {
        console.log(`find items by user id which is generate by code and published day`, consumerid);
    }
    paymentConfirm(result) {
        console.log(`change order status by ${result}`);
    }
    async getAllProducts() {
        const getAllProducts = await prisma.product.findMany();
        return getAllProducts;
    }
    async getAllVersion() {
        const getAllVersion = await prisma.version.findMany();
        return getAllVersion;
    }
};
exports.MerchantService = MerchantService = __decorate([
    (0, common_1.Injectable)()
], MerchantService);
//# sourceMappingURL=merchant.service.js.map