import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none", // ✅ critical: particles never capture clicks
      }}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0, // ✅ keep it behind all content
        },
        fpsLimit: 60,

        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              area: 1500, // ✅ use "area" (newer option name)
            },
          },
          color: { value: "#ffffff" },
          links: { enable: false },
          move: {
            enable: true,
            direction: "right",
            speed: 1,
            outModes: { default: "out" },
          },
          size: { value: { min: 1, max: 3 } },
          opacity: {
            value: 0.5,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.05,
            },
          },
        },

        // ✅ disable interactivity so nothing intercepts clicks
        interactivity: {
          events: {
            onClick: { enable: false },
            onHover: { enable: false },
            resize: true,
          },
          modes: {
            push: { quantity: 1 },
          },
        },

        detectRetina: true,
      }}
    />
  );
}

export default Particle;