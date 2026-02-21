import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Pavan T Y</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {/* GitHub */}
            <li className="social-icons">
              <a
                href="https://github.com/pavanty"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            {/* LinkedIn */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/pavan-ty-888a3b169/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            {/* Email */}
            <li className="social-icons">
              <a
                href="mailto:pavantyn@gmail.com"
                style={{ color: "white" }}
              >
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