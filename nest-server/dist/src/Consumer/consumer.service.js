"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumerService = void 0;
const common_1 = require("@nestjs/common");
let ConsumerService = exports.ConsumerService = class ConsumerService {
    displayWishList() {
        console.log(`display wish list`);
    }
    uploadWishList(id) {
        console.log(`upload product by id`);
    }
    updateWishList(id) {
        console.log(`del product by id`);
    }
    creatOrder(itemID) {
        console.log(`upload items to `);
    }
    prePaymentConfirm(paymentStatus) {
        console.log(`confirm payment success or not if  change status`);
    }
    remainPaymentConfirm(paymentStatus) {
        console.log(`update to payed by case`);
    }
    getQrCodeId(userId) {
        console.log('get qrCode id by user id ');
    }
    editProfile(form) {
        console.log(`update profile by ${form}`);
    }
    feedback(merchantId, feedback) {
        console.log(`insert feedback`);
    }
    rating(merchantId, rating) {
        console.log(`inserting rating by merchantID`);
    }
};
exports.ConsumerService = ConsumerService = __decorate([
    (0, common_1.Injectable)()
], ConsumerService);
//# sourceMappingURL=consumer.service.js.map