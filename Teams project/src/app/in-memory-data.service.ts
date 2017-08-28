import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Zero' },
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }

  createDbTwo() {
    const heroesTwo = [
      { id: 0,  name: 'Alan' },
      { id: 11, name: 'Bob' },
      { id: 12, name: 'Carlos' },
      { id: 13, name: 'Alex' },
      { id: 14, name: 'Sam' },
      { id: 15, name: 'Mike' },
      { id: 16, name: 'Brian' },
      { id: 17, name: 'David' },
      { id: 18, name: 'Drake' },
      { id: 19, name: 'Mario' },
      { id: 20, name: 'Tom' }
    ];
    return {heroesTwo};
  }
}
