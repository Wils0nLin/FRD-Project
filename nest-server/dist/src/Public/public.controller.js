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
const platform_express_1 = require("@nestjs/platform-express");
let PublicController = exports.PublicController = class PublicController {
    constructor(publicService) {
        this.publicService = publicService;
    }
    async conRegister(form) {
        const result = await this.publicService.Register(form, "consumer", null);
        return result;
    }
    async merRegister(files, form) {
        console.log(form);
        return await this.publicService.Register(form, "merchant", files);
    }
    selectArea() {
        return this.publicService.selectArea();
    }
    selectDistrict() {
        return this.publicService.selectDistrict();
    }
    bank() {
        return this.publicService.bank();
    }
    branch() {
        return this.publicService.branch();
    }
    login(form) {
        console.log(form);
        return this.publicService.login(form);
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
    async tagFilter(tags) {
        console.log(tags);
        return this.publicService.tagFilter(tags);
    }
    displayPlatform() {
        return this.publicService.displayPlatform();
    }
    async platformFilter(platformName) {
        console.log(platformName);
        return await this.publicService.platformFilter(platformName);
    }
    async searchText(Texts) {
        console.log(Texts);
        return this.publicService.searchText(Texts);
    }
    version(id) {
        console.log('i am version con', id);
        return this.publicService.searchVersion(id);
    }
    item(id) {
        console.log('i am item con', id);
        return this.publicService.searchItem(id);
    }
    district(productId, versionId, district) {
        productId = 2;
        return this.publicService.district(productId, versionId, district);
    }
    area(productId, versionId, area) {
        return this.publicService.area(productId, versionId, area);
    }
    priceDesc(productId, versionId) {
        return this.publicService.priceDesc(productId, versionId);
    }
    priceAsec(productId, versionId) {
        return this.publicService.priceAsec(productId, versionId);
    }
    ratingDesc(productId, versionId) {
        return this.publicService.ratingDesc(productId, versionId);
    }
    ratingAsce(productId, versionId) {
        return this.publicService.ratingAsce(productId, versionId);
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
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: "IconImg", maxCount: 1 },
        { name: "RegisImg", maxCount: 1 },
    ])),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
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
    (0, common_1.Post)("login"),
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
    (0, common_1.Get)("filter/tag/:tags"),
    __param(0, (0, common_1.Param)("tags")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PublicController.prototype, "tagFilter", null);
__decorate([
    (0, common_1.Get)("home/platform"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "displayPlatform", null);
__decorate([
    (0, common_1.Get)("filter/platform/:platformName"),
    __param(0, (0, common_1.Param)("platformName")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PublicController.prototype, "platformFilter", null);
__decorate([
    (0, common_1.Get)("filter/search/:Texts"),
    __param(0, (0, common_1.Param)("Texts")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PublicController.prototype, "searchText", null);
__decorate([
    (0, common_1.Get)("/filter/versions/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "version", null);
__decorate([
    (0, common_1.Get)("/filter/Items/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "item", null);
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
exports.PublicController = PublicController = __decorate([
    (0, common_1.Controller)("public"),
    __metadata("design:paramtypes", [public_service_1.PublicService])
], PublicController);
//# sourceMappingURL=public.controller.js.map