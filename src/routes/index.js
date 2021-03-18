import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/home";

import ProductLists from "../pages/productManage/productLists";
import ManageUser from "../pages/member/mangeUser";
import MemberAction from "../pages/member/memberAction";
import ManageAdmin from "../pages/member/menageAdmin";
import OrderTracking from "../pages/orderManage/orderTracking";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/product-lists" component={ProductLists} />
      <Route exact path="/manage-user" component={ManageUser} />
      <Route exact path="/member-action" component={MemberAction} />
      <Route exact path="/manage-admin" component={ManageAdmin} />
      <Route exact path="/order-tracking" component={OrderTracking} />
    </Switch>
  </BrowserRouter>
);

export default Router;
