import { IComponentOptions, IController } from 'angular';

class PeopleController implements IController {}

export const PeopleComponent: IComponentOptions = {
  bindings: {
    people: '<',
  },
  controller: PeopleController,
  templateUrl: './people.template.html',
};
