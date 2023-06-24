/*
  Warnings:

  - The `merchant_image` column on the `merchant` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `biz_registration` column on the `merchant` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "merchant" DROP COLUMN "merchant_image",
ADD COLUMN     "merchant_image" BYTEA NOT NULL DEFAULT '\x',
DROP COLUMN "biz_registration",
ADD COLUMN     "biz_registration" BYTEA NOT NULL DEFAULT '\x';
