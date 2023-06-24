/*
  Warnings:

  - You are about to drop the column `consumer_qrcode` on the `orders` table. All the data in the column will be lost.
  - Added the required column `QRcode` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `consumer_id` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "consumer_qrcode",
ADD COLUMN     "QRcode" TEXT NOT NULL,
ADD COLUMN     "consumer_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "product" ALTER COLUMN "product_image" DROP DEFAULT,
ALTER COLUMN "product_image" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_consumer_id_fkey" FOREIGN KEY ("consumer_id") REFERENCES "consumer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
