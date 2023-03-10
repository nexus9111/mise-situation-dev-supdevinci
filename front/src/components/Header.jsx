import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import { useEffect, useState } from "react";

import authController from "../services/auth";

const { Header } = Layout;

const HeaderComponent = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const login = authController.isLogin();
    if (login) {
      setIsLogin(true);
    }
  }, []);

  const navList = [
    {
      key: "Accueil",
      label: "Accueil",
      style: { fontSize: 15, textAlign: "center" },
      onClick: () => {
        navigate("/");
      },
    },
    {
      key: "Recherche",
      label: "Recherche",
      style: { fontSize: 15, textAlign: "center", marginRight: "80%" },
      onClick: () => {
        navigate("/search");
      },
    },
    {
      key: isLogin ? "Profile" : "S'identifier",
      label: isLogin ? "Profile" : "S'identifier",
      style: { fontSize: 15, textAlign: "center" },
      onClick: () => {
        navigate(isLogin ? "/profile" : "/login");
      },
    },
  ];

  return (
    <Layout
      style={{
        marginBottom: "6em",
      }}
    >
      <Header
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 10,
          width: "100%",
          background: "#1677FF",
          boxShadow: "5px 8px 10px 5px rgba(208, 216, 243, 1)",
        }}
      >
        <Menu
          style={{
            width: "100%",
            display: "flex",
            flex: "Column",
            justifyContent: "center",
            paddingInline: "5%",
            background: "#1677FF",
          }}
          theme="dark"
          mode="horizontal"
          items={navList}
        />
      </Header>
    </Layout>
  );
};
export default HeaderComponent;
