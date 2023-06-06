/*
  Warnings:

  - Added the required column `tag_id` to the `product_tag` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "product_tag" ADD COLUMN     "tag_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "product_tag" ADD CONSTRAINT "product_tag_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
