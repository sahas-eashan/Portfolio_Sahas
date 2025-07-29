const particlesOptions = {
  background: { color: { value: "#0f172a" } },
  fpsLimit: 60,
  interactivity: {
    events: { onClick: { enable: true, mode: "push" }, onHover: { enable: true, mode: "repulse" } },
    modes: { push: { quantity: 4 }, repulse: { distance: 200, duration: 0.4 } },
  },
  particles: {
    color: { value: ["#06b6d4", "#a21caf", "#fde047"] },
    links: { enable: true, color: "#f9fafb", distance: 180, opacity: 0.3, width: 1 },
    collisions: { enable: false },
    move: { enable: true, speed: 2, outModes: { default: "bounce" } },
    number: { value: 60, density: { enable: true, area: 900 } },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 5 } },
  },
  detectRetina: true,
};
export default particlesOptions;
