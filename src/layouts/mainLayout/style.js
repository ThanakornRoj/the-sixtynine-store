import styled from "@emotion/styled";

export const MainLayoutContainer = styled.div`
  position: relative;
  min-width: 1280px;
  z-index: 0;
  min-width: 1280px;

  .sub-menu-background {
    background: #02479b;
  }

  .ant-layout-header {
    background: #fff;
    box-shadow: 0px 0px 29px -15px rgba(0, 0, 0, 0.75);
    width: 87%;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
  }

  .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal)
    .ant-menu-item-selected {
    background-color: #02479b;
  }

  .ant-layout-sider {
    height: 100%;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    overflow-y: hidden;
  }

  .ant-layout-content {
    margin: 24px 32px;
    margin-top: 88px;
  }

  .ant-layout-sider-children {
    background: #035cc6;
  }

  .ant-layout.ant-layout-has-sider > .ant-layout {
    margin-left: 250px;
  }

  .ant-menu.ant-menu-dark,
  .ant-menu-dark .ant-menu-sub,
  .ant-menu.ant-menu-dark .ant-menu-sub {
    color: #fff;
    background: #035cc6;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    height: 81%;
    position: relative;
  }

  .ant-menu-item,
  .ant-menu-item-only-child {
    height: 55px;
    display: flex;
    align-items: center;
    color: #fff;
    border-color: #2973ca;
  }

  .ant-menu-dark.ant-menu-inline .ant-menu-item,
  .ant-menu-dark.ant-menu-inline .ant-menu-submenu-title {
    height: 55px;
    display: flex;
    align-items: center;
    border-top: 1px solid #2973ca;
  }

  .ant-menu-vertical .ant-menu-item,
  .ant-menu-vertical-left .ant-menu-item,
  .ant-menu-vertical-right .ant-menu-item,
  .ant-menu-inline .ant-menu-item,
  .ant-menu-vertical .ant-menu-submenu-title,
  .ant-menu-vertical-left .ant-menu-submenu-title,
  .ant-menu-vertical-right .ant-menu-submenu-title,
  .ant-menu-inline .ant-menu-submenu-title {
    margin: 0;
  }

  .log-out {
    position: absolute;
    bottom: 0;
    border-top: 1px solid #2973ca;
    border-bottom: 1px solid #2973ca;
  }

  .sub-menu-background {
    background: #02479b;
  }

  .last-menu {
    border: 1px solid #2973ca;
  }

  @media (max-height: 841px) {
    .log-out {
      bottom: 20px;
    }
  }

  @media (max-height: 700px) {
    .log-out {
      position: static;
      border-top: none;
    }
  }

  @media (max-height: 535px) {
    .ant-layout-sider {
      overflow-y: scroll;
    }

    .ant-layout-sider-children {
      min-height: 205vh;
    }
  }

  @media (max-height: 300px) {
    .ant-layout-sider-children {
      min-height: 280vh;
    }
  }
`;

export const CompanyBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  color: #fff;

  img {
    padding: 4px;
  }
`;

export const CompanyName = styled.h3`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 800;
  line-height: 19.07px;
  margin-bottom: 0;
  color: #fff;
`;

export const DashBoard = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  text-transform: uppercase;
  margin-top: 2px;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  .ant-badge-dot {
    width: 12px;
    min-width: 12px;
    height: 12px;
  }

  svg:hover {
    fill: #333333;
    transform: scale(1.1, 1.1);
  }
`;
