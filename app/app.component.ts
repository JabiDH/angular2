import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>Id: </label>{{hero.id}}</div>
    <div>
        <label>Name: </label>
        <input [(ngModel)]="hero.name" placeholder="name">
    </div>
  `
})

export class AppComponent { 
    title = 'Tour of Heroes';
    hero: Hero = {
        id: 1,
        name: 'Gabi'
    };
}

export class Hero{
    id: number;
    name: string;
}
