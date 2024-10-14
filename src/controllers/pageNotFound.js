import BaseController from "./base";

class PageNotFound extends BaseController {
  constructor() {
    super();
  }

  indexAction() {
    this.root.innerHTML = "<h1>404 Page Not Found</h1>";
  }
}

export default PageNotFound;

