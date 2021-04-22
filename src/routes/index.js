import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/home";

import ProductLists from "../pages/productManage/productLists";
import MemberActivity from "../pages/member/memberActivity";
import ManageUser from "../pages/member/manageUser";
import AddNewUser from "../pages/member/manageUser/addNewUser";
import UserInfo from "../pages/member/manageUser/userInfo";
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
      <Route exact path="/member-activity" component={MemberActivity} />
      <Route exact path="/manage-user" component={ManageUser} />
      <Route exact path="/add-user" component={AddNewUser} />
      <Route exact path="/user-info" component={UserInfo} />
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
