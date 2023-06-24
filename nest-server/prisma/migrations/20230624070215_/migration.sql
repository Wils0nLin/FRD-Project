/*
  Warnings:

  - You are about to drop the column `notification` on the `wishlist_product` table. All the data in the column will be lost.
  - You are about to drop the column `target_price` on the `wishlist_product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "wishlist_product" DROP COLUMN "notification",
DROP COLUMN "target_price";
