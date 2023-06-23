import { Body, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { Prisma, PrismaClient, Users } from "@prisma/client";
import { sqltag } from "@prisma/client/runtime";

const prisma = new PrismaClient();
@Injectable()
export class MerchantService {
    async getSelfInfo(userId: any) {
        const foundUser = await prisma.$queryRawUnsafe(
            `select merchant.id, merchant_name, merchant_phone, address, bank_account, opening_hour, district, area from users JOIN merchant on users.id = users_id JOIN district on district.id = district_id JOIN area on area.id = area_id where users.id = ${userId};`
        );
        return foundUser;
    }

    //done
    async editMerProfile(merchantId: any, form: any) {
        const merchant: Prisma.MerchantUpdateInput = {
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

    // editProfile(form: any) {
    //     console.log(`update ${form} to merchant profile`);
    // }
    // ---------------------------------------------------------------------------------------------------------

    async getAllItem(merId: any) {
        const foundItem = await prisma.$queryRawUnsafe(
            `select item.id, stock_status, price, version, version_image, platform, product_name, end_date from item JOIN version on version.id = version_id JOIN product on product.id = product_id JOIN platform on platform.id = platform_id JOIN merchant on merchant.id = merchant_id where merchant.id = ${merId} AND availability = true ORDER BY item.id;`
        );
        return foundItem;
    }

    async getComment(merId: any) {
        const foundComment = await prisma.$queryRawUnsafe(
            `select consumer_name, rating, comment, create_time from feedback JOIN consumer on consumer.id = conumber_id where merchant_id = ${merId} ORDER BY create_time DESC;`
        );
        return foundComment;
    }

    //done

    async uploadItems(form: any, merchantId: number) {
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
        } catch (error) {
            console.error("Error creating item:", error);
            throw new Error("Failed to create item");
        }
    }

    // async uploadItems(merchantId: number, form:any) {
    //     console.log("yo itemData: ", itemData);

    //     const product = await prisma.product.findUnique({
    //         where: { id: productId },
    //     });

    //     if (!product) {
    //         throw new Error("Invalid product ID");
    //     }

    //     const versions = await prisma.version.findMany({
    //         where: { id: { in: versionIds } },
    //     });

    //     //有機會唔洗寫呢句
    //     if (versionIds.length !== versions.length) {
    //         throw new Error("Invalid version ID");
    //     }

    //     //重覆upload相同product and version
    //     // const existingItems = await prisma.item.findMany({
    //     //     where: {
    //     //         merchant_id: merchantId,
    //     //         product_id: productId,
    //     //         version_id: { in: versionIds },
    //     //     },
    //     // });

    //     // if (existingItems.length > 0) {
    //     //     throw new Error("該商家已經上傳相同的版本或產品");
    //     // }

    //     const items = [];
    //     for (const version of versions) {
    //         const item = await prisma.item.create({
    //             data: {
    //                 ...itemData,
    //                 merchant: { connect: { id: merchantId } },
    //                 version: { connect: { id: version.id } },
    //                 price: itemData.price,
    //                 end_date: new Date(itemData.end_date),
    //                 stock_status: itemData.stock_status,
    //                 availability: itemData.availability,
    //             },
    //         });
    //         items.push(item);
    //     }

    //     return { product, versions, items };
    // }

    // ---------------------------------------------------------------------------------------------------------
    async updateItems(itemId: any, form: any) {
        let itemInfo: Prisma.ItemUpdateInput = {
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

    async deleteItems(itemId: any) {
        let itemInfo: Prisma.ItemUpdateInput = {
            availability: false,
        };
        const userUpdate = await prisma.item.update({
            where: { id: Number(itemId) },
            data: itemInfo,
        });
        return true;
    }

    // ---------------------------------------------------------------------------------------------------------
    pairUserId(consumerid: string) {
        console.log(
            `find items by user id which is generate by code and published day`,
            consumerid
        );
    }

    // ---------------------------------------------------------------------------------------------------------
    paymentConfirm(result: any) {
        console.log(`change order status by ${result}`);
    }

    // ---------------------------------------------------------------------------------------------------------
    async getOrderRecord(merId: any) {
        const foundRecord = await prisma.$queryRawUnsafe(
            `select consumer_name, amount remain_payment, create_time, version, product_name from feedback JOIN consumer on consumer.id = conumber_id where merchant_id = ${merId} ORDER BY create_time DESC;`
        );
        return foundRecord;
    }
    //get all product
    async getAllProducts() {
        const getAllProducts = await prisma.product.findMany();
        return getAllProducts;
    }

    async getAllVersion() {
        const getAllVersion = await prisma.version.findMany();
        return getAllVersion;
    }
}
