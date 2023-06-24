/*
  Warnings:

  - You are about to drop the column `consumer_QRcode` on the `orders` table. All the data in the column will be lost.
  - Added the required column `consumer_qrcode` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "consumer_QRcode",
ADD COLUMN     "consumer_qrcode" TEXT NOT NULL;
