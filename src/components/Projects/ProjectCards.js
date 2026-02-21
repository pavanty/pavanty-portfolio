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
          height: "320px",
          objectFit: "contain",
          backgroundColor: "#16213e",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      />

      <Card.Body
        style={{
          display: "grid",
          gridTemplateRows: "auto 1fr auto", // ✅ FIX: title grows on mobile
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
            textAlign: "center",
            wordBreak: "break-word", // ✅ prevents overflow for long words
          }}
        >
          {props.title}
        </Card.Title>

        <div
          style={{
            overflow: "hidden",
            fontSize: "0.95rem",
            lineHeight: 1.55,
          }}
        >
          <div style={{ margin: 0 }}>{props.description}</div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            flexWrap: "wrap", // ✅ FIX: buttons wrap on mobile
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