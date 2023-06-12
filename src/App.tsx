import { App as AntApp, ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import { protectedRouter, publicRouter } from "./router";
import AuthProvider, { useAuth } from "./providers/AuthProvider";

function App() {
  const { isLoggedIn } = useAuth();

  console.log(isLoggedIn);

  return (
    <ConfigProvider>
      <AntApp>
        <RouterProvider router={isLoggedIn ? protectedRouter : publicRouter} />
      </AntApp>
    </ConfigProvider>
  );
}

export default App;
