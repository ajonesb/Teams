import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { numero: 0,  name: 'Zero' },
      { numero: 11, name: 'Mr. Nice' },
      { numero: 12, name: 'Narco' },
      { numero: 13, name: 'Bombasto' },
      { numero: 14, name: 'Celeritas' },
      { numero: 15, name: 'Magneta' },
      { numero: 16, name: 'RubberMan' },
      { numero: 17, name: 'Dynama' },
      { numero: 18, name: 'Dr IQ' },
      { numero: 19, name: 'Magma' },
      { numero: 20, name: 'Tornado' }
    ];
    return {heroes};
  }

  createDbTwo() {
    const heroes = [
      { numero: 0,  name: 'Alan' },
      { numero: 11, name: 'Bob' },
      { numero: 12, name: 'Carlos' },
      { numero: 13, name: 'Alex' },
      { numero: 14, name: 'Sam' },
      { numero: 15, name: 'Mike' },
      { numero: 16, name: 'Brian' },
      { numero: 17, name: 'Davnumero' },
      { numero: 18, name: 'Drake' },
      { numero: 19, name: 'Mario' },
      { numero: 20, name: 'Tom' }
    ];
    return {heroes};
  }
}
