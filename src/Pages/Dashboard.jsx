import { Input, Col, Row, DatePicker,Button, Select } from "antd";
//import { SearchOutlined } from "@ant-design/icons";

export default function Dashboard() {
  const { Option } = Select;

  return (
    <div className="main">
    <Row>
      <Col span={4}>
        <h1>Invoices</h1>
      </Col>
      <Col span={10}>
        {/* <Input
            size="large"
            placeholder="Search by order number or customer name"
            prefix={<SearchOutlined />}
          /> */}
        <Input.Group compact>
          <Input.Search
            allowClear
            size="large"
            placeholder="Search by order number or customer name"
          />
        </Input.Group>
      </Col>
      <Col span={4}>
      <DatePicker size="large"/>
      </Col>
      <Col span={4}>
      <Button size="large">More filters</Button>
      </Col>
      <Col span={2}>
      <Select defaultValue="25" size="large">
        <Option value="25">25</Option>
        <Option value="50">50</Option>
        <Option value="75">75</Option>
        <Option value="100">100</Option>
      </Select>
      </Col>
    </Row>
    </div>
  );
}
