import React from "react";
import { Col, Row } from "react-bootstrap";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import powerbi from "../../Assets/TechIcons/powerbi.svg";
import Tableau from "../../Assets/TechIcons/tableau.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import minitab from "../../Assets/TechIcons/Minitab.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL / PostgreSQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
  <img
    src={powerbi}
    alt="powerbi"
    style={{ width: "24px", height: "24px" }}
  />
  <div className="tech-icons-text">Power BI</div>
</Col>

 <Col xs={4} md={2} className="tech-icons">
       <img src={Tableau} alt="tableou"style={{ width: "24px", height: "24px" }} />
        <div className="tech-icons-text">Tableau</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="Javascript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React" />
        <div className="tech-icons-text">React</div>
      </Col>

       <Col xs={4} md={2} className="tech-icons">
        <img src={minitab} alt="React"style={{ width: "24px", height: "24px" }} />
        <div className="tech-icons-text">MiniTab</div>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" />
        <div className="tech-icons-text">Git</div>
      </Col>

  
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>

   

    </Row>
  );
}

export default Techstack;