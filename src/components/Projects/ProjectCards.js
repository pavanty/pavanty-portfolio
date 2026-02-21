import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
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
  src={props.imgPath}
  alt="project-img"
  style={{
    height: "320px",          // <- same as Certifications
    objectFit: "contain",     // <- same behavior (no crop)
    backgroundColor: "#16213e",
    borderTopLeftRadius: "20px",   // match card radius
    borderTopRightRadius: "20px",  // match card radius
  }}
/>
   

      {/* BODY: grid keeps title/desc/buttons aligned */}
      <Card.Body
        style={{
          display: "grid",
          gridTemplateRows: "56px 1fr 44px", // title / description / buttons
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
    textAlign: "center",   // ADD THIS
  }}
>
  {props.title}
</Card.Title>

        {/* Description (supports UL or text) */}
        <div
          style={{
            overflow: "hidden",
            fontSize: "0.95rem",
            lineHeight: 1.55,
          }}
        >
          {/* Make UL spacing consistent if description is a <ul> */}
          <div
            style={{
              margin: 0,
            }}
          >
            {props.description}
          </div>
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          {props.ghLink && (
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              rel="noreferrer"
              size="sm"
            >
              <BsGithub /> GitHub
            </Button>
          )}

          {props.demoLink && (
            <Button
              variant="outline-light"
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
              size="sm"
            >
              <CgWebsite /> View
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;