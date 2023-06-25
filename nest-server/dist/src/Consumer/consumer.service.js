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
    async displayWishList(consumer_id) {
        try {
            const displayWishlist = await prisma.wishlist_product.findMany({
                where: {
                    consumer: { id: consumer_id },
                },
                include: {
                    product: true,
                },
            });
            return displayWishlist;
        }
        catch (error) {
            throw new Error("無法獲取願望清單");
        }
    }
    async deleteOrder(id) {
        console.log("i am del ser", id);
        const result = await prisma.$queryRaw `delete from orders where id =${id};`;
        return result;
    }
    async getOrderRecord(userId) {
        console.log(userId);
        const result = await prisma.$queryRaw `SELECT merchant.merchant_name,
        consumer.consumer_name,
        orders.amount,
        orders.payment,
        orders.order_status,
        item.stock_status,
        version.version,
        product.product_name,
        product.product_image
    FROM orders
        JOIN item on item.id = orders.item_id
        JOIN version on version.id = item.version_id
        JOIN product on product.id = version.product_id
        JOIN merchant on merchant.id = item.merchant_id
        JOIN consumer ON consumer.id = orders.consumer_id
        JOIN users on users.id = consumer.users_id where users.id = ${Number(userId)};`;
        return result;
    }
    async displayOrder(JWTpayload) {
        console.log("i am ser ", JWTpayload);
        const result = await prisma.$queryRaw `SELECT product.product_name,
        product.product_image,
        orders.amount,
        orders.payment,
        orders.order_status,
        merchant.merchant_name,
        version.version,
        orders.id as order_id
        FROM orders
        JOIN item on item.id = orders.item_id
        join version on version.id = item.version_id
        join product on product.id = version.product_id
        join merchant on merchant.id = item.merchant_id
        WHERE orders.consumer_id = ${Number(JWTpayload)} and orders.payment = false; `;
        return result;
    }
    async uploadWishList(consumerId, productId) {
        const existingWishlistProduct = await prisma.wishlist_product.findFirst({
            where: {
                consumer_id: consumerId,
                product_id: productId,
            },
        });
        if (existingWishlistProduct) {
            throw new Error("該產品和版本已經在願望清單中");
        }
        console.log(`upload product by id`);
    }
    async deleteWishList(consumerId, productId) {
        const deleteWishList = await prisma.wishlist_product.deleteMany({
            where: {
                consumer_id: consumerId,
                product_id: productId,
            },
        });
        return deleteWishList;
        console.log(`del product by id`);
    }
    async createOrder(form) {
        console.log("iamser", form);
        const result = await prisma.$queryRaw `insert into orders (
                item_id,
                amount,
                order_status,
                payment,
                create_time,
                consumer_id,
                consumer_qrcode
        
            )
        values (
               
               ${form.itemId},
               ${form.amount},
               ${form.order_status},
               ${form.payment},
               ${form.create_time},
               ${form.consumer_id},
               ${form.QRcode}
              
            )`;
        return result;
    }
    async paymentConfirm(paymentArr) {
        console.log(Array);
        return paymentArr.map(async (id) => await prisma.$queryRaw `update orders set payment = true where id = ${Number(id)};`);
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
    async getHot() {
        const hot = await prisma.$queryRaw `select * from product join hot on product_id = product.id;`;
        return hot;
    }
};
exports.ConsumerService = ConsumerService = __decorate([
    (0, common_1.Injectable)()
], ConsumerService);
//# sourceMappingURL=consumer.service.js.map