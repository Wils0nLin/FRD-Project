/*
  Warnings:

  - You are about to drop the column `newest_price` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `original_price` on the `item` table. All the data in the column will be lost.
  - Added the required column `price` to the `item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "item" DROP COLUMN "newest_price",
DROP COLUMN "original_price",
ADD COLUMN     "price" INTEGER NOT NULL;
