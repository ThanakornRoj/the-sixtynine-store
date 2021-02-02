import React from 'react';
import { Button, Radio } from 'antd';
import MainLayout from '../../layouts/mainLayout';
import HeaderDashBoard from '../../components/header';
import SaleDetail from './salesDetailSection';


import {
  ButtonFilter,
  Container,
  ContentContainer,
  HeaderSection,
} from './style';

const Home = () => {
  return (
    <MainLayout>
      <Container>
        <HeaderSection>
          <HeaderDashBoard text="summary" />
          <ButtonFilter>
            <Radio.Group defaultValue="all">
              <Radio.Button value="day">Day</Radio.Button>
              <Radio.Button value="Week">Week</Radio.Button>
              <Radio.Button value="month">Month</Radio.Button>
              <Radio.Button value="all">All</Radio.Button>
            </Radio.Group>
          </ButtonFilter>
        </HeaderSection>
        <ContentContainer>
          <SaleDetail />
        </ContentContainer>
      </Container>
    </MainLayout>
  );
};

export default Home;
