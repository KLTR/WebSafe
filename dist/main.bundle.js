webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/alerts/alerts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alerts {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    height: 60vh;\r\n    overflow-y: scroll;\r\n    padding: 10px 0;\r\n    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, .25);\r\n    margin-top: 4rem;\r\n}\r\n\r\n.example-card {\r\n    /* background-color: #395761; */\r\n    width: 100%;\r\n    /* color: white; */\r\n    border-bottom: 1px solid rgba(0, 0, 0, .12);\r\n}\r\n\r\n.header-image {\r\n    background-size: cover;\r\n}\r\n\r\n.default-image {\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/default_user.png") + ");\r\n}\r\n\r\n.reddit {\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/reddit.png") + ");\r\n}\r\n\r\n.twitter {\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/twitter.png") + ");\r\n}\r\n\r\n.subtext {\r\n    /* color: rgb(218, 221, 221) */\r\n}\r\n\r\n.social-icon {\r\n    background-size: cover;\r\n    width: 40px;\r\n    height: 40px;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n}\r\n\r\n.conf {\r\n    padding: 5px;\r\n    color: white;\r\n    margin: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alerts/alerts.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div *ngIf=\"alerts ; else loading\" class=\"alerts bg-info text-white\">\n    <h1 style=\"text-align:center;\">Active Alerts - {{alerts.length}}</h1>\n\n    <mat-card class=\"example-card\" *ngFor=\"let alert of alerts\">\n        <mat-card-header>\n            <div *ngIf=\"alert.img_url\" mat-card-avatar [ngStyle]=\"{'background-image': 'url(' + alert.img_url + ')'}\" class=\"header-image\"></div>\n            <div *ngIf=\"!alert.img_url\" mat-card-avatar class=\"header-image default-image\"></div>\n            <mat-card-title>{{alert.display_name}}, {{alert.network}}\n                <div mat-card-avatar class=\"social-icon {{alert.network}}\"></div>\n            </mat-card-title>\n            <mat-card-subtitle>{{alert.time_created}} {{alert.user_location}}</mat-card-subtitle>\n        </mat-card-header>\n        <!-- <img  mat-card-image src={{alert.img_url}} alt=\"Photo of a Shiba Inu\"> -->\n        <mat-card-content>\n            <p class=\"subtext\">\n                \"{{alert.content}}\"\n            </p>\n        </mat-card-content>\n        <mat-card-actions>\n            <button mat-button class=\"subtext\" [disabled]=\"!alert.link_to_post\" (click)=\"navigate(alert.link_to_post)\">Original Post</button>\n            <button mat-button class=\"subtext\" (click)=\"deleteAlert(alert.post_id)\">Delete</button>\n            <p [ngClass]=\"{'bg-danger':alert.confidence > 70, 'bg-warning':alert.confidence < 70 && alert.confidence > 10,'bg-info':alert.confidence < 10}\" class=\"conf\">Confidence : {{alert.confidence}}</p>\n        </mat-card-actions>\n    </mat-card>\n\n</div>\n\n<ng-template #loading>Loading&hellip;</ng-template>"

/***/ }),

/***/ "../../../../../src/app/alerts/alerts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertsComponent = /** @class */ (function () {
    // Create an instance of the DataService through dependency injection
    function AlertsComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.dataService.getAlerts().subscribe(function (alerts) {
            _this.alerts = alerts;
            console.log(_this.alerts);
        });
    }
    AlertsComponent.prototype.ngOnInit = function () {
    };
    AlertsComponent.prototype.navigate = function (url) {
        window.open(url, "_blank");
    };
    AlertsComponent.prototype.deleteAlert = function (alertId) {
        console.log(alertId);
        this.dataService.deleteAlert(alertId);
    };
    AlertsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-alerts',
            template: __webpack_require__("../../../../../src/app/alerts/alerts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/alerts/alerts.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
    ], AlertsComponent);
    return AlertsComponent;
    var _a;
}());

//# sourceMappingURL=alerts.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-dashboard>\n</app-dashboard>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import the DataService
var AppComponent = /** @class */ (function () {
    // Define a users property to hold our user data
    // Create an instance of the DataService through dependency injection
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__alerts_alerts_component__ = __webpack_require__("../../../../../src/app/alerts/alerts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__statistic_statistic_component__ = __webpack_require__("../../../../../src/app/statistic/statistic.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// firebase






// Angular material



var appRoutes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__["a" /* DashboardComponent */] },
];
__WEBPACK_IMPORTED_MODULE_4_firebase__["initializeApp"](__WEBPACK_IMPORTED_MODULE_7__environments_environment_prod__["a" /* environment */].firebase);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__alerts_alerts_component__["a" /* AlertsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__statistic_statistic_component__["a" /* StatisticComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_environment_prod__["a" /* environment */].firebase, 'angularfs'),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["d" /* MatGridListModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Dashboard</h1>\n<div class=\"container\">\n    <div class=\"row\">\n        <app-statistic></app-statistic>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-6 col-sm-12\">\n            <app-alerts></app-alerts>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(db) {
        this.db = db;
        this.alerts = null;
        this.alert = null;
        this.alerts = db.list('alerts', function (ref) { return ref.orderByChild('order'); }).valueChanges();
    }
    DataService.prototype.getAlerts = function () {
        return this.alerts;
    };
    DataService.prototype.deleteAlert = function (alertId) {
        var alertRef = this.db.object("alerts/" + alertId);
        console.log(alertRef);
        alertRef.remove();
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], DataService);
    return DataService;
    var _a;
}());

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/statistic/statistic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.card {\r\n    margin: 2px;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/statistic/statistic.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Statistic row</h1>\n\n<div class=\"flex\">\n    <div class=\"card text-white bg-primary col-md-4 col-sm-4\">\n        <div class=\"card-header\">Statistic 1</div>\n        <div class=\"card-body\">\n            <h4 class=\"card-title\">Primary card title</h4>\n            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        </div>\n    </div>\n    <div class=\"card text-white bg-primary col-md-4 col-sm-4\">\n        <div class=\"card-header\">Statistic 2</div>\n        <div class=\"card-body\">\n            <h4 class=\"card-title\">Primary card title</h4>\n            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        </div>\n    </div>\n    <div class=\"card text-white bg-primary col-md-4 col-sm-4\">\n        <div class=\"card-header\">Statistic 3</div>\n        <div class=\"card-body\">\n            <h4 class=\"card-title\">Primary card title</h4>\n            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        </div>\n    </div>\n    <div class=\"card text-white bg-primary col-md-4 col-sm-4\">\n        <div class=\"card-header\">Statistic 4</div>\n        <div class=\"card-body\">\n            <h4 class=\"card-title\">Primary card title</h4>\n            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/statistic/statistic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatisticComponent = /** @class */ (function () {
    function StatisticComponent() {
    }
    StatisticComponent.prototype.ngOnInit = function () {
    };
    StatisticComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-statistic',
            template: __webpack_require__("../../../../../src/app/statistic/statistic.component.html"),
            styles: [__webpack_require__("../../../../../src/app/statistic/statistic.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatisticComponent);
    return StatisticComponent;
}());

//# sourceMappingURL=statistic.component.js.map

/***/ }),

/***/ "../../../../../src/assets/images/default_user.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "default_user.ba8328c080f0ef9cd8b0.png";

/***/ }),

/***/ "../../../../../src/assets/images/reddit.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "reddit.8622073fbc769ecf5420.png";

/***/ }),

/***/ "../../../../../src/assets/images/twitter.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "twitter.7580c858dd965c5c4966.png";

/***/ }),

/***/ "../../../../../src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyAK9iQqatyi5RIK1GZ2TGLL4rFa0ibTo5Q",
        authDomain: "websafe-bef72.firebaseapp.com",
        databaseURL: "https://websafe-bef72.firebaseio.com",
        projectId: "websafe-bef72",
        storageBucket: "websafe-bef72.appspot.com",
        messagingSenderId: "954840199739"
    }
};
//# sourceMappingURL=environment.prod.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAK9iQqatyi5RIK1GZ2TGLL4rFa0ibTo5Q",
        authDomain: "websafe-bef72.firebaseapp.com",
        databaseURL: "https://websafe-bef72.firebaseio.com",
        projectId: "websafe-bef72",
        storageBucket: "websafe-bef72.appspot.com",
        messagingSenderId: "954840199739"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map