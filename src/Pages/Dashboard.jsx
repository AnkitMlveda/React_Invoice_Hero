import { Input, Col, Row, DatePicker,Button, Select,Alert } from "antd";
import { SearchOutlined,BulbTwoTone } from "@ant-design/icons";

export default function Dashboard() {
  const { Option } = Select;

  return (
    <div className="main">
    <Row>
      <Col span={4}>
        <h1>Invoices</h1>
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
      <DatePicker size="large"/>
      </Col>
      <Col span={2}>
      <Button size="large">More filters</Button>
      </Col>
      <Col span={2} className="invoicelisttotal">
      <Select defaultValue="25" size="large">
        <Option value="25">25</Option>
        <Option value="50">50</Option>
        <Option value="75">75</Option>
        <Option value="100">100</Option>
      </Select>
      </Col>
      <Alert
      description="Now you can view/download your invoices from your orders page itself. Select particular orders (50 max) or open a particular order and choose Invoice Hero features from More actions drop down."
      type="info"
      showIcon
      className="information"
      icon={<BulbTwoTone />}
    />
    </Row>
    </div>
  );
}
