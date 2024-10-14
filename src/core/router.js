class Router {
  routes = {}

  constructor() {
    this.defaultCb = () => { };
  }

  add(path, cb) {
    this.routes[`${path}`] = cb;
  }

  get(path) {
    return this.routes[`${path}`] || this.defaultCb;
  }

  setDefault(cb) {
    this.defaultCb = cb;
  }

  handleRouteChanges() {
    window.addEventListener('popstate', (event) => {
      this.get(window.location.pathname)()
    });

    const observer = new MutationObserver((mutationList, observer) => {
      mutationList.forEach((mutation) => {
        mutation?.addedNodes?.forEach(e => {
          if (e.nodeName.toLowerCase() === 'a') {
            e.addEventListener('click', (e) => {
              e.preventDefault();
              history.pushState({}, "", e.target.href);
              this.get(window.location.pathname)();
            })
          }
        })
      })
    });

    observer.observe(document, { attributes: true, childList: true, subtree: true });

    this.get(window.location.pathname)();
  }
}

export {
  Router,
}
