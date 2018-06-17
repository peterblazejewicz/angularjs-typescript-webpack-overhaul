import { IHttpService, IPromise } from "angular";

export class PeopleService {

  static $inject: string[] = ['$http'];

  constructor(private $http: IHttpService) { }

  getAllPeople(): IPromise<{}> {
    return this.$http.get('data/people.json', { cache: true })
      .then(resp => resp.data);
  }

  getPerson(id: string) {
    return this.getAllPeople()
      .then((people: any[]) => people
        .find(man => man.id === id)[0]);
  }

}
