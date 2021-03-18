import React, { useState } from "react";
import { DatePicker, Radio } from "antd";
import moment from "moment";

import { Container, HeaderSection, ButtonFilter } from "./style";

import MainLayout from "../../../layouts/mainLayout";
import HeaderDashBoard from "../../../components/header";
import AllOrder from "./allOrder";
import DayOrder from "./dayOrder";
import WeekOrder from "./weekOrder";
import MonthOrder from "./monthOrder";

const OrderTracking = () => {
  const [renderOrder, setRenderOrder] = useState("all");
  const [renderDatePicker, setRenderDatePicker] = useState(false);
  const { RangePicker } = DatePicker;
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

  const OnChange = (e) => {
    setRenderOrder(e.target.value);
  };

  const showDatePicker = () => {
    setRenderDatePicker(true);
  };

  const renderContent = () => {
    if (renderOrder === "all") return <AllOrder />;
    else if (renderOrder === "day") return <DayOrder />;
    else if (renderOrder === "week") return <WeekOrder />;
    else if (renderOrder === "month") return <MonthOrder />;
  };

  return (
    <MainLayout>
      <HeaderDashBoard text="Order" />
      <HeaderSection>
        <ButtonFilter>
          {renderDatePicker ? (
            <DatePicker
              defaultValue={moment("01/01/2021", dateFormatList[0])}
              format={dateFormatList}
            />
          ) : null}

          <Radio.Group defaultValue="all" style={{ marginLeft: "15px" }}>
            <Radio.Button
              value="day"
              onClick={showDatePicker}
              onChange={OnChange}
            >
              Day
            </Radio.Button>
            <Radio.Button
              value="week"
              onClick={showDatePicker}
              onChange={OnChange}
            >
              Week
            </Radio.Button>
            <Radio.Button
              value="month"
              onClick={showDatePicker}
              onChange={OnChange}
            >
              Month
            </Radio.Button>
            <Radio.Button
              value="all"
              onClick={() => setRenderDatePicker(false)}
              onChange={OnChange}
            >
              All
            </Radio.Button>
          </Radio.Group>
        </ButtonFilter>
      </HeaderSection>
      <Container>{renderContent()}</Container>
    </MainLayout>
  );
};

export default OrderTracking;
