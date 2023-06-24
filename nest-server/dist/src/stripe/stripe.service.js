"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeService = void 0;
const common_1 = require("@nestjs/common");
const stripe_1 = require("stripe");
let StripeService = exports.StripeService = class StripeService {
    constructor() {
        this.stripe = new stripe_1.default('sk_test_51NDJbNBdCj5k61bSa3ebxyw4ckrdTJIl6HE2lHtZJPKqwHBvQVMTtpKfLhHkBJeJYMsiOS0TrxlUapNRYRsx68rU00P6BOJji3', { apiVersion: "2022-11-15" });
    }
    checkout(cart) {
        const totalPrice = cart.price;
        return this.stripe.paymentIntents.create({
            amount: totalPrice * 100,
            currency: "hkd",
            automatic_payment_methods: {
                enabled: true,
            },
        });
    }
};
exports.StripeService = StripeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], StripeService);
//# sourceMappingURL=stripe.service.js.map