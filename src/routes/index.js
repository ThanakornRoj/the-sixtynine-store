import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/home";

import ProductLists from "../pages/productManage/productLists";
import ManageUser from "../pages/member/mangeUser";
import MemberAction from "../pages/member/memberAction";
import ManageAdmin from "../pages/member/menageAdmin";
import EditPage from "../pages/editPage";
import BlogManage from "../pages/editPage/blogManage";
import ManageBlogPage from "../pages/editPage/blogManage/manage";
import OrderTracking from "../pages/orderManage/orderTracking";
import ManageProduct from "../pages/productManage/manageProduct";


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/product-lists" component={ProductLists} />
      <Route exact path="/manage-user" component={ManageUser} />
      <Route exact path="/member-action" component={MemberAction} />
      <Route exact path="/manage-admin" component={ManageAdmin} />
      <Route exact path="/edit-page" component={EditPage} />
      <Route exact path="/blog-manage" component={BlogManage} />
      <Route exact path="/blog-manage/edit-blog" component={ManageBlogPage} />
      <Route exact path="/blog-manage/add-blog" component={ManageBlogPage} />
      <Route exact path="/order-tracking" component={OrderTracking} />
      <Route exact path="/add-product" component={ManageProduct} />
      <Route
        exact
        path="/product-lists/edit-product"
        component={ManageProduct}
      />
    </Switch>
  </BrowserRouter>
);

export default Router;
