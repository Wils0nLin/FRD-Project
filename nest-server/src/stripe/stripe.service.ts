import { Injectable } from "@nestjs/common";
import Stripe from "stripe";
@Injectable()
export class StripeService {
    private stripe;
    constructor() {
        this.stripe = new Stripe( 'sk_test_51NDJbNBdCj5k61bSa3ebxyw4ckrdTJIl6HE2lHtZJPKqwHBvQVMTtpKfLhHkBJeJYMsiOS0TrxlUapNRYRsx68rU00P6BOJji3', { apiVersion: "2022-11-15" });
    }
    checkout(cart: any) {
        const totalPrice = cart.price;
        return this.stripe.paymentIntents.create({
            amount: 100 * 100,
            currency: "hkd",
            automatic_payment_methods: {
                enabled: true,
              },
        });
    }
}
