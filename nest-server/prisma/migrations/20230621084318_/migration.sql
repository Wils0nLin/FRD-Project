/*
  Warnings:

  - You are about to drop the `order` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `end_date` on table `item` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "order" DROP CONSTRAINT "order_item_id_fkey";

-- AlterTable
ALTER TABLE "feedback" ALTER COLUMN "create_time" DROP DEFAULT,
ALTER COLUMN "create_time" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "item" ALTER COLUMN "end_date" SET NOT NULL,
ALTER COLUMN "end_date" DROP DEFAULT,
ALTER COLUMN "end_date" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "product" ALTER COLUMN "release_date" DROP DEFAULT,
ALTER COLUMN "release_date" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "order";

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "consumer_QRcode" TEXT NOT NULL,
    "item_id" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "order_status" BOOLEAN NOT NULL,
    "payment" BOOLEAN NOT NULL,
    "create_time" TEXT NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
