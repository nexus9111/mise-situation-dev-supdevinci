import { Col, Row, Typography, Space } from "antd";
import Header from "../components/Header";
import Konami from "react-konami-code";

import imageLanding from "../assets/images/LandingAsset.png";

import "../styles/home.css";

const { Text } = Typography;
const appName = "FinderCorporation";

const Home = () => {


  const easterEgg = () => {
    alert(
      "Vous avez débloqué un secret ! Félicitations pour avoir maîtrisé le Konami Code et découvert notre Easter Egg caché."
    );
  };

  return (
    <>
      <Header />
      <Row className="landing-page-container">
        <Col xs={22} sm={22} md={22} lg={12} xl={12} offset={1}>
          <Space direction="vertical" className="landing-description-container">
            <Text className="landing-title">{appName}</Text>
            <Text className="landing-description">
              Vous cherchez des entreprises française pour réaliser vos projets
              professionnels ? {appName} est là pour vous simplifier la vie.
              Avec notre application intuitive et nos multiples filtres de
              recherche, vous trouverez en un clin d'œil les entreprises qui
              correspondent à vos besoins.
            </Text>
          </Space>
        </Col>
        <Col xs={22} sm={22} md={22} lg={10} xl={10} offset={1}>
          <img src={imageLanding} alt="" className="landing-image" />
        </Col>
      </Row>
      <Konami action={easterEgg}></Konami>
    </>
  );
};

export default Home;
