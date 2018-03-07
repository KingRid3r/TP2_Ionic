var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { monnaiePage } from ;
import 'rxjs/add/operator/map';
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.http.get('https://api.coinmarketcap.com/v1/ticker/')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.monnaie = data;
        });
    }
    AboutPage.prototype.rafraichirListe = function (refresher) {
        var _this = this;
        this.http.get('https://api.coinmarketcap.com/v1/ticker/')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.monnaie = data;
        });
        refresher.complete();
    };
    AboutPage.prototype.selectMonnaie = function (monnaie) {
        var infos = this.modalCtrl.create(monnaiePage, { userId: monnaie });
        infos.present();
    };
    AboutPage = __decorate([
        Component({
            selector: 'page-about',
            templateUrl: 'about.html'
        }),
        __metadata("design:paramtypes", [NavController, Http])
    ], AboutPage);
    return AboutPage;
}());
export { AboutPage };
//# sourceMappingURL=about.js.map