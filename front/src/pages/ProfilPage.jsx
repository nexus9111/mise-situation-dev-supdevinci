import React, { useState, useEffect } from "react";
import { Card, Space, Typography, Button } from "antd";
import { useNavigate } from "react-router-dom";

import ImageLogo from "../assets/images/ImageFictive.jpg";

import authController from "../services/auth";

import HeaderComponent from "../components/Header";


const { Title } = Typography;

const ProfilPage = () => {
  const [profil, setProfil] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      let profilResponse = await authController.profile();
      if (profilResponse.success) {
        setProfil(profilResponse.data);
      }
    })();
  }, []);

  const logout = () => {
    authController.logout();
    navigate("/");
  };

  return (
    <>
      <HeaderComponent />
      <div>
        <h1 style={{ width: "100%", fontSize: 55, textAlign: "center" }}>
          <Title>Votre profil :</Title>
        </h1>
      </div>
      {profil && (
        <Space
          direction="vertical"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Card
            title={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{
                    width: "200px",
                    height: "200px",
                    margin: "2em auto 0em",
                    borderRadius: "100%",
                    border: "10px double #1677FF",
                  }}
                  src={ImageLogo}
                  alt=""
                />
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                    fontSize: 40,
                    fontWeight: "bold",
                    margin: "10px auto 10px",
                  }}
                >
                  {profil.user.username}
                </div>
              </div>
            }
            style={{
              maxWidth: "800px",
              margin: "auto",
              borderRadius: 35,
              boxShadow: "0px 8px 10px 5px rgba(208, 216, 243, 1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                border: "10px double #1677FF",
                borderRadius: 35,
                maxWidth: "600px",
                padding: "10px",
                margin: "auto",
                marginTop: "4em",
                marginBottom: "4em",
              }}
            >
              <p style={{ width: "100%", fontSize: 25 }}>
                <div
                  style={{ width: "100%", textAlign: "center", fontSize: 20 }}
                >
                  Email : <strong>{profil.user.email}</strong>
                </div>
              </p>
              <p style={{ width: "100%", fontSize: 25 }}>
                <div
                  style={{ width: "100%", textAlign: "center", fontSize: 20 }}
                >
                  User ID : <strong>{profil.user.id}</strong>
                </div>
              </p>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                type="link"
                style={{
                  width: "200px",
                  height: "70px",
                  backgroundColor: "#1677ff",
                  color: "white",
                  textAlign: "center",
                  fontSize: 20,
                  marginBottom: "2em",
                  margin: "auto",
                }}
                onClick={logout}
              >
                Logout
              </Button>
            </div>
          </Card>
        </Space>
      )}
    </>
  );
};

export default ProfilPage;
