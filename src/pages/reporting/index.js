import React, { useState } from "react";
import { DatePicker, Radio } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import moment from "moment";

import {
  SaleDetailContainer,
  HeaderSection,
  ButtonFilter,
  StyleInput,
  TrendChartContainer,
  BoxContainer,
} from "./style";

import MainLayout from "../../layouts/mainLayout";
import Header from "../../components/header";

import SaleDetail from "./saleDetail";
import TrendChart from "./trendChart";
import ServiceRate from "./serviceRate";
import TableReport from "./TableReport";

const Reporting = () => {
  const [renderOrder, setRenderOrder] = useState("all");
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  const dateFormatListMonth = ["MM/YYYY", "MM/YY"];

  const onChange = (e) => {
    setRenderOrder(e.target.value);
  };

  const renderDatePicker = () => {
    if (renderOrder === "week") {
      return (
        <DatePicker
          defaultValue={moment("01/01/2021", dateFormatList[0])}
          format={dateFormatList}
          picker="week"
        />
      );
    } else if (renderOrder === "month") {
      return (
        <DatePicker
          defaultValue={moment("01/2021", dateFormatList[0])}
          format={dateFormatListMonth}
          picker="month"
        />
      );
    } else if (renderOrder === "year") {
      return <DatePicker onChange={onChange} picker="year" />;
    } else {
      return (
        <DatePicker
          defaultValue={moment("01/01/2021", dateFormatList[0])}
          format={dateFormatList}
        />
      );
    }
  };

  return (
    <MainLayout>
      <HeaderSection>
        <Header text="Order Management" />
        <ButtonFilter>
          <StyleInput placeholder="USER ID" suffix={<SearchOutlined />} />
          {renderDatePicker()}

          <Radio.Group defaultValue="day" style={{ marginLeft: "15px" }}>
            <Radio.Button value="day" onChange={onChange}>
              Day
            </Radio.Button>
            <Radio.Button value="week" onChange={onChange}>
              Week
            </Radio.Button>
            <Radio.Button value="month" onChange={onChange}>
              Month
            </Radio.Button>
            <Radio.Button value="year" onChange={onChange}>
              Year
            </Radio.Button>
          </Radio.Group>
        </ButtonFilter>
      </HeaderSection>

      <SaleDetailContainer>
        <SaleDetail />
      </SaleDetailContainer>

      <TrendChartContainer>
        <TrendChart />
      </TrendChartContainer>

      <BoxContainer>
        <ServiceRate />
        <TableReport table={1} />
        <TableReport table={2} />
        <TableReport table={3} />
      </BoxContainer>
    </MainLayout>
  );
};

export default Reporting;
