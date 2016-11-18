import { Injectable } from '@angular/core';

//import { HEROES } from './mock-heroes';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {
    /*getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }*/
    private headers = new Headers({ 'Content-Type': 'application/json' });
    heroesUrl = '';
    constructor(private http: Http) {
        this.heroesUrl = 'app/heroes';
    }
    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getHeroes());
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.Id === id));
    }

    handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.Id}`;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero>{
        return this.http
            .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(result => result.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void>{
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
                        .toPromise()
                        .then(() => null)
                        .catch(this.handleError);
    }
}