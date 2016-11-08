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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
// Import RxJs required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var HeroapiService = (function () {
    function HeroapiService(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
        this.heroapiUrl = '';
        this.heroapiUrl = "http://localhost:62064/api/heroes/";
        //this.headers = new Headers();
        //this.headers.append('Content-Type', 'application/json');
        //this.headers.append('Access-Control-Allow-Origin', '*');
    }
    HeroapiService.prototype.getHeroes = function () {
        var headers = new http_1.Headers({
            contentType: 'application/json',
            dataType: 'jsonp',
        });
        var options = new http_1.RequestOptions({ headers: headers, method: 'GET' });
        console.log("getHeroes - start");
        var params = new http_1.URLSearchParams();
        params.set('callback', 'JSONP_CALLBACK');
        var callbackOptions = new http_1.RequestOptions({ search: params, method: 'GET' });
        return this.jsonp
            .request(this.heroapiUrl, callbackOptions)
            .map(function (response) { return response.json().data; })
            .catch(function (err) {
            console.log(err);
            return Rx_1.Observable.throw(err.json().error || 'Server Error');
        });
    };
    HeroapiService.prototype.search = function (term) {
        var wikiUrl = 'http://en.wikipedia.org/w/api.php';
        wikiUrl = 'http://localhost:62064/api/values/';
        var params = new http_1.URLSearchParams();
        params.set('search', term); // the user's search value
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        // TODO: Add error handling
        return this.jsonp
            .get(wikiUrl, { search: params })
            .map(function (response) { return response.json()[1]; });
    };
    HeroapiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, http_1.Jsonp])
    ], HeroapiService);
    return HeroapiService;
}());
exports.HeroapiService = HeroapiService;
//# sourceMappingURL=heroapi.service.js.map