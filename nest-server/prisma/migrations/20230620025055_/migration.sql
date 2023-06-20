/*
  Warnings:

  - You are about to drop the column `bank_acc_id` on the `merchant` table. All the data in the column will be lost.
  - You are about to drop the `bank_acc` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bank_account` to the `merchant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `branch_id` to the `merchant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "bank_acc" DROP CONSTRAINT "bank_acc_branch_id_fkey";

-- DropForeignKey
ALTER TABLE "merchant" DROP CONSTRAINT "merchant_bank_acc_id_fkey";

-- AlterTable
ALTER TABLE "merchant" DROP COLUMN "bank_acc_id",
ADD COLUMN     "bank_account" TEXT NOT NULL,
ADD COLUMN     "branch_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "bank_acc";

-- AddForeignKey
ALTER TABLE "merchant" ADD CONSTRAINT "merchant_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "branch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
