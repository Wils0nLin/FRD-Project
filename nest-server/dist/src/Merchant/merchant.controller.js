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
exports.MerchantController = void 0;
const common_1 = require("@nestjs/common");
const merchant_service_1 = require("./merchant.service");
const public_service_1 = require("../Public/public.service");
let MerchantController = exports.MerchantController = class MerchantController {
    constructor(merchantService, publicService) {
        this.merchantService = merchantService;
        this.publicService = publicService;
    }
    async getSelfInfo(userId) {
        return await this.merchantService.getSelfInfo(userId);
    }
    async editMerProfile(merchantId, form) {
        return await this.merchantService.editMerProfile(merchantId, form);
    }
    async getAllItem(merId) {
        return await this.merchantService.getAllItem(merId);
    }
    async getComment(merId) {
        return await this.merchantService.getComment(merId);
    }
    async uploadItems(form) {
        console.log(form);
        try {
            const result = await this.merchantService.uploadItems(form);
            return { success: true, data: result };
        }
        catch (error) {
            console.log("itemData: ", error);
            return { success: false, error: error.message };
        }
    }
    updateItems(itemId, form) {
        return this.merchantService.updateItems(itemId, form);
    }
    deleteItems(itemId) {
        return this.merchantService.deleteItems(itemId);
    }
    async getPreOrderItem(merId) {
        return await this.merchantService.getPreOrderItem(merId);
    }
    async getPreOrderRecord(itemId) {
        return await this.merchantService.getPreOrderRecord(itemId);
    }
    async getOrderRecord(merId) {
        return await this.merchantService.getOrderRecord(merId);
    }
    async getTradeInfo(form) {
        return await this.merchantService.getTradeInfo(form);
    }
    async getOrderInfo(form) {
        return await this.merchantService.getOrderInfo(form);
    }
    async updateOrder(orderId) {
        return await this.merchantService.updateOrder(orderId);
    }
    getAllProducts() {
        return this.merchantService.getAllProducts();
    }
    getAllVersion() {
        return this.merchantService.getAllVersion();
    }
    getMerchantInfo() {
        return this.merchantService.getMerchantInfo();
    }
};
__decorate([
    (0, common_1.Get)("userInfo/:userId"),
    __param(0, (0, common_1.Param)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MerchantController.prototype, "getSelfInfo", null);
__decorate([
    (0, common_1.Put)("/profile/edit/:merchantId"),
    __param(0, (0, common_1.Param)("merchantId")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MerchantController.prototype, "editMerProfile", null);
__decorate([
    (0, common_1.Get)("allItem/:merId"),
    __param(0, (0, common_1.Param)("merId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MerchantController.prototype, "getAllItem", null);
__decorate([
    (0, common_1.Get)("comment/:merId"),
    __param(0, (0, common_1.Param)("merId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MerchantController.prototype, "getComment", null);
__decorate([
    (0, common_1.Post)("uploadItems"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MerchantController.prototype, "uploadItems", null);
__decorate([
    (0, common_1.Put)("update/:itemId"),
    __param(0, (0, common_1.Param)("itemId")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MerchantController.prototype, "updateItems", null);
__decorate([
    (0, common_1.Put)("delete/:itemId"),
    __param(0, (0, common_1.Param)("itemId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MerchantController.prototype, "deleteItems", null);
__decorate([
    (0, common_1.Get)("preOrderItem/:merId"),
    __param(0, (0, common_1.Param)("merId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MerchantController.prototype, "getPreOrderItem", null);
__decorate([
    (0, common_1.Get)("preOrderRecord/:itemId"),
    __param(0, (0, common_1.Param)("itemId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MerchantController.prototype, "getPreOrderRecord", null);
__decorate([
    (0, common_1.Get)("orderRecord/:merId"),
    __param(0, (0, common_1.Param)("merId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MerchantController.prototype, "getOrderRecord", null);
__decorate([
    (0, common_1.Post)("tradeInfo/"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MerchantController.prototype, "getTradeInfo", null);
__decorate([
    (0, common_1.Post)("orderInfo/"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MerchantController.prototype, "getOrderInfo", null);
__decorate([
    (0, common_1.Put)("updateOrder/:orderId"),
    __param(0, (0, common_1.Param)("orderId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MerchantController.prototype, "updateOrder", null);
__decorate([
    (0, common_1.Get)("product"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MerchantController.prototype, "getAllProducts", null);
__decorate([
    (0, common_1.Get)("product/version"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MerchantController.prototype, "getAllVersion", null);
__decorate([
    (0, common_1.Get)(":merchantId"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MerchantController.prototype, "getMerchantInfo", null);
exports.MerchantController = MerchantController = __decorate([
    (0, common_1.Controller)("merchant"),
    __metadata("design:paramtypes", [merchant_service_1.MerchantService,
        public_service_1.PublicService])
], MerchantController);
//# sourceMappingURL=merchant.controller.js.map