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
    async editMerProfile(merchantId, form) {
        const district_id = 1;
        const bank_acc_id = 1;
        const merchant = {
            merchant_image: form.merchant_image,
            merchant_name: form.merchant_name,
            merchant_phone: form.merchant_phone,
            biz_registration: form.biz_registration,
            address: form.address,
            opening_hour: form.opening_hour,
            announcement: form.announcement,
            district: { connect: { id: district_id } },
            bank_acc: { connect: { id: bank_acc_id } },
        };
        const editMerProfile = await prisma.merchant.update({
            where: { id: Number(merchantId) },
            data: merchant,
        });
        return editMerProfile;
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
                data: Object.assign(Object.assign({}, itemData), { merchant: { connect: { id: merchantId } }, version: { connect: { id: version.id } }, original_price: itemData.original_price, newest_price: itemData.newest_price, end_date: new Date("2023-07-01T00:00:00Z"), stock_status: itemData.stock_status, availability: itemData.availability }),
            });
            items.push(item);
        }
        return { product, versions, items };
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
};
exports.MerchantService = MerchantService = __decorate([
    (0, common_1.Injectable)()
], MerchantService);
//# sourceMappingURL=merchant.service.js.map