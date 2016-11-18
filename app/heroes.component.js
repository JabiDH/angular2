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
var router_1 = require('@angular/router');
var hero_service_1 = require('./hero.service');
var heroapi_service_1 = require('./heroapi.service');
var HeroesComponent = (function () {
    function HeroesComponent(heroService, heroapiService, router) {
        this.heroService = heroService;
        this.heroapiService = heroapiService;
        this.router = router;
    }
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.getAllHeroes = function () {
        var _this = this;
        this.heroapiService.getHeroes().subscribe(function (heroes) {
            _this.heroes = heroes;
            console.log(heroes);
        }, function (err) {
            console.log('heroes : ' + _this.heroes);
            console.log('heroes.component.ts -> getAllHeroes() -> ' + err);
        });
    };
    HeroesComponent.prototype.getHeroesSlowly = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getAllHeroes();
        //this.search('car');
    };
    HeroesComponent.prototype.gotoDetail = function () {
        var link = ['/detail', this.selectedHero.Id];
        this.router.navigate(link);
    };
    HeroesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        if (this.heroes.find(function (h) { return h.Name == name; })) {
            alert("Hero is already exist!");
            return;
        }
        this.heroService.create(name)
            .then(function (hero) {
            _this.heroes.push(hero);
            _this.selectedHero = null;
        });
    };
    HeroesComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService.delete(hero.Id)
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    HeroesComponent.prototype.search = function (term) {
        this.heroapiService.search(term).subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); });
    };
    HeroesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-heroes',
            templateUrl: 'heroes.component.html',
            styleUrls: ['heroes.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, heroapi_service_1.HeroapiService, router_1.Router])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map