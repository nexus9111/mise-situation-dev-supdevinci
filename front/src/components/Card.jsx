import { Card, Typography, Space, Tooltip } from "antd";
import { EditOutlined, CommentOutlined } from "@ant-design/icons";

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
  const openIndeed = () => {
    const url = `https://fr.indeed.com/jobs?q=${company.name}`;
    window.open(url, "_blank");
  };

  return (
    <div className="card-Container">
      <Card
        title={company.name}
        bordered={false}
        className="card"
        extra={`SIREN: ${company.siren}`}
        actions={[
          <Tooltip placement="top" title={"Commentaire des clients"}>
            <CommentOutlined key="setting" />
          </Tooltip>,
          <Tooltip placement="top" title={"Commentaire anciens employés"}>
            <CommentOutlined key="edit" />
          </Tooltip>,
          <Tooltip placement="top" title={"Ecrir un commentaire"} disabled>
            <EditOutlined key="ellipsis" />
          </Tooltip>,
          <Tooltip placement="top" title={"Go to Indeed page"}>
            <Text strong onClick={openIndeed}>
              Indeed
            </Text>
          </Tooltip>,
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
  );
};

export default CardComponent;
