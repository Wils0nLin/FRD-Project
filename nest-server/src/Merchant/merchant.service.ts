import { Body, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { Prisma, PrismaClient, Users } from "@prisma/client";

const prisma = new PrismaClient();
@Injectable()
export class MerchantService {
    //done
    async editMerProfile(merchantId: any, form: any) {
        const district_id = 1;
        const bank_acc_id = 1;
        const merchant: Prisma.MerchantUpdateInput = {
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

    // editProfile(form: any) {
    //     console.log(`update ${form} to merchant profile`);
    // }
    // ---------------------------------------------------------------------------------------------------------
    //done
    async uploadItems(merchantId: number, productId: number, versionIds: number[], itemData: any) {
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

        //有機會唔洗寫呢句
        if (versionIds.length !== versions.length) {
            throw new Error("Invalid version ID");
        }

        //重覆upload相同product and version
        // const existingItems = await prisma.item.findMany({
        //     where: {
        //         merchant_id: merchantId,
        //         product_id: productId,
        //         version_id: { in: versionIds },
        //     },
        // });

        // if (existingItems.length > 0) {
        //     throw new Error("該商家已經上傳相同的版本或產品");
        // }

        const items = [];
        for (const version of versions) {
            const item = await prisma.item.create({
                data: {
                    ...itemData,
                    merchant: { connect: { id: merchantId } },
                    version: { connect: { id: version.id } },
                    original_price: itemData.original_price,
                    newest_price: itemData.newest_price,
                    //暫時硬打end_date
                    end_date: new Date("2023-07-01T00:00:00Z"),
                    stock_status: itemData.stock_status,
                    availability: itemData.availability,
                },
            });
            items.push(item);
        }

        return { product, versions, items };
    }

    // ---------------------------------------------------------------------------------------------------------
    updateItems(form: any) {
        //更改item資料時要睇埋會唔會去到合乎客戶嘅wishlist set嘅價格位置
        console.log(
            `update item by body and also running query to get all values with all consumer in wish list sees is there have matches of consumer wishes`,
            form
        );
    }

    // ---------------------------------------------------------------------------------------------------------
    //需要兩個function，分別一個係接收外部pass入黎嘅form，一個係對item status進行更改
    //done
    async changeItemStatus(itemId: number, stock_status: any) {
        const changeItemStatus = await prisma.item.update({
            where: { id: Number(itemId) },
            data: { stock_status: stock_status },
        });
        return changeItemStatus;
        // console.log(`update item status `, form);
    }
    //handle stock status function
    handleChangeStatus(formData: any) {
        const { itemId, stockStatus } = formData;
        if (stockStatus) {
            const changeStatus = this.changeItemStatus(itemId, stockStatus);
            return changeStatus;
        }
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
}
