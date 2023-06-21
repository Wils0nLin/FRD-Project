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
    async editMerProfile(merchantId, form) {
        return await this.merchantService.editMerProfile(merchantId, form);
    }
    async uploadItems(itemData) {
        const merchantId = 1;
        const productId = 2;
        const versionIds = [3, 4];
        try {
            const result = await this.merchantService.uploadItems(merchantId, productId, versionIds, itemData);
            return { success: true, data: result };
        }
        catch (error) {
            console.log("itemData: ", itemData);
            return { success: false, error: error.message };
        }
    }
    updateItems(form) {
        return this.merchantService.updateItems(form);
    }
    async changeItemStatus(itemId, formData) {
        try {
            const changeItemStatus = await this.merchantService.changeItemStatus(itemId, formData.stock_status);
            console.log(changeItemStatus);
            return { success: true, data: changeItemStatus };
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
    pairUserId(parms) {
        console.log(`scanning the consumer qr code will get the item by merchant id and consumer id `);
        return this.merchantService.pairUserId(parms.userId);
    }
    paymentConfirm(resultStatus) {
        console.log("get payment result by stripe any display success or not");
        return this.merchantService.paymentConfirm(resultStatus);
    }
    getAllProducts() {
        return this.merchantService.getAllProducts();
    }
};
__decorate([
    (0, common_1.Put)("/profile/edit/:merchantId"),
    __param(0, (0, common_1.Param)("merchantId")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MerchantController.prototype, "editMerProfile", null);
__decorate([
    (0, common_1.Post)("uploadItems"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MerchantController.prototype, "uploadItems", null);
__decorate([
    (0, common_1.Post)("update"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MerchantController.prototype, "updateItems", null);
__decorate([
    (0, common_1.Put)("changeStatus/:itemId"),
    __param(0, (0, common_1.Param)("itemId")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], MerchantController.prototype, "changeItemStatus", null);
__decorate([
    (0, common_1.Get)("scanner/:userId"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MerchantController.prototype, "pairUserId", null);
__decorate([
    (0, common_1.Post)("Result"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MerchantController.prototype, "paymentConfirm", null);
__decorate([
    (0, common_1.Get)("product"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MerchantController.prototype, "getAllProducts", null);
exports.MerchantController = MerchantController = __decorate([
    (0, common_1.Controller)("merchant"),
    __metadata("design:paramtypes", [merchant_service_1.MerchantService,
        public_service_1.PublicService])
], MerchantController);
//# sourceMappingURL=merchant.controller.js.map