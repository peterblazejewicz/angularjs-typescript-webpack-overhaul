import { IHttpService, IPromise } from 'angular';

import { Person } from '../common/model/person';

export class PeopleService {
  static $inject: string[] = ['$http'];

  constructor(private $http: IHttpService) { }

  getAllPeople(): IPromise<Person[]> {
    return this.$http
      .get<Person[]>('data/people.json', { cache: true })
      .then(resp => resp.data);
  }

  getPerson(id: string): IPromise<Person> {
    return this.getAllPeople().then((people: any[]) =>
      people.find(person => person.id === id),
    );
  }
}
