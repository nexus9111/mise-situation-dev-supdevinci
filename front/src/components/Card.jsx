import { Card, Typography, Space, Tooltip } from "antd";
import { v4 as uuidv4 } from "uuid";
import { EditOutlined, CommentOutlined } from "@ant-design/icons";
import { useState } from "react";

import CommentCards from "./CommentCard";

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

  const [clientOpen, clientSetOpen] = useState(false);
  const [selectedComments, clientSelectedComments] = useState([]);
  const [commentType, SetCommentType] = useState("");

  const clientShowModal = (comments, type) => {
    clientSelectedComments(comments);
    SetCommentType(type);
    clientSetOpen(true);
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
            <Tooltip placement="top" title={"Commentaire des clients"}>
              <CommentOutlined
                key="setting"
                onClick={() => clientShowModal(company.comments.clientComments, "clients")}
              />
            </Tooltip>,
            <Tooltip placement="top" title={"Commentaire anciens employés"}>
              <CommentOutlined 
              key="edit" 
              onClick={() => clientShowModal(company.comments.workerComments, "ancien employés")}
              />
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
                return (
                  <Text
                    key={uuidv4()}
                  >{`- ${owner.prenoms} ${owner.nom}`}</Text>
                );
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
                  <div key={establishment.siret}>
                    <Text>{`- ${establishment.adresse}`}</Text>
                    <Text type="secondary">{`SIRET: ${establishment.siret}`}</Text>
                  </div>
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

      <CommentCards
        open={clientOpen}
        setOpen={clientSetOpen}
        comments={selectedComments}
        commentType={commentType}
      />
    </>
  );
};

export default CardComponent;
