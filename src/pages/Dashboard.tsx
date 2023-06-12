import { Alert, Button, notification } from "antd";

const Dashboard = () => {
  const openNotification = notification.success({ message: "Success" });
  return (
    <>
      <Alert message="Success Tips" type="success" showIcon />
      <Button danger type="primary" onClick={() => openNotification}>
        Click
      </Button>
    </>
  );
};

export default Dashboard;
