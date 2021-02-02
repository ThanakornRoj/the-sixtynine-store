import styled from '@emotion/styled';

export const MainLayoutContainer = styled.div`
   position: relative;
   z-index: 0;

   .ant-layout-header {
      background: #fff;
      box-shadow: 1px 1px 144px rgba(0, 0, 0, 0.04);
   }

   .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
      background-color: #1D7DF0;
   }
   
   .ant-layout-sider-children {
      background: #035CC6;
      
   }

   .ant-menu.ant-menu-dark, .ant-menu-dark .ant-menu-sub, .ant-menu.ant-menu-dark .ant-menu-sub {
      color: #fff;
      background: #035CC6;
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
`;