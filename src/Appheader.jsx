import "./custom.css";
import logo from "./Images/invoiceHero.png";
import { Layout, Image, Menu } from "antd";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";
//import { NavLink } from "react-router-dom";

const { Header } = Layout;

export default function Appheader() {
  return (
    <Layout>
      <Header className="header">
        <a href="/" className="logo">
          <Image
            src={logo}
            alt="Logo"
            preview={{
              visible: false,
            }}
          />
          <span className="Apptitle">Invoice Hero</span>
        </a>
        {/* <NavLink className="nav-link" to="/dashboard" end>
        Dashboard
        </NavLink>
        <NavLink className="nav-link" to="/settings">
        Settings
        </NavLink>
        <NavLink className="nav-link" to="/support">
        Support
        </NavLink> */}

        <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
          <a href="/dashboard">
            <Menu.Item key="mail" icon={<MailOutlined />}>
              Navigation One
            </Menu.Item>
          </a>
          <a href="/settings">
            <Menu.Item key="two" icon={<AppstoreOutlined />}>
              Navigation Two
            </Menu.Item>
          </a>
          <a href="/support">
            <Menu.Item key="three" icon={<AppstoreOutlined />}>
              Navigation Three
            </Menu.Item>
          </a>
        </Menu>
      </Header>
    </Layout>
  );
}
