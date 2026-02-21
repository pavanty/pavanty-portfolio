import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import toyota from "../../Assets/Projects/Toyota Presentation.png";
import suicide from "../../Assets/Projects/suicide trends.png";
import supplychain from "../../Assets/Projects/Supply chain.png";
import perq from "../../Assets/Projects/Perq's with Zelle.jpg";
import doseguide from  "../../Assets/Projects/DoseGuide - Medication Tracking & Pharmacy Integration Platform .pdf.webp"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading mb-2">
          My <strong className="purple">Key Projects</strong>
        </h1>

        <p style={{ color: "white", marginBottom: "25px" }}>
          Business, analytics, and product-focused projects demonstrating measurable impact and structured problem-solving.
        </p>

        <Row className="g-3 justify-content-center">
          {/* DoseGuide */}
          <Col md={4} className="d-flex">
            <ProjectCard
              imgPath={doseguide}
              title="DoseGuide — Product Strategy & PRD (Team Lead)"
              description={
                <ul>
                  <li>Led a 5-member team and conducted 15+ stakeholder interviews.</li>
                  <li>Identified TAM of 1.2M+ seniors in Massachusetts through market research.</li>
                  <li>Defined 15+ MVP requirements, KPIs, and product workflows.</li>
                  <li>Delivered complete MRD & PRD within a 12-week timeline.</li>
                </ul>
              }
              demoLink="https://drive.google.com/file/d/12X2uCSPgbXH3g4nKmhu1EXILOeNjzUUQ/view"
            />
          </Col>

          {/* Public Health Dashboard */}
          <Col md={4} className="d-flex">
            <ProjectCard
              imgPath={suicide}
              title="Public Health Suicide Trends Dashboard (Power BI)"
              description={
                <ul>
                  <li>Analyzed 10,000+ public health records using Power BI & DAX.</li>
                  <li>Built 20+ interactive visualizations for demographic segmentation.</li>
                  <li>Reduced manual analysis time by ~40% through automation.</li>
                  <li>Identified high-risk geographic clusters for policy insights.</li>
                </ul>
              }
              ghLink="https://github.com/pavanty/Suicide_Trends_USA_PowerBI_Dashboard"
            />
          </Col>
   {/* Perq with Zelle */}
<Col md={4} className="d-flex">
  <ProjectCard
    imgPath={perq}
    title="Perq with Zelle - Financial Platform Integration"
    description={
      <ul>
        <li>Designed unified payment and rewards integration workflow.</li>
        <li>Improved scheduling efficiency by 20% using Gantt & RACI planning.</li>
        <li>Reduced projected costs via WBS, budgeting, and risk analysis.</li>
        <li>Defined adoption metrics to improve transaction success.</li>
      </ul>
    }
    demoLink="https://drive.google.com/file/d/1hiLSRPcu5MOgICjYN_SQa3GDCin7NhfP/view?usp=sharing"
  />
</Col>
          {/* Toyota Supply Chain */}
          <Col md={4} className="d-flex">
            <ProjectCard
              imgPath={toyota}
              title="Toyota Supply Chain Resilience During COVID-19"
              description={
                <ul>
                  <li>Evaluated procurement & logistics strategy across 3 regions.</li>
                  <li>Assessed Lean, JIT, and Kaizen impact on supply chain resilience.</li>
                  <li>Modeled multi-sourcing strategy reducing risk by an estimated 25%.</li>
                  <li>Proposed inventory buffering to stabilize supply continuity.</li>
                </ul>
              }
            />
          </Col>

          {/* Supply Chain Optimization */}
          <Col md={4} className="d-flex">
            <ProjectCard
              imgPath={supplychain}
              title="Supply Chain Optimization Initiative (Team Lead)"
              description={
                <ul>
                  <li>Identified a 3-day logistics delay using paired T-tests.</li>
                  <li>Detected a 2-day second-class shipment gap impacting SLA.</li>
                  <li>Performed ANOVA across 4 departments to analyze demand variance.</li>
                  <li>Improved visibility through automated Power BI dashboards.</li>
                </ul>
              }
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;