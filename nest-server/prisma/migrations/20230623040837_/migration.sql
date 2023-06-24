/*
  Warnings:

  - You are about to drop the column `consumer_QRcode` on the `orders` table. All the data in the column will be lost.
  - Made the column `end_date` on table `item` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `QRcode` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `consumer_id` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `payment` on the `orders` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "feedback" ALTER COLUMN "create_time" DROP DEFAULT,
ALTER COLUMN "create_time" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "item" ALTER COLUMN "end_date" SET NOT NULL,
ALTER COLUMN "end_date" DROP DEFAULT,
ALTER COLUMN "end_date" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "consumer_QRcode",
ADD COLUMN     "QRcode" TEXT NOT NULL,
ADD COLUMN     "consumer_id" INTEGER NOT NULL,
DROP COLUMN "payment",
ADD COLUMN     "payment" BOOLEAN NOT NULL,
ALTER COLUMN "create_time" DROP DEFAULT,
ALTER COLUMN "create_time" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "product" ALTER COLUMN "release_date" DROP DEFAULT,
ALTER COLUMN "release_date" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_consumer_id_fkey" FOREIGN KEY ("consumer_id") REFERENCES "consumer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
