import Stripe from "stripe";
export declare class StripeService {
    private stripe;
    constructor();
    checkout(cart: any): Promise<Stripe.Response<Stripe.PaymentIntent>>;
}
