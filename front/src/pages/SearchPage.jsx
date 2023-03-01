import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import Card from "../components/Card.jsx";
import Map from "../components/Map.jsx";
import Filter from "../components/Filter";

import apiController from "../services/apiSearchHelper";

const SearchPage = () => {
    const [companies, setCompanies] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState([]);
    const [filterName, setfilterName] = useState("");
    const [filterCodePostal, setfilterCodePostal] = useState("");
    const [filterDepartement, setfilterDepartement] = useState("");
    const [filterActivity, setfilterActivity] = useState("");


    useEffect(() => {
        apiController.searchCompanies(filterName, filterCodePostal, filterDepartement, filterActivity, "", "").then((res) => {
            setCompanies(res.data.companies);
        });
    }, [filterActivity, filterCodePostal, filterDepartement, filterName]);

    const selectCompany = (company) => {
        // console.log(company);
        setSelectedCompany(company);
    };   
    
    const setfilters = (nom, codePostal, Departement, Activity) => {
        setfilterActivity(Activity);
        setfilterCodePostal(codePostal);
        setfilterDepartement(Departement);
        setfilterName(nom);
    };

    return (
        <>
            <Filter setfilters={setfilters}/>
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
        </>
    );
};

export default SearchPage;
