-- AddForeignKey
ALTER TABLE "wishlist_product" ADD CONSTRAINT "wishlist_product_version_id_fkey" FOREIGN KEY ("version_id") REFERENCES "version"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
