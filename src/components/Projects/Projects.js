// src/components/Projects/Projects.js
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import toyota from "../../Assets/Projects/Toyota Presentation.png";
import suicide from "../../Assets/Projects/suicide trends.png";
import supplychain from "../../Assets/Projects/Supply chain.png";
import perq from "../../Assets/Projects/Perq's with Zelle.jpg";
import doseguide from "../../Assets/Projects/DoseGuide - Medication Tracking & Pharmacy Integration Platform .pdf.webp";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isMobile;
}

function Projects() {
  const isMobile = useIsMobile(768);

  return (
    <Container fluid className="project-section">
      {!isMobile && <Particle />}

      <Container>
        <h1 className="project-heading mb-2">
          My <strong className="purple">Key Projects</strong>
        </h1>

        <p style={{ color: "white", marginBottom: "25px" }}>
          Business, analytics, and product-focused projects demonstrating measurable impact and structured problem-solving.
        </p>

        <Row className="g-4 justify-content-center">
          <Col xs={12} md={6} lg={4} className="d-flex">
            <ProjectCard
              imgPath={doseguide}
              title="DoseGuide - Product Strategy & PRD (Team Lead)"
              description={
                <ul>
                  <li>Elicited requirements through 15+ stakeholder interviews and created user personas to shape a user-centric product vision.</li>
                  <li>Conducted market analysis identifying a TAM of 1.2M+ seniors in Massachusetts.</li>
                  <li>Designed MVP roadmap and wireframe workflows outlining key product features.</li>
                  <li>Authored MRD/PRD documentation with KPIs, success metrics, and differentiation strategy.</li>
                </ul>
              }
              demoLink="https://drive.google.com/file/d/12X2uCSPgbXH3g4nKmhu1EXILOeNjzUUQ/view"
            />
          </Col>

          <Col xs={12} md={6} lg={4} className="d-flex">
            <ProjectCard
              imgPath={suicide}
              title="Public Health Suicide Trends Dashboard (Power BI)"
              description={
                <ul>
                  <li>Developed an end-to-end public health analytics dashboard using Power BI, DAX, and Excel to process and visualize complex datasets.</li>
                  <li>Built 20+ interactive visualizations for demographic and geographic segmentation.</li>
                  <li>Reduced manual analysis time by approximately 40% through automation.</li>
                  <li>Generated actionable insights that improved data-driven decision-making.</li>
                </ul>
              }
              ghLink="https://github.com/pavanty/Suicide_Trends_USA_PowerBI_Dashboard"
            />
          </Col>

          <Col xs={12} md={6} lg={4} className="d-flex">
            <ProjectCard
              imgPath={perq}
              title="Perq with Zelle - Financial Platform Integration"
              description={
                <ul>
                  <li>Designed a unified financial platform integrating peer-to-peer transactions, merchant payments, cashback, and rewards.</li>
                  <li>Improved scheduling efficiency by 20% using Gantt charts, RACI matrices, and resource allocation planning.</li>
                  <li>Reduced projected costs through budget analysis, WBS development, and risk assessment.</li>
                  <li>Defined adoption and transaction success metrics to enhance user engagement.</li>
                </ul>
              }
              demoLink="https://drive.google.com/file/d/1hiLSRPcu5MOgICjYN_SQa3GDCin7NhfP/view?usp=sharing"
            />
          </Col>

          <Col xs={12} md={6} lg={4} className="d-flex">
            <ProjectCard
              imgPath={toyota}
              title="Toyota Supply Chain Resilience During COVID-19"
              description={
                <ul>
                  <li>Conducted analysis of Toyota’s supply chain network focusing on procurement strategies and logistics optimization.</li>
                  <li>Evaluated Lean Manufacturing, Just-In-Time (JIT), and Kaizen quality control practices.</li>
                  <li>Proposed multi-sourcing strategies reducing supply risk by an estimated 25%.</li>
                  <li>Recommended inventory buffering to stabilize supply continuity during disruptions.</li>
                </ul>
              }
            />
          </Col>

          <Col xs={12} md={6} lg={4} className="d-flex">
            <ProjectCard
              imgPath={supplychain}
              title="Supply Chain Optimization Initiative (Team Lead)"
              description={
                <ul>
             
  <li>Analyzed shipping lead times using paired and one-sample T-tests as part of hypothesis testing, identifying a 3-day logistics delay.</li>
  <li>Detected a 2-day gap in second-class shipments through statistical hypothesis testing.</li>
  <li>Conducted ANOVA analysis across four departments to assess demand variance.</li>
  <li>Visualized performance using Minitab and Power BI dashboards to support data-driven decisions.</li>

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