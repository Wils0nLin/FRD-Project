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
exports.PublicController = void 0;
const common_1 = require("@nestjs/common");
const public_service_1 = require("./public.service");
let PublicController = exports.PublicController = class PublicController {
    constructor(publicService) {
        this.publicService = publicService;
    }
    async conRegister(form) {
        const result = await this.publicService.Register(form, "consumer");
        return result;
    }
    async merRegister(form) {
        return await this.publicService.Register(form, "merchant");
    }
    selectArea() {
        return this.publicService.selectArea();
    }
    selectDistrict() {
        const area_id = 1;
        return this.publicService.selectDistrict(area_id);
    }
    bank() {
        return this.publicService.bank();
    }
    branch() {
        const bank_id = 1;
        return this.publicService.branch(bank_id);
    }
    bank_acc() {
        const branch_id = 1;
        return this.publicService.bankAcc(branch_id);
    }
    login(userLoginInfo) {
        return this.publicService.login(userLoginInfo);
    }
    hot() {
        return this.publicService.hot();
    }
    comingSoon() {
        return this.publicService.comingSoon();
    }
    displayTag() {
        return this.publicService.displayTag();
    }
    tagFilter(tag) {
        return this.publicService.tagFilter(tag);
    }
    displayPlatform() {
        return this.publicService.displayPlatform();
    }
    search(search) {
        return this.publicService.search(search);
    }
    version(productid, versionId) {
        return this.publicService.version(productid, versionId);
    }
    district(productid, versionId, district) {
        return this.publicService.district(productid, versionId, district);
    }
    area(productid, versionId, area) {
        return this.publicService.area(productid, versionId, area);
    }
    priceDesc(productid, versionId) {
        return this.publicService.priceDesc(productid, versionId);
    }
    priceAsec(productid, versionId) {
        return this.publicService.priceDesc(productid, versionId);
    }
    ratingDesc(productid, versionId) {
        return this.publicService.ratingDesc(productid, versionId);
    }
    ratingAsce(productid, versionId) {
        return this.publicService.ratingAsce(productid, versionId);
    }
    searchItem(productid, versionId, string) {
        return this.publicService.searchItem(productid, versionId, string);
    }
};
__decorate([
    (0, common_1.Post)("register/conRegister"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PublicController.prototype, "conRegister", null);
__decorate([
    (0, common_1.Post)("register/merRegister"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PublicController.prototype, "merRegister", null);
__decorate([
    (0, common_1.Get)("register/selectArea"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "selectArea", null);
__decorate([
    (0, common_1.Get)("register/selectDistrict"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "selectDistrict", null);
__decorate([
    (0, common_1.Get)("register/bank"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "bank", null);
__decorate([
    (0, common_1.Get)("register/branch"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "branch", null);
__decorate([
    (0, common_1.Get)("register/bank_acc"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "bank_acc", null);
__decorate([
    (0, common_1.Get)("login"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "login", null);
__decorate([
    (0, common_1.Get)("homepage/hot"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "hot", null);
__decorate([
    (0, common_1.Get)("homepage/comingsoon"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "comingSoon", null);
__decorate([
    (0, common_1.Get)("home/tag"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "displayTag", null);
__decorate([
    (0, common_1.Get)("filter/tag"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "tagFilter", null);
__decorate([
    (0, common_1.Get)("home/platform"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "displayPlatform", null);
__decorate([
    (0, common_1.Get)("filter/search"),
    __param(0, (0, common_1.Query)("search")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "search", null);
__decorate([
    (0, common_1.Get)("filter/version"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "version", null);
__decorate([
    (0, common_1.Get)("filter/version/district"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "district", null);
__decorate([
    (0, common_1.Get)("filter/version/area"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "area", null);
__decorate([
    (0, common_1.Get)("filter/version/pricedesc"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "priceDesc", null);
__decorate([
    (0, common_1.Get)("filter/version/priceasce"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "priceAsec", null);
__decorate([
    (0, common_1.Get)("filter/version/ratingdesc"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "ratingDesc", null);
__decorate([
    (0, common_1.Get)("filter/version/ratingasce"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "ratingAsce", null);
__decorate([
    (0, common_1.Get)("filter/version/search"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Array]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "searchItem", null);
exports.PublicController = PublicController = __decorate([
    (0, common_1.Controller)("public"),
    __metadata("design:paramtypes", [public_service_1.PublicService])
], PublicController);
//# sourceMappingURL=public.controller.js.map