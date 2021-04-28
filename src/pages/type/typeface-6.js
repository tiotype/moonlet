import React from "react"

import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import { Container, Row, Col } from "react-bootstrap"
import Layout from "../../components/layout"

import mainImage from "../../assets/images/type/abril-fatface.svg"

const Typeface6 = () => {
  return (
    <>
      <Helmet bodyAttributes={{ class: "type-section" }} />
      <Layout>
        <Container fluid className="work">
          <Container fluid className="work-nav fixed-top">
            <div className="d-none d-md-flex justify-content-between page-light">
              <div className="scroll">
                <ul className="work-link-light">
                  <li>
                    <a href="#specimen">Specimen</a>
                  </li>
                  <li>
                    <a href="#info">Info</a>
                  </li>
                </ul>
              </div>
              <div className="next">
                <ul className="arrow-link-light">
                  <li>
                    <Link to="/type/typeface-5">
                      <i class="bi bi-arrow-left"></i>
                    </Link>
                  </li>
                  <li>
                    <i class="bi bi-arrow-right text-disabled"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex d-md-none justify-content-between page-light">
              <div className="prev">
                <Link to="/type/typeface-5">
                  <i class="bi bi-arrow-left"></i>
                </Link>{" "}
              </div>
              <div className="scroll">
                <ul className="work-link-light">
                  <li>
                    <a href="#specimen">Specimen</a>
                  </li>
                  <li>
                    <a href="#info">Info</a>
                  </li>
                </ul>
              </div>
              <div className="next">
                <i class="bi bi-arrow-right text-disabled"></i>
              </div>
            </div>
          </Container>
          <Container fluid className="work-name-contain" id="specimen">
            <Row>
              <Col md={12}>
                <p className="work-name-header">Typeface 6</p>
              </Col>
            </Row>
          </Container>
          <Container className="work-grid">
            <Row>
              <Col md={12}>
                <img src={mainImage} alt="Typeface 6" />
              </Col>
            </Row>
          </Container>
          <Container className="work-desc" id="info">
            <Row>
              <Col md={12}>
                <p className="desc-name">Typeface 6</p>
                <p className="desc-status">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  id neque nec nulla tempor convallis. Pellentesque quis quam
                  lectus. Sed sed justo mi. Etiam turpis tellus, fermentum ac
                  efficitur id, lobortis in odio. Ut augue metus, feugiat ut
                  consectetur eget, interdum quis nibh. Vivamus vitae tellus
                  eros. Nulla sed aliquam risus, at hendrerit erat. Praesent leo
                  dolor, pulvinar id elementum id, commodo in sem. Maecenas nunc
                  elit, faucibus in finibus non, mattis eu velit. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos.
                </p>
              </Col>
            </Row>
          </Container>
        </Container>
      </Layout>
    </>
  )
}

export default Typeface6
