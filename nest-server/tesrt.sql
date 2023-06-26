select n.merchant_name, n.district, n.area from(select merchant.merchant_name, district.district, area.area from merchant join district on merchant.district_id = district.id join area on district.area_id = area.id) as n where merchant_name like '%2%' or district like '%荃%' or area like '%新%';

select n.product_id,n.versionId,product_name,product_status,product_image,release_date,product_intro,view,platform_id,version,version_image from (select product.id as productId,version.id as versionId,* from product join version on version.product_id = product.id) as n where version like '%朱%' or product_name like '%寶%' ; 




SELECT p.id AS product_id, p.product_name, p.product_status, p.product_image, p.release_date, p.product_intro, p.view, p.platform_id,
       v.id AS version_id, v.version, v.version_image
FROM product AS p
JOIN version AS v ON v.product_id = p.id
WHERE p.id = 2
  AND v.id = 4;

select * from users join merchant on users.id = merchant.users_id where users.id = 4


select * from wishlist_product join product on product.id = wishlist_product.product_id join consumer on consumer.id = wishlist_product.consumer_id join users on users.id = consumer.users_id where users.id = 2

select wishlist_product.id as wpid , * from wishlist_product join product on product.id = wishlist_product.product_id join consumer on consumer.id = wishlist_product.consumer_id join users on users.id = consumer.users_id where users.id = 2