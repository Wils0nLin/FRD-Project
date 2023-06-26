/*
  Warnings:

  - You are about to drop the `hot` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `hot` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "hot" DROP CONSTRAINT "hot_product_id_fkey";

-- AlterTable
ALTER TABLE "product" ADD COLUMN     "hot" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "hot";
