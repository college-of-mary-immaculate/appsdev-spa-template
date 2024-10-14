class Router {
  routes = [];

  constructor() {
    this.defaultRoute = {
      key: "*",
      callback: () => { },
    };
  }

  add(path, cb) {
    this.routes.push({
      key: path,
      callback: cb,
    });
  }

  get(path) {
    const route = this.routes.find(r => (r.key instanceof RegExp && r.key.test(path)) || r.key === path);
    return route || this.defaultRoute;
  }

  execute(path) {
    const route = this.get(path);
    route?.callback();
  }

  setDefault(cb) {
    this.defaultRoute = {
      key: "*",
      callback: cb,
    };
  }

  handleRouteChanges() {
    window.addEventListener('popstate', (event) => {
      this.execute(window.location.pathname);
    });

    const observer = new MutationObserver((mutationList, observer) => {
      mutationList.forEach((mutation) => {
        mutation?.addedNodes?.forEach(e => {
          if (e.nodeName.toLowerCase() === 'a') {
            e.addEventListener('click', (e) => {
              e.preventDefault();
              history.pushState({}, "", e.target.href);
              this.execute(window.location.pathname);
            })
          }
        })
      })
    });

    observer.observe(document, { attributes: true, childList: true, subtree: true });

    this.execute(window.location.pathname);
  }
}

export {
  Router,
}
