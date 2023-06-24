import { Body, Controller, Post } from "@nestjs/common";
import { StripeService } from "./stripe.service";

@Controller("stripe")
export class StripeController {
    constructor(private stripeService:StripeService) {}

    @Post("payments/intents")
    checkOut(@Body() body: any) {
        try {
            console.log(body)
            return this.stripeService.checkout(body)
        } catch (error) {
            return error
        }
    }
}
