import HomeController from "./controllers/home";
import PageNotFound from "./controllers/pageNotFound";
import { Router } from "./core/router"

const router = new Router();

const homeController = new HomeController();
const pageNotFoundController = new PageNotFound();

router.add('/', homeController.indexAction.bind(homeController));
router.add('/login', homeController.loginAction.bind(homeController));

router.setDefault(pageNotFoundController.indexAction.bind(pageNotFoundController));

router.handleRouteChanges();

