import React from "react"
import { Helmet } from "react-helmet"

import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"

const Info = ({ data }) => {
  return (
    <>
      <Helmet bodyAttributes={{ class: "info-section single" }} />
      <Layout>
        <Container fluid className="info">
          <Container className="info-contain">
            <Row>
              <Col lg={6}>
                <p className="info-text">
                  Moonlet is a Gatsby-based portfolio app utilizing a full-width
                  grid and large images. Originally conceived as a starter for
                  type designers, it is appropriate for all image-based
                  portfolios.
                </p>
                <p className="info-text">
                  <a href="https://github.com/tiotype/moonlet">
                    Project on Github
                  </a>
                </p>
                <p className="info-text">
                  Fonts in Use:&nbsp;
                  <a href="https://www.recursive.design/">Recursive</a> by&nbsp;
                  <a href="https://www.arrowtype.com/">ArrowType</a>
                </p>
              </Col>
            </Row>
          </Container>
        </Container>
      </Layout>
    </>
  )
}

export default Info
