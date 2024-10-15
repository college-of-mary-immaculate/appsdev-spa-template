import Home from './pages/home'
import PageNotFound from './pages/pageNotFound';
import SPA from './core/spa';

const app = new SPA({
  root: document.getElementById('app'),
  defaultRoute: PageNotFound,
});

app.add('/', Home);
app.handleRouteChanges();

