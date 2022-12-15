import { Alert } from "antd";
import { BulbTwoTone } from "@ant-design/icons";

export default function Footer() {
  return (
    <div>
      <Alert
        description="Now you can view/download your invoices from your orders page itself. Select particular orders (50 max) or open a particular order and choose Invoice Hero features from More actions drop down."
        type="info"
        showIcon
        className="information"
        icon={<BulbTwoTone />}
      />
    </div>
  );
}
