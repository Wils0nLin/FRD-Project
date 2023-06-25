import { Injectable } from "@nestjs/common";
import { Wishlist_product } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { Prisma, PrismaClient, Users } from "@prisma/client";
import { hashPassword, checkPassword } from "src/Public/hash";

const prisma = new PrismaClient();
@Injectable()
export class ConsumerService {
    async getSelfInfo(userId: any) {
        const foundUser = await prisma.$queryRawUnsafe(
            `select * from users join consumer on users.id = users_id where users.id = ${userId};`
        );
        return foundUser;
    }

    // ---------------------------------------------------------------------------------------------------------
    //未攞到consumer id
    async displayWishList(consumer_id: number) {
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
        } catch (error) {
            throw new Error("無法獲取願望清單");
        }

        // console.log(`display wish list`);
    }

    // ---------------------------------------------------
    //done
    async deleteOrder(id: number) {
        console.log("i am del ser", id);
        const result = await prisma.$queryRaw`delete from orders where id =${id};`;
        return result;
    }
    async getOrderRecord(userId: any) {
        console.log(userId)
        const result = await prisma.$queryRaw`SELECT merchant.merchant_name,
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
        JOIN users on users.id = consumer.users_id where users.id = ${Number(userId)};`
        return result
    }
    async displayOrder(JWTpayload: any) {
        console.log("i am ser ", JWTpayload);
        const result = await prisma.$queryRaw`SELECT product.product_name,
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
    async uploadWishList(consumerId: number, productId: number) {
        //不能重覆upload相同product or version去wishlist
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

    // }
    // ---------------------------------------------------
    //done
    async deleteWishList(consumerId: number, productId: number) {
        const deleteWishList = await prisma.wishlist_product.deleteMany({
            where: {
                consumer_id: consumerId,
                product_id: productId,
            },
        });
        return deleteWishList;
        console.log(`del product by id`);
    }

    // ---------------------------------------------------------------------------------------------------------
    async getShopInfo(shopId: any) {
        const foundShop = await prisma.$queryRawUnsafe(
            `select merchant_name, merchant_phone, address, opening_hour, district, area from merchant JOIN district on district.id = district_id JOIN area on area.id = area_id where merchant.id = ${shopId};`
        );
        return foundShop;
    }

    // ---------------------------------------------------------------------------------------------------------
    async createOrder(form: any) {
        console.log("iamser", form);
        const result =
            await prisma.$queryRaw`insert into orders ( item_id, amount, order_status, payment, create_time, consumer_id, "QRcode" )
        values (${form.itemId}, ${form.amount}, ${form.order_status}, ${form.payment}, ${form.create_time}, ${form.consumer_id}, ${form.QRcode})`;
        return true;
    }
    //full pay
    async paymentConfirm(paymentArr: Array<number>) {
        console.log(Array);
        return paymentArr.map(
            async (id) =>
                await prisma.$queryRaw`update orders set payment = true where id = ${Number(id)};`
        );
    }

    // remainPaymentConfirm(paymentStatus: any) {
    //     console.log(`update to payed by case`);
    // }
    // ---------------------------------------------------------------------------------------------------------
    //done
    async editUserProfile(userId: any, form: any) {
        let userInfo: Prisma.UsersUpdateInput = {
            email: form.email,
        };
        const userUpdate = await prisma.users.update({
            where: { id: Number(userId) },
            data: userInfo,
        });
        return true;
    }

    async editConProfile(conId: any, form: any) {
        let consumerInfo: Prisma.ConsumerUpdateInput = {
            consumer_name: form.name,
            consumer_phone: form.phone,
        };
        const consumerUpdate = await prisma.consumer.update({
            where: { id: Number(conId) },
            data: consumerInfo,
        });
        return true;
    }

    async editPassword(userId: any, form: any) {
        let hashedPassword = await hashPassword(form.newPassword);

        const foundUser: any = await prisma.users.findUnique({
            where: { id: Number(userId) },
            select: { password: true },
        });
        if (!foundUser || !(await checkPassword(form.originPassword, foundUser.password))) {
            return false;
        } else {
            let userInfo: Prisma.UsersUpdateInput = {
                password: hashedPassword,
            };
            const userUpdate = await prisma.users.update({
                where: { id: Number(userId) },
                data: userInfo,
            });
            return true;
        }
    }
    // ---------------------------------------------------------------------------------------------------------
    async getHot() {
        const hot =
            await prisma.$queryRaw`select * from product join hot on product_id = product.id;`;
        return hot;
    }

    async getAllProduct() {
        const coming = await prisma.$queryRaw`select * from product`;
        return coming;
    }
}
