import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
 <p className="home-about-body">
  I’m a Business Intelligence Analyst with experience turning complex business
  problems into clear insights and measurable outcomes.

  <br /><br />

  I work with{" "}
  <b className="purple">SQL, Power BI, Python, Excel, and ERP systems (Infor LN)</b>{" "}
  to build dashboards, KPI frameworks, and automated reporting solutions.

  <br /><br />

  I’m interested in{" "}
  <b className="purple">Business Analysis, Product Analytics, and Supply Chain Optimization</b>.
</p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;