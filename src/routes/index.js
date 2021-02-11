import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import ProductLists from "../pages/productManage/productLists";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/product-lists" component={ProductLists} />
    </Switch>
  </BrowserRouter>
);

export default Router;
