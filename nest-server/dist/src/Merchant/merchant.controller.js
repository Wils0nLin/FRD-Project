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
    editProfile(form) {
        return this.merchantService.editProfile(form);
    }
    upLoadItems(form) {
        return this.merchantService.upLoadItems(form);
    }
    updateItems(form) {
        return this.merchantService.updateItems(form);
    }
    changeItemStatus(form) {
        console.log(`change item status to 3 possible status "receiving pre-order","end of pre-order","in-stock",if start pre-order update period of time `);
        return this.merchantService.changeItemStatus(form);
    }
    pairUserId(parms) {
        console.log(`scanning the consumer qr code will get the item by merchant id and consumer id `);
        return this.merchantService.pairUserId(parms.userId);
    }
    paymentConfirm(resultStatus) {
        console.log('get payment result by stripe any display success or not');
        return this.merchantService.paymentConfirm(resultStatus);
    }
};
__decorate([
    (0, common_1.Post)('edit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MerchantController.prototype, "editProfile", null);
__decorate([
    (0, common_1.Post)('upload'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MerchantController.prototype, "upLoadItems", null);
__decorate([
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MerchantController.prototype, "updateItems", null);
__decorate([
    (0, common_1.Post)('changeStatus'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MerchantController.prototype, "changeItemStatus", null);
__decorate([
    (0, common_1.Get)('scanner/:userId'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MerchantController.prototype, "pairUserId", null);
__decorate([
    (0, common_1.Post)('Result'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MerchantController.prototype, "paymentConfirm", null);
exports.MerchantController = MerchantController = __decorate([
    (0, common_1.Controller)('merchant'),
    __metadata("design:paramtypes", [merchant_service_1.MerchantService,
        public_service_1.PublicService])
], MerchantController);
//# sourceMappingURL=merchant.controller.js.map