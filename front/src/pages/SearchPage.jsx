import { Col, Row } from "antd";
import apiController from "../services/auth";
import { useEffect, useState } from "react";
import Card from "../components/Card.jsx";
import Map from "../components/Map.jsx";

const SearchPage = () => {
    const [companies, setCompanies] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState([]);

    useEffect(() => {
        apiController.searchCompanies("", "", "", "", "", "").then((res) => {
            setCompanies(res.data.companies);
        });
    }, []);

    const selectCompany = (company) => {
        // console.log(company);
        setSelectedCompany(company);
    };

    return (
        <Row>
            <Col span={14}>
                <Row>
                    {companies.map((company) => {
                        return (
                            // when click on card, select company
                            <Col span={12} onClick={() => selectCompany(company)}>
                                <Card company={company} />
                            </Col>
                        );
                    })}
                </Row>
            </Col>
            <Col span={10}
                style={{ height: "98vh", width: "100%" }}
            >
                {/* if selected company */}
                {selectedCompany.establishments &&
                    selectedCompany.establishments.length > 0 ? (
                    <Map
                        points={selectedCompany.establishments.map((establishment) => {
                            return [
                                parseFloat(establishment.latitude),
                                parseFloat(establishment.longitude),
                            ];
                        })}
                    />
                ) : (
                    <Map points={[]} />
                )}
            </Col>
        </Row>
    );
};

export default SearchPage;
