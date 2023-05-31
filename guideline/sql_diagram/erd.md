# ERD

```mermaid
erDiagram
    USER {
        id int
        username string
        password string
        admin boolean
        consumer boolean
        merchant boolean
    }
    MERCHANT {
        id int
        user_id int
        merchant_image string
        merchant_name string
        merchant_phone string
        merchant_email string
        bank_acc_id int
        opening_hour string
        announcement text
    }
    ADDRESS {
        id int
        merchant_id int
        district_id int
        address_detail string
    }
    DISTRICT {
        id int
        area_id int
        district string
    }
    AREA {
        id int
        area string
    }
    BANK_ACC {
        id int
        branch_id int
        account_number string
    }
    BRANCH {
        id int
        bank_id int
        branch_code int
        branch_name string
    }
    BANK {
        id int
        bank_code int
        bank_name string
    }
    PRODUCT {
        id int
        product_status boolean
        product_image string
        product_name string
        release_date date
        publisher string
        intro text
        availability boolean
    }
    TAG {
        id int
        tag string
    }
    PRODUCT_TAG {
        id int
        product_id int
        tag_id int
    }
    ITEM {
        id int
        product_id int
        address_id int
        version string
        price string
        stock_status string
        availability boolean
    }
    WISHLIST_MERCHANT {
        id int
        consumer_id int
        merchant_id int
    }
    WISHLIST_PRODUCT {
        id int
        consumer_id int
        product_id int
    }
    WISHLIST_ITEM {
        id int
        consumer_id int
        item_id int
    }
    ORDER {
        id int
        consumer_id int
        item_id int
        remain_payment int
    }
    CONSUMER {
        id int
        user_id int
        consumer_name string
        consumer_phone string
        consumer_email string
    }
    FEEDBACK {
        id int
        consumer_id int
        merchant_id int
        rating int
        comment text
        create_time date
    }
    AREA ||--O{ DISTRICT : "one to many"
    MERCHANT ||--O{ FEEDBACK : "one to many"
    ADDRESS ||--|| DISTRICT : "one to one"  
    ADDRESS ||--O{ ITEM : "one to many"
    BANK ||--O{ BRANCH : "one to many"
    BANK_ACC ||--|| BRANCH : "one to one"
    CONSUMER ||--O{ FEEDBACK : "one to many"
    CONSUMER ||--|| ORDER : "one to one"
    CONSUMER ||--|| WISHLIST_ITEM : "one to one"
    CONSUMER ||--|| WISHLIST_MERCHANT : "one to one"
    CONSUMER ||--|| WISHLIST_PRODUCT : "one to one"
    MERCHANT ||--O{ ADDRESS : "one to many"
    MERCHANT ||--|| BANK_ACC : "one to one"
    PRODUCT ||--|| PRODUCT_TAG : "one to one"
    PRODUCT ||--O{ ITEM : "one to many"
    PRODUCT_TAG ||--O{ TAG : "one to many"
    USER ||--O{ CONSUMER : "one to many"
    USER ||--O{ MERCHANT : "one to many"
    WISHLIST_ITEM ||--O{ ITEM : "one to many"
    WISHLIST_MERCHANT ||--O{ MERCHANT : "one to many"
    WISHLIST_PRODUCT ||--O{ PRODUCT : "one to many"
    ORDER ||--O{ ITEM : "one to many"
    
```
