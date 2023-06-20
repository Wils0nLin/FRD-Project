/*
  Warnings:

  - Changed the type of `merchant_image` on the `merchant` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `biz_registration` on the `merchant` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "merchant" DROP COLUMN "merchant_image",
ADD COLUMN     "merchant_image" BYTEA NOT NULL,
DROP COLUMN "biz_registration",
ADD COLUMN     "biz_registration" BYTEA NOT NULL;
