import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const Slidebar = () => {
  const navigate = useNavigate();
  return (
    <Menu
      theme="dark"
      items={[
        {
          key: "dashboard",
          title: "Dashboard",
          label: "Dashboard",
          onClick: () => navigate("/dashboard"),
        },
        {
          key: "products",
          title: "Products",
          onClick: () => navigate("/"),
          label: "Products",
        },
      ]}
    />
  );
};

export default Slidebar;
