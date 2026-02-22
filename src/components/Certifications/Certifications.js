// src/components/Certifications/Certifications.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";

import cspo from "../../Assets/certifications/cspo.jpg";
import Capgemini from "../../Assets/certifications/Capgemini_Ocean Level-2.jpg";
import genai from "../../Assets/certifications/Data Landscape of GenAI for Project Managers_page-0001.jpg";
import sql from "../../Assets/certifications/sql.jpg";
import pl300 from "../../Assets/certifications/PL300.png";
import coursera from "../../Assets/certifications/coursera.jpg";

function Certifications() {
  const certifications = [
    {
      title: "Microsoft Certified: Power BI Data Analyst Associate",
      issuer: "Microsoft",
      issued: "Aug 2025",
      credentialId: "8A87839ADB909FE4",
      image: pl300,
      skills: ["Power BI", "DAX", "Data Visualization", "Business Intelligence"],
    },
    {
      title: "Certified Scrum Product Owner (CSPO)®",
      issuer: "Scrum Alliance",
      issued: "Aug 2024",
      credentialId: "001671189",
      image: cspo,
      skills: ["Product Roadmapping", "Stakeholder Management", "User Research"],
    },
    {
      title: "Data Landscape of GenAI for Project Managers",
      issuer: "PMI",
      issued: "Mar 2025",
      credentialId: "",
      image: genai,
      skills: ["Artificial Intelligence", "Risk Assessment", "Project Governance"],
    },
    {
      title: "Google Project Management",
      issuer: "Coursera",
      issued: "May 2023",
      credentialId: "ARZ946C799Y6",
      image: coursera,
      skills: ["SDLC", "Documentation", "Communication"],
    },
    {
      title: "The Complete SQL Bootcamp",
      issuer: "Udemy",
      issued: "Jul 2020",
      credentialId: "",
      image: sql,
      skills: ["PostgreSQL", "MySQL", "SQL Queries"],
    },
    {
      title: "Capgemini Entry Level Developer 1 & 2",
      issuer: "Capgemini",
      issued: "",
      credentialId: "",
      image: Capgemini,
      skills: ["Java", "Spring Boot", "React.js", "Git"],
    },
  ];

  return (
    <Container
      fluid
      className="project-section"
      style={{ position: "relative" }}
    >
      {/* Background particles: fixed + non-interactive so it never blocks clicks */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Particle />
      </div>

      {/* Content above particles */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Container>
          <h1 className="project-heading mb-3">
            My <strong className="purple">Certifications</strong>
          </h1>

          <p style={{ color: "white", marginBottom: "50px", fontSize: "1.15rem" }}>
            Professional certifications validating expertise in analytics, product
            management, and technology.
          </p>

          <Row className="g-4">
            {certifications.map((cert, index) => (
              <Col xs={12} md={6} lg={4} className="d-flex" key={index}>
                <Card
                  className="w-100 shadow-lg"
                  style={{
                    backgroundColor: "#16213e",
                    color: "white",
                    borderRadius: "20px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    height: "100%",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={cert.image}
                    alt="cert-logo"
                    style={{
                      height: "320px",
                      objectFit: "contain",
                      backgroundColor: "#16213e",
                    }}
                  />

                  <Card.Body
                    style={{
                      display: "grid",
                      gridTemplateRows: "64px 96px 1fr",
                      gap: "12px",
                      padding: "18px 20px 20px",
                      minHeight: 0,
                    }}
                  >
                    <Card.Title
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 600,
                        margin: 0,
                        lineHeight: 1.25,
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                      }}
                    >
                      {cert.title}
                    </Card.Title>

                    <div
                      style={{
                        fontSize: "0.95rem",
                        lineHeight: 1.45,
                        display: "grid",
                        gridTemplateRows: "repeat(3, 1fr)",
                      }}
                    >
                      <div>
                        <span className="purple">Issuer:</span> {cert.issuer}
                      </div>

                      {cert.issued ? (
                        <div>
                          <span className="purple">Issued:</span> {cert.issued}
                        </div>
                      ) : (
                        <div style={{ visibility: "hidden" }}>Issued:</div>
                      )}

                      {cert.credentialId ? (
                        <div
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                          title={cert.credentialId}
                        >
                          <span className="purple">Credential ID:</span>{" "}
                          {cert.credentialId}
                        </div>
                      ) : (
                        <div style={{ visibility: "hidden" }}>Credential ID:</div>
                      )}
                    </div>

                    <div style={{ overflow: "hidden" }}>
                      <div
                        className="purple fw-semibold mb-2"
                        style={{ fontSize: "1rem" }}
                      >
                        Skills
                      </div>

                      <ul
                        style={{
                          fontSize: "0.9rem",
                          lineHeight: 1.6,
                          paddingLeft: "20px",
                          margin: 0,
                          maxHeight: "110px",
                          overflow: "hidden",
                        }}
                      >
                        {cert.skills.map((skill, i) => (
                          <li key={i}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Container>
  );
}

export default Certifications;