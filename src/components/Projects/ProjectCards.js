import React from "react";
import { Card, Button } from "react-bootstrap";

function ProjectCard({ imgPath, title, description, ghLink, demoLink }) {
  return (
    <Card
      className="project-card w-100 h-100 shadow-lg"
      style={{
        backgroundColor: "#16213e",
        color: "white",
        borderRadius: "20px",
        border: "1px solid rgba(255,255,255,0.12)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card.Img
        variant="top"
        src={imgPath}
        alt="project"
        className="project-card-img"
        style={{
          height: "220px",
          objectFit: "contain",
          backgroundColor: "#16213e",
        }}
      />

      <Card.Body
        className="project-card-body"
        style={{
          display: "grid",
          gridTemplateRows: "56px 1fr auto",
          gap: "12px",
          padding: "18px 20px 20px",
          minHeight: 0,
        }}
      >
        <Card.Title
          style={{
            fontSize: "1.05rem",
            fontWeight: 600,
            margin: 0,
            lineHeight: 1.25,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
        >
          {title}
        </Card.Title>

        <div className="project-card-desc" style={{ minHeight: 0, overflow: "hidden" }}>
          {/* IMPORTANT: your description is a <ul>. Keep it from breaking layout */}
          <div
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.6,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 6, // adjust if you want more/less
            }}
          >
            {description}
          </div>
        </div>

        {(ghLink || demoLink) && (
          <div className="d-flex gap-2 flex-wrap">
            {ghLink && (
              <Button variant="outline-light" size="sm" href={ghLink} target="_blank" rel="noreferrer">
                GitHub
              </Button>
            )}
            {demoLink && (
              <Button variant="outline-light" size="sm" href={demoLink} target="_blank" rel="noreferrer">
                Demo
              </Button>
            )}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;