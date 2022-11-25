import "./custom.css";
import logo from "./Images/invoiceHero.png";
import { Layout, Image, Menu, Col, Row } from "antd";
import {
  HomeFilled,
  QuestionCircleFilled,
  SettingFilled,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

export default function Appheader() {
  const navigate = useNavigate();
  return (
    <Layout>
      <Header className="header">
        <Row>
          <Col span={8}>
            <a href="/dashboard" className="logo">
              <Image
                src={logo}
                alt="Logo"
                preview={{
                  visible: false,
                }}
              />
              <span className="Apptitle">Invoice Hero</span>
            </a>
          </Col>
          <Col span={12}>
            <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
              <Menu.Item key="mail" icon={<HomeFilled />} onClick={()=> navigate("/dashboard")}>
               Invoices
              </Menu.Item>
              <Menu.Item key="two" icon={<SettingFilled />} onClick={()=> navigate("/settings")}>
                Settings
              </Menu.Item>
              <Menu.Item key="three" icon={<QuestionCircleFilled />} onClick={()=> navigate("/support")}>
                Support
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
    </Layout>
  );
}
