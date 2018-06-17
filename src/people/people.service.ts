import { IHttpService, IPromise } from "angular";

export class PeopleService {

  static $inject: string[] = ['$http'];

  constructor(private $http: IHttpService) { }

  getAllPeople(): IPromise<any[]> {
    return this.$http.get<any[]>('data/people.json', { cache: true })
      .then(resp => resp.data);
  }

  getPerson(id: string): IPromise<{}> {
    return this.getAllPeople()
      .then((people: any[]) => people.find(person => person.id === id));
  }

}
