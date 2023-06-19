"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumerService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let ConsumerService = exports.ConsumerService = class ConsumerService {
    getQrCodeId(userId) {
        console.log("get qrCode id by user id ");
    }
    async displayWishList(consumer_id) {
        try {
            const displayWishlist = await prisma.wishlist_product.findMany({
                where: {
                    consumer: { id: consumer_id },
                },
                include: {
                    product: true,
                    version: true,
                },
            });
            return displayWishlist;
        }
        catch (error) {
            throw new Error("無法獲取願望清單");
        }
    }
    async uploadWishList(consumerId, productId, versionId, targetPrice, notification) {
        const existingWishlistProduct = await prisma.wishlist_product.findFirst({
            where: {
                consumer_id: consumerId,
                product_id: productId,
                version_id: versionId,
            },
        });
        if (existingWishlistProduct) {
            throw new Error("該產品和版本已經在願望清單中");
        }
        const wishlistProduct = await prisma.wishlist_product.create({
            data: {
                consumer: { connect: { id: consumerId } },
                product: { connect: { id: productId } },
                version: { connect: { id: versionId } },
                target_price: targetPrice,
                notification: notification,
            },
        });
        return wishlistProduct;
        console.log(`upload product by id`);
    }
    async deleteWishList(consumerId, productId, versionId) {
        const deleteWishList = await prisma.wishlist_product.deleteMany({
            where: {
                consumer_id: consumerId,
                product_id: productId,
                version_id: versionId,
            },
        });
        return deleteWishList;
        console.log(`del product by id`);
    }
    createOrder(itemID) {
        console.log(`upload items to `);
    }
    prePaymentConfirm(paymentStatus) {
        console.log(`confirm payment success or not if  change status`);
    }
    remainPaymentConfirm(paymentStatus) {
        console.log(`update to payed by case`);
    }
    async editConProfile(consumerId, form) {
        const consumer = {
            QRcode: form.QRcode,
            consumer_name: form.consumer_name,
            consumer_phone: form.consumer_phone,
        };
        const editConProfile = await prisma.consumer.update({
            where: { id: Number(consumerId) },
            data: consumer,
        });
        return editConProfile;
        console.log(`update profile by ${form}`);
    }
    async feedback(comment, merchantId, consumerId, rating) {
        const savedFeedback = await prisma.feedback.create({
            data: {
                comment: comment,
                merchant: { connect: { id: merchantId } },
                consumer: { connect: { id: consumerId } },
                rating: rating,
            },
        });
        return savedFeedback;
        console.log(`insert feedback`);
    }
};
exports.ConsumerService = ConsumerService = __decorate([
    (0, common_1.Injectable)()
], ConsumerService);
//# sourceMappingURL=consumer.service.js.map