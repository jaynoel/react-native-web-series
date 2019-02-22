"use strict";
//----------------
// RouterStore.ts
// holds mobx context for <Router />, which navigates to current page
// mobx state embedded in react context object defined/created in RootStore.ts
// ClassMembers include:
//    - @observable.screen
//----------------
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// load mbox for observable state members
var mobx_1 = require("mobx");
// define class & observable properties,
// setup pointer back to rootContext via mobx store reference injected into construtor
var RouterStore = /** @class */ (function () {
    function RouterStore(rootStore) {
        this.screen = "WorkoutHistory";
        this.rootStore = rootStore;
    }
    __decorate([
        mobx_1.observable
    ], RouterStore.prototype, "screen", void 0);
    return RouterStore;
}());
exports.RouterStore = RouterStore;
