import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroapiService } from './heroapi.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})



export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private heroapiService: HeroapiService,
    private router: Router) {

  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(
      heroes => this.heroes = heroes
    );
  }
  getAllHeroes(): void {
    this.heroapiService.getHeroes().subscribe(
      heroes => {        
        this.heroes = heroes
        console.log(heroes);
      },
      err => {
        console.log('heroes : ' + this.heroes);
        console.log('heroes.component.ts -> getAllHeroes() -> ' + err);
      }
    );
  }
  getHeroesSlowly(): void {
    this.heroService.getHeroes().then(
      heroes => this.heroes = heroes
    );
  }
  ngOnInit(): void {
    this.getAllHeroes();
    //this.search('car');
  }
  gotoDetail(): void {
    let link = ['/detail', this.selectedHero.Id];
    this.router.navigate(link);
  }
  add(name: string) {
    name = name.trim();
    if (!name) { return; }
    if (this.heroes.find(h => h.Name == name)) { alert("Hero is already exist!"); return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      })
  }
  delete(hero: Hero): void {
    this.heroService.delete(hero.Id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) {
          this.selectedHero = null;
        }
      });
  }
  search(term: string) {
     this.heroapiService.search(term).subscribe(
       res => console.log(res),
       err => console.log(err)       
     );
  }
}

