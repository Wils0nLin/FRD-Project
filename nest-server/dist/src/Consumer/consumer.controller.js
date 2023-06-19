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
const guard_1 = require("../Public/guard");
const decorator_1 = require("../Public/decorator");
let ConsumerController = exports.ConsumerController = class ConsumerController {
    constructor(consumerService, publicService) {
        this.consumerService = consumerService;
        this.publicService = publicService;
    }
    async getSelfInfo(userId) {
        return await this.consumerService.getSelfInfo(userId);
    }
    getQrCodeId(JWTpayload) {
        return this.consumerService.getQrCodeId(JWTpayload);
    }
    async uploadWishList(formData) {
        let consumerId = 2;
        let productId = 2;
        let versionId = 1;
        try {
            const { targetPrice, notification } = formData;
            const uploadWishList = await this.consumerService.uploadWishList(consumerId, productId, versionId, targetPrice, notification);
            return { success: true, data: uploadWishList };
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
    async deleteWishList(requestData) {
        const consumerId = 1;
        const productId = 1;
        const versionId = 1;
        try {
            const deleteWishList = await this.consumerService.deleteWishList(consumerId, productId, versionId);
            return { success: true, data: deleteWishList };
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
    displayOrder(JWTpayload) {
        return this.publicService.displayOrder(JWTpayload);
    }
    displayOrderHistory(JWTpayload) {
        return this.publicService.displayOrderHistory(JWTpayload);
    }
    createOrder(param) {
        return this.consumerService.createOrder(param.itemId);
    }
    paymentConfirm(paymentstatus) {
        return this.consumerService.paymentConfirm(paymentstatus);
    }
    async editConProfile(consumerId, form) {
        return await this.consumerService.editConProfile(consumerId, form);
    }
    feedback(reaction) {
        let merchantId = 1;
        let consumerId = 1;
        return this.consumerService.feedback(reaction.comment, reaction.rating, merchantId, consumerId);
    }
};
__decorate([
    (0, common_1.Get)("userInfo"),
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    __param(0, (0, decorator_1.GetUser)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ConsumerController.prototype, "getSelfInfo", null);
__decorate([
    (0, common_1.Get)("qrcode"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConsumerController.prototype, "getQrCodeId", null);
__decorate([
    (0, common_1.Post)("wishlist/upload"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConsumerController.prototype, "uploadWishList", null);
__decorate([
    (0, common_1.Delete)("wishlist/delete/"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConsumerController.prototype, "deleteWishList", null);
__decorate([
    (0, common_1.Get)("order"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConsumerController.prototype, "displayOrder", null);
__decorate([
    (0, common_1.Get)("order/history"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConsumerController.prototype, "displayOrderHistory", null);
__decorate([
    (0, common_1.Post)("order/create/"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConsumerController.prototype, "createOrder", null);
__decorate([
    (0, common_1.Post)("order/payment"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConsumerController.prototype, "paymentConfirm", null);
__decorate([
    (0, common_1.Put)("profile/edit/:consumerId"),
    __param(0, (0, common_1.Param)("consumerId")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ConsumerController.prototype, "editConProfile", null);
__decorate([
    (0, common_1.Post)("reaction/feedback/"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConsumerController.prototype, "feedback", null);
exports.ConsumerController = ConsumerController = __decorate([
    (0, common_1.Controller)("consumer"),
    __metadata("design:paramtypes", [consumer_service_1.ConsumerService,
        public_service_1.PublicService])
], ConsumerController);
//# sourceMappingURL=consumer.controller.js.map