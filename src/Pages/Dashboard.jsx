import {
  Input,
  Col,
  Row,
  DatePicker,
  Button,
  Select,
  Drawer,
  Collapse,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import Totalorder from "../Totalorder";
import Footer from "../Footer";

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const { Option } = Select;
  const { Panel } = Collapse;
  const options = [
    { label: "Pending", value: "Pending" },
    { label: "Voided", value: "Voided" },
    { label: "Partially paid", value: "Partially paid" },
    { label: "Authorized", value: "Authorized" },
    { label: "Refunded", value: "Refunded" },
    { label: "Partially refunded", value: "Partially refunded" },
    { label: "Paid", value: "Paid" },
  ];
  const options1 = [
    { label: "Fulfilled", value: "Fulfilled" },
    { label: "Unfulfilled", value: "Unfulfilled" },
    { label: "Partially Fulfilled", value: "Partially Fulfilled" },
    { label: "Restocked", value: "Restocked" },
  ];
  const options2 = [
    { label: "Sent", value: "Sent" },
    { label: "Draft", value: "Draft" },
  ];
  const options3 = [
    { label: "Open", value: "Open" },
    { label: "Cancelled", value: "Cancelled" },
  ];

  return (
    <div className="main">
      <Row>
        <Col span={4}>
          <Totalorder/>
        </Col>
        <Col span={12}>
          <Input
            size="large"
            placeholder="Search by order number or customer name"
            prefix={<SearchOutlined />}
          />
          {/* <Input.Group compact>
          <Input.Search
            allowClear
            size="large"
            placeholder="Search by order number or customer name"
          />
        </Input.Group> */}
        </Col>
        <Col span={4}>
          <DatePicker.RangePicker size="large" allowClear />
        </Col>
        <Col span={2}>
          <Button size="large" onClick={showDrawer}>
            More Filters
          </Button>
          <Drawer
            title="More Filters"
            placement="right"
            onClose={onClose}
            open={open}
          >
            <div className="filtermain">
              <Collapse defaultActiveKey={["1"]} ghost>
                <Panel header="Date" key="1">
                  <DatePicker.RangePicker size="large" allowClear />
                </Panel>
                <Panel header="Payment Status" key="2">
                  <Select
                    mode="multiple"
                    allowClear
                    style={{
                      width: "100%",
                    }}
                    placeholder="Select Value"
                    options={options}
                  />
                </Panel>
                <Panel header="Fulfillment Status" key="3">
                  <Select
                    mode="multiple"
                    allowClear
                    style={{
                      width: "100%",
                    }}
                    placeholder="Select Value"
                    options={options1}
                  />
                </Panel>
                <Panel header="Mail Status" key="4">
                  <Select
                    mode="multiple"
                    allowClear
                    style={{
                      width: "100%",
                    }}
                    placeholder="Select Value"
                    options={options2}
                  />
                </Panel>
                <Panel header="Order Status" key="5">
                  <Select
                    mode="multiple"
                    allowClear
                    style={{
                      width: "100%",
                    }}
                    placeholder="Select Value"
                    options={options3}
                  />
                </Panel>
              </Collapse>
            </div>
          </Drawer>
        </Col>
        <Col span={2} className="invoicelisttotal">
          <Select defaultValue="25" size="large">
            <Option value="25">25</Option>
            <Option value="50">50</Option>
            <Option value="75">75</Option>
            <Option value="100">100</Option>
          </Select>
        </Col>
        <Footer/>
      </Row>
    </div>
  );
}
