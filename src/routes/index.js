import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import ManageUser from "../pages/member/mangeUser";
import MemberAction from "../pages/member/memberAction";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/manage-user" component={ManageUser} />
      <Route exact path="/member-action" component={MemberAction} />
    </Switch>
  </BrowserRouter>
);

export default Router;
