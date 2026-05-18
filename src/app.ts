import { ProjectInput } from "./components/project_input";
import { ProjectList } from "./components/project_list";

class App {
  constructor() {
    this.initApp();
  }

  private initApp() {
    this.initProjectInput();
    this.initProjectLists();
  }

  private initProjectInput() {
    new ProjectInput();
  }

  private initProjectLists() {
    new ProjectList("active");
    new ProjectList("finished");
  }
}

new App();
