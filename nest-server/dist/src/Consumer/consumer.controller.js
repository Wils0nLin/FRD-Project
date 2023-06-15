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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumerController = void 0;
const common_1 = require("@nestjs/common");
const consumer_service_1 = require("./consumer.service");
const public_service_1 = require("../Public/public.service");
let ConsumerController = exports.ConsumerController = class ConsumerController {
    constructor(consumerService, publicService) {
        this.consumerService = consumerService;
        this.publicService = publicService;
    }
    getQrCodeId(JWTpayload) {
        return this.consumerService.getQrCodeId(JWTpayload);
    }
    displayWishList() {
        return this.consumerService.displayWishList();
    }
    uploadWishList(parm) {
        return this.consumerService.uploadWishList(parm.id);
    }
    updateWishList(parm) {
        return this.consumerService.updateWishList(parm.id);
    }
    displayOrder(JWTpayload) {
        return this.publicService.displayOrder(JWTpayload);
    }
    displayOrderHistory(JWTpayload) {
        return this.publicService.displayOrderHistory(JWTpayload);
    }
    createOrder(param) {
        return this.consumerService.creatOrder(param.itemId);
    }
    prePaymentConfirm(paymentstatus) {
        return this.consumerService.prePaymentConfirm(paymentstatus);
    }
    remainPaymentConfirm(paymentstatus) {
        return this.consumerService.remainPaymentConfirm(paymentstatus);
    }
    editProfile(form) {
        return this.consumerService.editProfile(form);
    }
    feedback(reaction) {
        return this.consumerService.feedback(reaction.feedback, reaction.merchantId);
    }
    rating(reaction) {
        return this.consumerService.feedback(reaction.rating, reaction.merchantId);
    }
};
__decorate([
    (0, common_1.Get)('qrcode'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConsumerController.prototype, "getQrCodeId", null);
__decorate([
    (0, common_1.Get)('wishlist'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConsumerController.prototype, "displayWishList", null);
__decorate([
    (0, common_1.Post)('wishlist/upload/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConsumerController.prototype, "uploadWishList", null);
__decorate([
    (0, common_1.Post)('wishlist/update/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConsumerController.prototype, "updateWishList", null);
__decorate([
    (0, common_1.Get)('order'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConsumerController.prototype, "displayOrder", null);
__decorate([
    (0, common_1.Get)('order/history'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConsumerController.prototype, "displayOrderHistory", null);
__decorate([
    (0, common_1.Post)('order/create/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConsumerController.prototype, "createOrder", null);
__decorate([
    (0, common_1.Post)('order/pre/payment'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConsumerController.prototype, "prePaymentConfirm", null);
__decorate([
    (0, common_1.Post)('order/remain/payment'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConsumerController.prototype, "remainPaymentConfirm", null);
__decorate([
    (0, common_1.Post)('profile/edit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConsumerController.prototype, "editProfile", null);
__decorate([
    (0, common_1.Post)('reaction/feedback/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConsumerController.prototype, "feedback", null);
__decorate([
    (0, common_1.Post)('reaction/rating/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConsumerController.prototype, "rating", null);
exports.ConsumerController = ConsumerController = __decorate([
    (0, common_1.Controller)('consumer'),
    __metadata("design:paramtypes", [consumer_service_1.ConsumerService,
        public_service_1.PublicService])
], ConsumerController);
//# sourceMappingURL=consumer.controller.js.map