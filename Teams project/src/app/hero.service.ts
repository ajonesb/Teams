import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: Http) { }//inject http

  // This function here gets heroes from in-memory-data.service.ts to show them on Team 1 
  getHeroes(): Promise<Hero[]> { //get returns an observable 
    return this.http.get(this.heroesUrl)
      .toPromise()//converted to promise, imported from rxjs
      .then(response => response.json().data as Hero[])//convert to js object, heroe array
      .catch(this.handleError); 
      /*At the end of getHeroes(), you catch server failures and pass them to an error handler. */ 
  }

  //delete function to delete heroes for teams list on Team 1
  delete(numero: number): Promise<void> {
    const url = `${this.heroesUrl}/${numero}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  // this function here creates the new heroe to add to list on Team 1
  create(name: string): Promise<Hero> {//creates new heroe
//return the heroe with heroe url, stringify object we get, since not whole object..
//create object and tell it it's a name, add http headers to allow client and server to pass additional info.
    return this.http.post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()//will be observable then converte to promise
      .then(res => res.json().data as Hero)//return response back to add to array
      .catch(this.handleError);
  }

  //error handing
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

