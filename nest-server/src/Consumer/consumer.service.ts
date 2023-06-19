import { Injectable } from "@nestjs/common";
import { Wishlist_product } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { Prisma, PrismaClient, Users } from "@prisma/client";

const prisma = new PrismaClient();
@Injectable()
export class ConsumerService {
    async getSelfInfo(userId: number) {
        const foundUser = await prisma.users.findUnique({
            where: { id: userId },
            include: { consumers: true },
        });
        return foundUser;
    }

    // ---------------------------------------------------------------------------------------------------------
    getQrCodeId(userId: string) {
        console.log("get qrCode id by user id ");
    }
    // ---------------------------------------------------------------------------------------------------------
    //未攞到consumer id
    // async displayWishList(consumer_id: number) {
    //     try {
    //         const displayWishlist = await prisma.wishlist_product.findMany({
    //             where: {
    //                 consumer: { id: consumer_id },
    //             },
    //             include: {
    //                 product: true,
    //                 version: true,
    //             },
    //         });
    //         return displayWishlist;
    //     } catch (error) {
    //         throw new Error("無法獲取願望清單");
    //     }

    //     // console.log(`display wish list`);
    // }
    // displayWishList() {
    //     console.log(`display wish list`);
    // }
    // ---------------------------------------------------
    //done

    async uploadWishList(
        consumerId: number,
        productId: number,
        versionId: number,
        targetPrice: number,
        notification: boolean
    ) {
        //不能重覆upload相同product or version去wishlist
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

        // const wishlistProduct = await prisma.wishlist_product.create({
        //     data: {
        //         consumer: { connect: { id: consumerId } },
        //         product: { connect: { id: productId } },
        //         version: { connect: { id: versionId } },
        //         target_price: targetPrice,
        //         notification: notification,
        //     },
        // });
        // return wishlistProduct;
        console.log(`upload product by id`);
    }

    // uploadWishList(id: any) {

    //     console.log(`upload product by id`);
    // }
    // ---------------------------------------------------
    //done
    async deleteWishList(consumerId: number, productId: number, versionId: number) {
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
    // ---------------------------------------------------------------------------------------------------------
    createOrder(itemID: string) {
        console.log(`upload items to `);
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
    async editConProfile(consumerId: any, form: any) {
        const consumer: Prisma.ConsumerUpdateInput = {
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
    // ---------------------------------------------------------------------------------------------------------
    //唔知點解加左rating就唔work
    async feedback(comment: any, merchantId: any, consumerId: any, rating: number) {
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

    // rating(merchantId: string, rating: number, consumerId: any) {

    //     console.log(`inserting rating by merchantID`);
    // }
}
