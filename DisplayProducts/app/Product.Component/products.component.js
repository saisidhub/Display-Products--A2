/// <reference path="../services/products.services.ts" />
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
var core_1 = require("@angular/core");
var products_services_1 = require("../services/products.services");
var ProductsComponent = (function () {
    function ProductsComponent(_productService) {
        this._productService = _productService;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.getallproducts();
    };
    ProductsComponent.prototype.getallproducts = function () {
        var _this = this;
        this._productService.getallproducts().subscribe(function (response) { return _this.products = response; }, function (error) { return console.error(error); }, function () { return console.info(_this.products); });
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    core_1.Component({
        selector: 'of-product',
        templateUrl: './app/product.component/products.component.html',
        styleUrls: ['./app/product.component/products.component.css'],
        providers: [products_services_1.ProductService]
    }),
    __metadata("design:paramtypes", [products_services_1.ProductService])
], ProductsComponent);
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map