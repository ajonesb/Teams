import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero }                from './hero';
import { HeroService }         from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router) { }

  getHeroes(): void {
    this.heroService
        .getHeroes()
        .then(heroes => this.heroes = heroes);
  }

  //implementing add method from add on heroes.component.html
  add(name: string): void { //pass in name of string from input
    name = name.trim();//trim to clear additional spaces after adding name
    if (!name) { return; }//if name does not exist
    this.heroService.create(name) //creates name to add to web api 
      .then(hero => {//then get heroe back, will put it in heroes array
        this.heroes.push(hero);//pushes heroe to add to page
        this.selectedHero = null; //clears selected heroe.
      });
  }
//implementing delete funcionality of heroe
  delete(hero: Hero): void {
    this.heroService.delete(hero.numero)//call the heroe service, then delete, and pass heroe numero (used to be id)
    .then(() => {
      this.heroes = this.heroes.filter(h => h !== hero);//filter will remove if it's not heroe
      if (this.selectedHero === hero) { this.selectedHero = null; }
      //if selected heroe and deleted, need to null selected heroe.
      //otherwise will give an error since selected heroe does not exist.
    });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  /* gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  } */
}
