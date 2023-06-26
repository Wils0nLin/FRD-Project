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
    async getConsumerInfo(userId) {
        const getConsumerId = await prisma.$queryRaw `select * from users join consumer on users.id = consumer.users_id where users.id = ${Number(userId)}`;
        return getConsumerId;
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
    async uploadWishList(form) {
        const { consumerId, productId } = form;
        try {
            const uploadWishlist = await prisma.wishlist_product.create({
                data: {
                    consumer: { connect: { id: consumerId } },
                    product: { connect: { id: productId } },
                },
            });
            return uploadWishlist;
        }
        catch (error) {
            console.error("Error", error);
            throw new Error("Failed to create wishlist");
        }
    }
    async displayWishList(userId) {
        try {
            const displayWishlist = await prisma.$queryRaw `select wishlist_product.id as wishlist_id , * from wishlist_product join product on product.id = wishlist_product.product_id join consumer on consumer.id = wishlist_product.consumer_id join users on users.id = consumer.users_id where users.id = ${Number(userId)}`;
            console.log("success");
            return displayWishlist;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async deleteWishList(id) {
        const deleteWishList = await prisma.$queryRaw `delete from wishlist_product where id =CAST(${id} AS INTEGER);`;
        return deleteWishList;
    }
    async getShopInfo(shopId) {
        const foundShop = await prisma.$queryRawUnsafe(`select merchant_name, merchant_phone, address, opening_hour, district, area from merchant JOIN district on district.id = district_id JOIN area on area.id = area_id where merchant.id = ${shopId};`);
        return foundShop;
    }
    async createOrder(form) {
        console.log("iamser", form);
        const result = await prisma.$queryRaw `insert into orders ( item_id, amount, order_status, payment, create_time, consumer_id, "QRcode" )
        values (${form.itemId}, ${form.amount}, ${form.order_status}, ${form.payment}, ${form.create_time}, ${form.consumer_id}, ${form.QRcode})`;
        return true;
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
        const hot = await prisma.$queryRaw `select * from product where hot = true;`;
        return hot;
    }
    async getAllProduct() {
        const coming = await prisma.$queryRaw `select * from product`;
        return coming;
    }
};
exports.ConsumerService = ConsumerService = __decorate([
    (0, common_1.Injectable)()
], ConsumerService);
//# sourceMappingURL=consumer.service.js.map