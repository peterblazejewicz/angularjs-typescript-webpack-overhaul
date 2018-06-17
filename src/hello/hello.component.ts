import { IComponentOptions, IController } from "angular";

class HelloController implements IController {

  greeting: string = 'hello';

  toggleGreeting() {
    this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello';
  }

}

export const HelloComponent: IComponentOptions = {
  templateUrl: './hello.template.html',
  controller: HelloController,
  bindings: {
    greeting: '<',
  }
}
