select json_agg(AmountOfOrders),json_agg(NumberOfOrders),full_name,create_time,consumer_name
from (
        select consumer.id,
            consumer_name,
            create_time,
            json_agg(product_name || ' ' || version) AS full_name,
            COUNT(orders.id) AS NumberOfOrders,
            SUM(orders.amount) AS AmountOfOrders
        from orders
            JOIN consumer ON consumer.id = consumer_id
            JOIN item on item.id = item_id
            JOIN version ON version.id = version_id
            JOIN product ON product.id = product_id
        WHERE merchant_id = 2
            AND order_status = false
        GROUP BY orders.create_time,
            consumer.id,
            product_name,
            version
        ORDER BY create_time DESC
    ) AS n GROUP BY n.full_name;