/*
  Warnings:

  - Added the required column `notification` to the `wishlist_product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "wishlist_product" ADD COLUMN     "notification" BOOLEAN NOT NULL;
