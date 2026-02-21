import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  const textStyle = { color: "white", margin: 0 };
  const iconStyle = { color: "white", fontSize: "22px" };

  return (
    <Container
      fluid
      className="footer"
      style={{
        backgroundColor: "#0d1117",
        padding: "20px 0",
        color: "white",
        overflowX: "hidden",     // ✅ prevents horizontal scrollbar
        maxWidth: "100%",        // ✅ ensures no extra width
      }}
    >
      <Row
        className="align-items-center text-center"
        style={{ margin: 0 }}    // ✅ removes row negative margin issues
      >
        {/* Left */}
        <Col md="4" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h6 style={textStyle}>By Pavan T Y</h6>
        </Col>

        {/* Middle */}
        <Col md="4" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h6 style={textStyle}>Copyright © {year}</h6>
        </Col>

        {/* Right */}
        <Col md="4" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              padding: 0,
              margin: 0,
              maxWidth: "100%",
            }}
          >
            <li>
              <a
                href="https://github.com/pavanty"
                target="_blank"
                rel="noopener noreferrer"
                style={iconStyle}
              >
                <AiFillGithub />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/pavan-ty-888a3b169/"
                target="_blank"
                rel="noopener noreferrer"
                style={iconStyle}
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li>
              <a href="mailto:pavantyn@gmail.com" style={iconStyle}>
                <MdEmail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;