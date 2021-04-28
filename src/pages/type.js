import React from "react"

import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"

import Typeface1 from "../assets/images/type/open-sans.svg"
import Typeface2 from "../assets/images/type/merriweather.svg"
import Typeface3 from "../assets/images/type/ibm-plex.svg"
import Typeface4 from "../assets/images/type/bungee.svg"
import Typeface5 from "../assets/images/type/ultra.svg"
import Typeface6 from "../assets/images/type/abril-fatface.svg"

const Type = () => {
  return (
    <>
      <Helmet bodyAttributes={{ class: "type-section" }} />
      <Layout>
        <Container fluid className="section-grid">
          <Row>
            <Col md={4}>
              <div className="image-simple-container">
                <div className="image-square">
                  <Link to="/type/typeface-1">
                    <img src={Typeface1} alt="Project 1" />
                  </Link>
                </div>
                <div className="image-info">
                  <Link to="/type/typeface-1">
                    <span className="image-cover-title">Typeface 1</span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="image-simple-container">
                <div className="image-square">
                  <Link to="/type/typeface-2">
                    <img src={Typeface2} alt="Project 2" />
                  </Link>
                </div>
                <div className="image-info">
                  <Link to="/type/typeface-2">
                    <span className="image-cover-title">Typeface 2</span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="image-simple-container">
                <div className="image-square">
                  <Link to="/type/typeface-3">
                    <img src={Typeface3} alt="Project 3" />
                  </Link>
                </div>
                <div className="image-info">
                  <Link to="/type/typeface-3">
                    <span className="image-cover-title">Typeface 3</span>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <div className="image-simple-container">
                <div className="image-square">
                  <Link to="/type/typeface-4">
                    <img src={Typeface4} alt="Project 4" />
                  </Link>
                </div>
                <div className="image-info">
                  <Link to="/type/typeface-4">
                    <span className="image-cover-title">Typeface 4</span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="image-simple-container">
                <div className="image-square">
                  <Link to="/type/typeface-5">
                    <img src={Typeface5} alt="Project 5" />
                  </Link>
                </div>
                <div className="image-info">
                  <Link to="/type/typeface-5">
                    <span className="image-cover-title">Typeface 5</span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="image-simple-container">
                <div className="image-square">
                  <Link to="/type/typeface-6">
                    <img src={Typeface6} alt="Project 6" />
                  </Link>
                </div>
                <div className="image-info">
                  <Link to="/type/typeface-6">
                    <span className="image-cover-title">Typeface 6</span>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export default Type
