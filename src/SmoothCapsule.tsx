import type { CSSProperties, ReactNode } from "react";

const CAP_VIEW_BOX_WIDTH = 18;
const CAP_VIEW_BOX_HEIGHT = 22;
const CAP_OVERLAP_WIDTH = 2;
const CAP_PATH =
  "M17.999 22H15.8887C10.4723 21.9681 8.29397 21.7945 6.36426 20.8105C2.61471 19.1379 0.000151486 15.3751 0 11.001C0 6.62704 2.61407 2.86423 6.36328 1.19141L6.36426 1.18945C8.29371 0.205732 10.4725 0.0318421 15.8887 0H18";
const HIGHLIGHT_SHADOW = [
  "inset 0.75px 0.75px 0 rgb(255 255 255 / 0.35)",
  "inset 1.5px 1.5px 2px rgb(255 255 255 / 0.10)",
  "inset 0 0 0 0.5px rgb(255 255 255 / 0.18)",
  "inset -0.75px -0.75px 0 rgb(255 255 255 / 0.16)",
  "inset -1.5px -1.5px 2px rgb(255 255 255 / 0.08)",
].join(", ");

export interface SmoothCapsuleProps {
  capWidth?: number;
  capHeight?: number;
  blur?: number;
  tint?: string;
  highlight?: boolean;
  className?: string;
  children?: ReactNode;
}

type SmoothCapsuleStyle = CSSProperties & {
  "--smooth-capsule-cap-width": string;
  "--smooth-capsule-cap-height": string;
  "--smooth-capsule-cap-overlap": string;
  "--smooth-capsule-backdrop-brightness": string;
  "--smooth-capsule-highlight-shadow": string;
  "--smooth-capsule-left-mask": string;
  "--smooth-capsule-right-mask": string;
  "--smooth-capsule-blur": string;
  "--smooth-capsule-tint": string;
};

function createSvgDataUri(svg: string): string {
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

function createCapSvg(transform?: string): string {
  const transformAttribute = transform ? ` transform="${transform}"` : "";

  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${CAP_VIEW_BOX_WIDTH} ${CAP_VIEW_BOX_HEIGHT}">`,
    `<path${transformAttribute} fill="black" d="${CAP_PATH}"/>`,
    "</svg>",
  ].join("");
}

const leftCapDataUri = createSvgDataUri(createCapSvg());
const rightCapDataUri = createSvgDataUri(
  createCapSvg(`translate(${CAP_VIEW_BOX_WIDTH} 0) scale(-1 1)`),
);

export function SmoothCapsule({
  capWidth,
  capHeight,
  blur = 24,
  tint = "rgb(255 255 255 / 0.14)",
  highlight = false,
  className,
  children,
}: SmoothCapsuleProps) {
  const capsuleHeight =
    capHeight ??
    (capWidth ? (capWidth * CAP_VIEW_BOX_HEIGHT) / CAP_VIEW_BOX_WIDTH : 22);
  const scaledCapWidth =
    (capsuleHeight * CAP_VIEW_BOX_WIDTH) / CAP_VIEW_BOX_HEIGHT;
  const scaledCapOverlap =
    (capsuleHeight * CAP_OVERLAP_WIDTH) / CAP_VIEW_BOX_HEIGHT;
  const rootClassName = className
    ? `smooth-capsule ${className}`
    : "smooth-capsule";
  const style: SmoothCapsuleStyle = {
    "--smooth-capsule-cap-width": `${scaledCapWidth}px`,
    "--smooth-capsule-cap-height": `${capsuleHeight}px`,
    "--smooth-capsule-cap-overlap": `${scaledCapOverlap}px`,
    "--smooth-capsule-backdrop-brightness": highlight
      ? "brightness(1.25)"
      : "brightness(1)",
    "--smooth-capsule-highlight-shadow": highlight ? HIGHLIGHT_SHADOW : "none",
    "--smooth-capsule-left-mask": leftCapDataUri,
    "--smooth-capsule-right-mask": rightCapDataUri,
    "--smooth-capsule-blur": `${blur}px`,
    "--smooth-capsule-tint": tint,
  };

  return (
    <span className={rootClassName} style={style}>
      <span className="smooth-capsule__content">{children}</span>
    </span>
  );
}
