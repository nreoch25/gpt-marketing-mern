import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";

// require.ensure polyfill for node
if (typeof require.ensure !== "function") {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

if (process.env.NODE_ENV !== "production") {
  // Require async routes only in development for react-hot-reloader to work.
  require("./components/Index");
  require("./components/Upload");
  require("./components/Inventory");
}

export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require("./components/Index").default);
        });
      }}
    />
    <Route
      path="upload"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require("./components/Upload").default);
        });
      }}
    />
    <Route
      path="inventory"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require("./components/Inventory").default);
        });
      }}
    />
  </Route>
);
