/*
  Warnings:

  - You are about to drop the `order` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "order" DROP CONSTRAINT "order_item_id_fkey";

-- DropTable
DROP TABLE "order";

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "consumer_QRcode" TEXT NOT NULL,
    "item_id" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "order_status" BOOLEAN NOT NULL,
    "payment" INTEGER NOT NULL,
    "create_time" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
