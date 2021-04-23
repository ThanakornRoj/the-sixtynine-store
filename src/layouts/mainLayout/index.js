import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Badge } from "antd";
import { useLocation } from "react-router-dom";

import Logo from "../../icons/logo.svg";

import {
  CompanyBanner,
  CompanyName,
  DashBoard,
  HeaderContent,
  MainLayoutContainer,
} from "./style";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const MainLayout = ({ children }) => {
  let keyMenu = children?.type?.name ?? "dashboard";
  let subKeyMenu = children?.type?.name ?? "";
  const location = useLocation();

  if (location.pathname === "/member-activity") {
    keyMenu = children?.type?.name ?? "memberActivity";
  } else if (
    location.pathname === "/manage-user" ||
    location.pathname === "/add-user" ||
    location.pathname === "/edit-user" ||
    location.pathname === "/user-info"
  ) {
    keyMenu = children?.type?.name ?? "manageUser";
  } else if (location.pathname === "/manage-admin") {
    keyMenu = children?.type?.name ?? "memberAdmin";
  } else if (location.pathname === "/edit-page") {
    keyMenu = children?.type?.name ?? "pageLists";
  } else if (
    location.pathname === "/blog-manage" ||
    location.pathname === "/blog-manage/edit-blog" ||
    location.pathname === "/blog-manage/add-blog"
  ) {
    keyMenu = children?.type?.name ?? "blog";
  } else if (location.pathname === "/order-tracking") {
    keyMenu = children?.type?.name ?? "orderTracking";
  } else if (
    location.pathname === "/product-lists" ||
    location.pathname === "/product-lists/edit-product"
  ) {
    keyMenu = children?.type?.name ?? "productLists";
  } else if (location.pathname === "/add-product") {
    keyMenu = children?.type?.name ?? "addProduct";
  }

  if (
    location.pathname === "/member-activity" ||
    location.pathname === "/manage-user" ||
    location.pathname === "/manage-admin" ||
    location.pathname === "/user-info" ||
    location.pathname === "/edit-user" ||
    location.pathname === "/add-user"
  ) {
    subKeyMenu = children?.type?.name ?? "memberManage";
  }
  if (
    location.pathname === "/edit-page" ||
    location.pathname === "/blog-manage" ||
    location.pathname === "/blog-manage/edit-blog" ||
    location.pathname === "/blog-manage/add-blog"
  ) {
    subKeyMenu = children?.type?.name ?? "Edit";
  }

  if (location.pathname === "/order-tracking") {
    subKeyMenu = children?.type?.name ?? "order";
  }
  if (
    location.pathname === "/product-lists" ||
    location.pathname === "/product-lists/edit-product" ||
    location.pathname === "/add-product"
  ) {
    subKeyMenu = children?.type?.name ?? "manageProduct";
  }

  return (
    <MainLayoutContainer>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider width={250}>
          <CompanyBanner>
            <img src={Logo} alt="" />
            <CompanyName>sixtynine store</CompanyName>
            <DashBoard>dashboard</DashBoard>
          </CompanyBanner>
          <Menu
            theme="dark"
            defaultSelectedKeys={[keyMenu]}
            defaultOpenKeys={[subKeyMenu]}
            mode="inline"
          >
            <Menu.Item key="dashboard">
              <Link to="/" />
              dashboard
            </Menu.Item>

            <SubMenu key="order" title="Order">
              <Menu.Item key="orderTracking">
                <Link to="/order-tracking" />
                Order
              </Menu.Item>
              <Menu.Item key="orderManage">Order Management</Menu.Item>
              <Menu.Item key="report">Report</Menu.Item>
            </SubMenu>

            <SubMenu key="Edit" title="edit page">
              <Menu.Item key="pageLists">
                <Link to="/edit-page" />
                page list
              </Menu.Item>
              <Menu.Item key="blog">
                <Link to="/blog-manage" />
                Blog
              </Menu.Item>
              <Menu.Item key="banner">Banner</Menu.Item>
            </SubMenu>

            <SubMenu key="manageProduct" title="product">
              <Menu.Item key="productLists">
                <Link to="/product-lists" />
                product lists
              </Menu.Item>
              <Menu.Item key="addProduct">
                <Link to="/add-product" />
                add product
              </Menu.Item>
              <Menu.Item key="categories">Categories</Menu.Item>
            </SubMenu>

            <SubMenu key="memberManage" title="member">
              <Menu.Item key="memberActivity">
                <Link to="/member-activity" />
                member activity
              </Menu.Item>
              <Menu.Item key="manageUser">
                <Link to="/manage-user" />
                manage user
              </Menu.Item>
              <Menu.Item key="memberAdmin">
                <Link to="/manage-admin" />
                manager admin
              </Menu.Item>
            </SubMenu>

            <Menu.Item key="10" className="last-menu">
              reporting
            </Menu.Item>

            <Menu.Item key="11" className="log-out">
              Log out
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ padding: "22px 32px" }}>
            <HeaderContent>
              <Badge dot={true}>
                <svg
                  width="18"
                  height="21"
                  viewBox="0 0 18 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.0758854 15.5021C0.0256001 15.623 -0.000189449 15.7527 0 15.8836V16.8805C0 17.1449 0.105358 17.3984 0.292894 17.5854C0.480431 17.7723 0.734784 17.8773 1 17.8773H17C17.2652 17.8773 17.5196 17.7723 17.7071 17.5854C17.8946 17.3984 18 17.1449 18 16.8805V15.8836C18.0002 15.7527 17.9744 15.623 17.9241 15.5021C17.8738 15.3811 17.8 15.2713 17.707 15.1788L16 13.4772V8.90563C16 5.69874 13.815 2.99727 10.855 2.18483C10.562 1.44915 9.846 0.930786 9 0.930786C8.154 0.930786 7.438 1.44915 7.145 2.18483C4.185 2.99826 2 5.69874 2 8.90563V13.4772L0.293001 15.1788C0.199958 15.2713 0.126171 15.3811 0.0758854 15.5021ZM0.0758854 15.5021L0.906929 15.8475C0.902314 15.8587 0.899983 15.8705 0.9 15.8823L0.900002 15.8836L0.900001 16.8805C0.900001 16.9052 0.909846 16.9296 0.928288 16.948C0.946823 16.9664 0.972563 16.9773 1 16.9773H17C17.0274 16.9773 17.0532 16.9664 17.0717 16.948C17.0902 16.9296 17.1 16.9052 17.1 16.8805V15.8836V15.8823C17.1 15.8705 17.0977 15.8586 17.0931 15.8475C17.0885 15.8364 17.0816 15.8262 17.0728 15.8174L17.0716 15.8162L15.3646 14.1146L15.1 13.8508V13.4772V8.90563C15.1 6.11858 13.2001 3.76178 10.6168 3.05273L10.1847 2.93413L10.0189 2.51784C9.85808 2.11411 9.46643 1.83079 9 1.83079C8.53357 1.83079 8.14192 2.11411 7.98113 2.51784L7.81539 2.93397L7.38349 3.05266C4.79972 3.7627 2.9 6.11878 2.9 8.90563V13.4772V13.8508L2.63539 14.1146L0.928394 15.8162L0.927237 15.8174C0.918403 15.8262 0.911549 15.8364 0.90693 15.8475L0.0758854 15.5021ZM8.11782 19.7742H9.88218C9.60773 19.9015 9.30714 19.9683 9.00113 19.9679L8.99887 19.9679C8.69286 19.9683 8.39227 19.9015 8.11782 19.7742Z"
                    stroke="currentColor"
                    stroke-width="1.8"
                  />
                </svg>
              </Badge>
            </HeaderContent>
          </Header>
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </MainLayoutContainer>
  );
};
export default MainLayout;
