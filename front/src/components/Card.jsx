import { Card, Typography, Space, Modal, Button } from "antd";
import { EditOutlined, CommentOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useState } from 'react';
import "../styles/cardStyle.css";

const { Text } = Typography;

const gridStyle = {
  width: "50%",
  textAlign: "center",
};

const largeGridStyle = {
  width: "100%",
  textAlign: "center",
};

const CardComponent = ({ company }) => {
  useEffect(() => {
    console.log(company);
  }, [company]);

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
    <div className="card-Container">
      <Card
        title={company.name}
        bordered={false}
        className="card"
        extra={`SIREN: ${company.siren}`}
        actions={[
          <CommentOutlined key="setting" onClick={showModal} />,
          <CommentOutlined key="edit" />,
          <EditOutlined key="ellipsis" />,
        ]}
      >
        <Card.Grid style={gridStyle}>
          <Text strong>Catégorie: </Text>
          {`${company.category}`}
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <Text strong>Section activité: </Text>
          {`${company.activitySection}`}
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <Text strong>Adresse du siège: </Text>
          {`${company.siegeAddress}`}
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <Text strong>Date de création: </Text>
          {`${company.creationDate}`}
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <Space direction="vertical">
            <Text strong>Propriétaires: </Text>
            {company.owners.map((owner) => {
              if (owner.prenoms === null || owner.prenoms === undefined) {
                return null;
              }
              return <Text>{`- ${owner.prenoms} ${owner.nom}`}</Text>;
            })}
          </Space>
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <Space direction="vertical">
            <Text strong>Établissements: </Text>
            {company.establishments.map((establishment) => {
              if (establishment.adresse === null) {
                return null;
              }
              return (
                <>
                  <Text>{`- ${establishment.adresse}`}</Text>
                  <Text type="secondary">{`SIRET: ${establishment.siret}`}</Text>
                </>
              );
            })}
          </Space>
        </Card.Grid>
        <Card.Grid style={largeGridStyle}>
          <Text strong>Nombre d'établissements: </Text>
          {`${company.establishmentCount}`}
        </Card.Grid>
      </Card>
    </div>

    <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Submit
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Search on Google
          </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default CardComponent;
