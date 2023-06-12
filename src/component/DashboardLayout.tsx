import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Slidebar from "../slidebar/Slidebar";

const DashboardLayout = () => {
  return (
    <Layout className="h-screen w-screen" hasSider>
      <Layout.Sider>
        <Slidebar />
      </Layout.Sider>
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};

export default DashboardLayout;
