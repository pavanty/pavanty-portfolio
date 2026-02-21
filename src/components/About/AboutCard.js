import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I hold a <span className="purple">Bachelor’s degree in Computer Science </span> 
            and am currently pursuing a{" "}
            <span className="purple">Master’s in Engineering Management at Northeastern University, Boston</span>.
            <br />
            <br />
            Professionally, I worked as a{" "}
            <span className="purple">Business Intelligence Analyst Intern in the Supply Chain Department at Liebherr</span>, 
            where I focused on data analytics, reporting, and generating operational insights to support decision-making.
            <br />
            <br />
            Prior to that, I worked at{" "}
            <span className="purple">Capgemini as a Project Engineer (Software Engineer)</span>, 
            gaining hands-on experience in software development and enterprise-level systems.
            <br />
            <br />
            My experience spans{" "}
            <span className="purple">
              Business Analytics, Data Analysis, and Supply Chain Operations
            </span>, 
            enabling me to bridge business strategy with technical execution.
            <br />
            <br />
            Outside of academics and work, I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Anime & Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Global Cuisines
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Driven by data. Focused on impact."
          </p>
          <footer className="blockquote-footer">Pavan Ty</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;