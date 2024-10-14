import BaseController from "./base";

class HomeController extends BaseController {
  constructor() {
    super();
  }

  indexAction() {
    this.root.innerHTML = `
      <a href="/login">Login</a>
      <a href="/pasok">Pasok</a>
    `;
  }

  loginAction() {
    this.root.innerHTML = `
      <form action="#" method="POST">
        <h1>Login</h1>
      </form>
    `
  }
}

export default HomeController;

