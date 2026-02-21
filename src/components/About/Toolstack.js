import React from "react";
import { Col, Row } from "react-bootstrap";

import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import excel from "../../Assets/TechIcons/excel_791635.png";
import sap from "../../Assets/TechIcons/sap_882701.png";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
   

    

      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="VSCode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={intelliJ} alt="IntelliJ" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>

<Col xs={4} md={2} className="tech-icons">
        <img src={excel} alt="React"style={{ width: "24px", height: "24px" }} />
        <div className="tech-icons-text">Excel</div>
      </Col>

    

      <Col xs={4} md={2} className="tech-icons">
        <img src={sap} alt="React"style={{ width: "24px", height: "24px" }} />
        <div className="tech-icons-text">ERP (Infor LN)</div>
      </Col>

    </Row>
  );
}

export default Toolstack;