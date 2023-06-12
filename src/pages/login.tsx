import { Button, Col, Form, Input, Row } from "antd";
import { useAuth } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  return (
    <>
      <Row className="h-full" align="middle" justify="center">
        <Col>
          <Form
            onFinish={(values) => {
              console.log(values);
              login();
              navigate("/");
            }}
          >
            <Form.Item name="username" rules={[{ required: true }]}>
              <Input placeholder="UserName"></Input>
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true }]}>
              <Input.Password placeholder="Password"></Input.Password>
            </Form.Item>
            <Col>
              <Button
                danger
                htmlType="submit"
                type="primary"
                className="w-full"
              >
                Login
              </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Login;
