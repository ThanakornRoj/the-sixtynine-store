import React from "react";
import { DatePicker, Radio } from "antd";
import moment from "moment";
import MainLayout from "../../layouts/mainLayout";
import HeaderDashBoard from "../../components/header";
import SaleDetail from "./salesDetailSection";

import {
  ButtonFilter,
  Container,
  ContentContainer,
  HeaderSection,
} from "./style";

const Home = () => {
  const { RangePicker } = DatePicker;
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
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
            <DatePicker
              defaultValue={moment("01/01/2021", dateFormatList[0])}
              format={dateFormatList}
            />
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
