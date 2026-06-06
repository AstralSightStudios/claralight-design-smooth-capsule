import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Demo } from "./Demo";
import "./demo.css";
import "../src/smooth-capsule.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Demo />
  </StrictMode>,
);
