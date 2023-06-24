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
    async test() {
        const foundUser = await prisma.$queryRawUnsafe(`select merchant_image from merchant;;`);
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
            await prisma.$queryRaw`insert into orders ( consumer_QRcode,item_id,amount,order_status,payment,create_time) values (${form.QRcode},${form.itemId},${form.amount},${form.order_status},${form.payment},${form.create_time})`;
        return result;
    }
    //full pay
    paymentConfirm(paymentStatus: any) {
        console.log(`confirm payment success or not if  change status`);
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
}
