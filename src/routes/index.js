import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/home";

//product-menu
import ManageProduct from "../pages/productManage/manageProduct";
import ProductLists from "../pages/productManage/productLists";

//member-menu
import MemberActivity from "../pages/member/memberActivity";
import ManageUser from "../pages/member/manageUser";
import AddNewUser from "../pages/member/manageUser/addNewUser";
import UserInfo from "../pages/member/manageUser/userInfo";
import ManageAdmin from "../pages/member/manageAdmin";

//edit-menu
import EditPage from "../pages/editPage";
import Banner from "../pages/editPage/banner";
import BlogManage from "../pages/editPage/blogManage";
import ManageBlogPage from "../pages/editPage/blogManage/manage";

//order-menu
import OrderTracking from "../pages/orderManage/orderTracking";
import OrderManagement from "../pages/orderManage/orderManagement";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/product-lists" component={ProductLists} />
      <Route exact path="/member-activity" component={MemberActivity} />
      <Route exact path="/manage-user" component={ManageUser} />
      <Route exact path="/add-user" component={AddNewUser} />
      <Route exact path="/edit-user" component={AddNewUser} />
      <Route exact path="/user-info" component={UserInfo} />
      <Route exact path="/manage-admin" component={ManageAdmin} />
      <Route exact path="/edit-page" component={EditPage} />
      <Route exact path="/banner-manage" component={Banner} />
      <Route exact path="/blog-manage" component={BlogManage} />
      <Route exact path="/blog-manage/edit-blog" component={ManageBlogPage} />
      <Route exact path="/blog-manage/add-blog" component={ManageBlogPage} />
      <Route exact path="/order-tracking" component={OrderTracking} />
      <Route exact path="/order-management" component={OrderManagement} />
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
