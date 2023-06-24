/*
  Warnings:

  - You are about to drop the column `QRcode` on the `orders` table. All the data in the column will be lost.
  - The `product_image` column on the `product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `consumer_qrcode` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "QRcode",
ADD COLUMN     "consumer_qrcode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "product" DROP COLUMN "product_image",
ADD COLUMN     "product_image" BYTEA NOT NULL DEFAULT '\x';
