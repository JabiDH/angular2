import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

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
      private router: Router){
        
    }
    onSelect(hero : Hero){
        this.selectedHero = hero;
    }
    getHeroes(): void{
        this.heroService.getHeroes().then(
          heroes => this.heroes = heroes 
        );
    }
    getHeroesSlowly(): void{
      this.heroService.getHeroesSlowly().then(
          heroes => this.heroes = heroes 
        );
    }
    ngOnInit(): void{
        this.getHeroes();
    }
    gotoDetail(): void{
      let link = ['/detail', this.selectedHero.id];
      this.router.navigate(link);
    }
    add(name: string){
      name = name.trim();
      if(!name) {return;}
      if(this.heroes.find(h => h.name == name)){alert("Hero is already exist!"); return;}
      this.heroService.create(name)
        .then(hero => {
          this.heroes.push(hero);
          this.selectedHero = null;
        })
    }
    delete(hero: Hero): void{
      this.heroService.delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if(this.selectedHero === hero){
          this.selectedHero = null;
        }
        });                
    }
}

