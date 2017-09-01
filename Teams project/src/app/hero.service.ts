import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: Http) { }//inject http

  getHeroes(): Promise<Hero[]> { //get returns an observable 
    return this.http.get(this.heroesUrl)
               .toPromise()//converted to promise, imported from rxjs
               .then(response => response.json().data as Hero[])//convert to js object, heroe array
               .catch(this.handleError); 
               /*At the end of getHeroes(), you catch server failures and pass them to an error handler. */ 
  }

 /*  get specific heroe detail to show, not needed to add and delete heroes. 
 getHero(numero: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${numero}`;//string interpolation to get specific hero
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  } */

  delete(numero: number): Promise<void> {
    const url = `${this.heroesUrl}/${numero}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.numero}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

