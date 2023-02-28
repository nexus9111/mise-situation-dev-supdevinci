import { Col, Row } from "antd";
import apiController from "../services/auth"
import { useEffect, useState } from "react";
import Card from "../components/Card.jsx";
import Map from "../components/Map.jsx";

const SearchPage = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        apiController.searchCompanies("", "", "", "", "", "").then((res) => {
            setCompanies(res.data.companies);
        });
    }, []);
    return (
        <Row>
            <Col span={14}>
                <Row>
                    {companies.map((company) => {
                        return (
                            <Col span={12}>
                                <Card company={company}/>
                            </Col>
                        );
                    }
                    )}
                </Row>
            </Col>
            <Col span={10}>
                <h1>MAP</h1>
                <Map points={companies.map((company) => {
                    company.establishments.map((establishment) => {
                        return [parseFloat(establishment.latitude), parseFloat(establishment.longitude)];
                    });
                })}/>
            </Col>
        </Row>);
}

export default SearchPage;