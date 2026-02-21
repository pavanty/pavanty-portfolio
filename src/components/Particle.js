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
      options={{
        fpsLimit: 60,
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          color: {
            value: "#ffffff",
          },
          links: {
            enable: false,
          },
          move: {
            enable: true,        // ← was missing!
            direction: "right",
            speed: 1,            // ← was 0.05, way too slow
            outModes: {
              default: "out",    // ← particles re-enter from the other side
            },
          },
          size: {
            value: { min: 1, max: 3 },
          },
          opacity: {
            value: 0.5,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              quantity: 1,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;