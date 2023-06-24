/*
  Warnings:

  - You are about to drop the column `version_id` on the `wishlist_product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "wishlist_product" DROP CONSTRAINT "wishlist_product_version_id_fkey";

-- AlterTable
ALTER TABLE "wishlist_product" DROP COLUMN "version_id";
