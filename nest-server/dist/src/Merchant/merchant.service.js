"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchantService = void 0;
const common_1 = require("@nestjs/common");
let MerchantService = exports.MerchantService = class MerchantService {
    editProfile(form) {
        console.log(`update ${form} to merchant profile`);
    }
    upLoadItems(form) {
        console.log(`post item by body`, form);
    }
    updateItems(form) {
        console.log(`update item by body and also running query to get all values with all consumer in wish list sees is there have matches of consumer wishes`, form);
    }
    changeItemStatus(form) {
        console.log(`update item status `, form);
    }
    pairUserId(consumerid) {
        console.log(`find items by user id which is generate by code and published day`, consumerid);
    }
    paymentConfirm(result) {
        console.log(`change order status by ${result}`);
    }
};
exports.MerchantService = MerchantService = __decorate([
    (0, common_1.Injectable)()
], MerchantService);
//# sourceMappingURL=merchant.service.js.map