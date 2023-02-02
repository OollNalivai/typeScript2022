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
function Uni(name) {
    console.log(`Инициализация: ${name}`);
    return function () {
        console.log(`Вызов: ${name}`);
    };
}
let MyClass = class MyClass {
    constructor(_) {
    }
    method0(_) { }
    static method1(_) { }
};
__decorate([
    Uni("Свойство"),
    __metadata("design:type", Object)
], MyClass.prototype, "props0", void 0);
__decorate([
    Uni("Метод"),
    __param(0, Uni("Параметр метода")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MyClass.prototype, "method0", null);
__decorate([
    Uni("Свойство static"),
    __metadata("design:type", Object)
], MyClass, "props1", void 0);
__decorate([
    Uni("Метод static"),
    __param(0, Uni("Параметр метода static")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MyClass, "method1", null);
MyClass = __decorate([
    Uni("Класс"),
    __param(0, Uni("Параметр конструктора")),
    __metadata("design:paramtypes", [Object])
], MyClass);
