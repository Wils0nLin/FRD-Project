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
const hash_1 = require("../Public/hash");
const prisma = new client_1.PrismaClient();
let ConsumerService = exports.ConsumerService = class ConsumerService {
    async getSelfInfo(userId) {
        const foundUser = await prisma.$queryRawUnsafe(`select * from users join consumer on users.id = users_id where users.id = ${userId};`);
        return foundUser;
    }
    async test() {
        const foundUser = await prisma.$queryRawUnsafe(`select merchant_image from merchant;;`);
        return foundUser;
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
    async getShopInfo(shopId) {
        const foundShop = await prisma.$queryRawUnsafe(`select merchant_name, merchant_phone, address, opening_hour, district, area from merchant JOIN district on district.id = district_id JOIN area on area.id = area_id where merchant.id = ${shopId};`);
        return foundShop;
    }
    async createOrder(form) {
        console.log("iamser", form);
        const result = await prisma.$queryRaw `insert into orders ( consumer_QRcode,item_id,amount,order_status,payment,create_time) values (${form.QRcode},${form.itemId},${form.amount},${form.order_status},${form.payment},${form.create_time})`;
        return result;
    }
    paymentConfirm(paymentStatus) {
        console.log(`confirm payment success or not if  change status`);
    }
    async editUserProfile(userId, form) {
        let userInfo = {
            email: form.email,
        };
        const userUpdate = await prisma.users.update({
            where: { id: Number(userId) },
            data: userInfo,
        });
        return true;
    }
    async editConProfile(conId, form) {
        let consumerInfo = {
            consumer_name: form.name,
            consumer_phone: form.phone,
        };
        const consumerUpdate = await prisma.consumer.update({
            where: { id: Number(conId) },
            data: consumerInfo,
        });
        return true;
    }
    async editPassword(userId, form) {
        let hashedPassword = await (0, hash_1.hashPassword)(form.newPassword);
        const foundUser = await prisma.users.findUnique({
            where: { id: Number(userId) },
            select: { password: true },
        });
        if (!foundUser || !(await (0, hash_1.checkPassword)(form.originPassword, foundUser.password))) {
            return false;
        }
        else {
            let userInfo = {
                password: hashedPassword,
            };
            const userUpdate = await prisma.users.update({
                where: { id: Number(userId) },
                data: userInfo,
            });
            return true;
        }
    }
};
exports.ConsumerService = ConsumerService = __decorate([
    (0, common_1.Injectable)()
], ConsumerService);
//# sourceMappingURL=consumer.service.js.map