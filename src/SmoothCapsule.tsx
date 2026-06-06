import type { CSSProperties, ReactNode } from "react";

const CAP_VIEW_BOX_WIDTH = 18;
const CAP_VIEW_BOX_HEIGHT = 22;
const CAP_OVERLAP_WIDTH = 2;
const HIGHLIGHT_VIEW_BOX_WIDTH = 34;
const HIGHLIGHT_VIEW_BOX_HEIGHT = 22;
const CAP_PATH =
  "M17.999 22H15.8887C10.4723 21.9681 8.29397 21.7945 6.36426 20.8105C2.61471 19.1379 0.000151486 15.3751 0 11.001C0 6.62704 2.61407 2.86423 6.36328 1.19141L6.36426 1.18945C8.29371 0.205732 10.4725 0.0318421 15.8887 0H18";
const LEFT_HIGHLIGHT_SVG =
  '<svg width="34" height="22" viewBox="0 0 34 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_247_355)"><g filter="url(#filter0_f_247_355)"><path d="M18.1104 0L18.1148 -0.75H18.1104V0ZM27.6348 1.18945L28.3056 0.854043L28.1952 0.633355L27.9754 0.521284L27.6348 1.18945ZM27.6357 1.19141L26.9649 1.52682L27.085 1.76693L27.3301 1.87632L27.6357 1.19141ZM33.999 11.001L34.749 11.001V11.001H33.999ZM27.6348 20.8105L27.3292 20.1256L27.3114 20.1335L27.2941 20.1424L27.6348 20.8105ZM18.1104 22V22.75L18.1148 22.75L18.1104 22ZM15.8887 22L15.8843 22.75H15.8887V22ZM6.36426 20.8105L6.70494 20.1424L6.68758 20.1335L6.6698 20.1256L6.36426 20.8105ZM0 11.001H-0.75V11.001L0 11.001ZM6.36328 1.19141L6.66888 1.87632L6.91404 1.76693L7.0341 1.52682L6.36328 1.19141ZM6.36426 1.18945L6.0236 0.521284L5.80378 0.633355L5.69344 0.854043L6.36426 1.18945ZM15.8887 0V-0.750013L15.8843 -0.749987L15.8887 0ZM18.1104 0L18.1059 0.749987C23.5635 0.782073 25.5519 0.969349 27.2941 1.85762L27.6348 1.18945L27.9754 0.521284C25.8588 -0.557884 23.4894 -0.718389 18.1148 -0.749987L18.1104 0ZM27.6348 1.18945L26.9639 1.52486L26.9649 1.52682L27.6357 1.19141L28.3066 0.855996L28.3056 0.854043L27.6348 1.18945ZM27.6357 1.19141L27.3301 1.87632C30.8187 3.43285 33.249 6.93347 33.249 11.001H33.999H34.749C34.749 6.3206 31.9512 2.29562 27.9413 0.50649L27.6357 1.19141ZM33.999 11.001L33.249 11.001C33.2489 15.0686 30.8181 18.5693 27.3292 20.1256L27.6348 20.8105L27.9403 21.4955C31.9505 19.7066 34.7489 15.6816 34.749 11.001L33.999 11.001ZM27.6348 20.8105L27.2941 20.1424C25.5516 21.0308 23.5638 21.2179 18.1059 21.25L18.1104 22L18.1148 22.75C23.4896 22.7184 25.8585 22.5581 27.9754 21.4787L27.6348 20.8105ZM18.1104 22V21.25H15.8887V22V22.75H18.1104V22ZM15.8887 22L15.8931 21.25C10.4352 21.2179 8.44742 21.0308 6.70494 20.1424L6.36426 20.8105L6.02358 21.4787C8.14052 22.5581 10.5094 22.7184 15.8843 22.75L15.8887 22ZM6.36426 20.8105L6.6698 20.1256C3.18091 18.5693 0.750141 15.0686 0.75 11.001L0 11.001L-0.75 11.001C-0.749838 15.6816 2.04852 19.7066 6.05872 21.4955L6.36426 20.8105ZM0 11.001H0.75C0.75 6.93347 3.18032 3.43285 6.66888 1.87632L6.36328 1.19141L6.05768 0.50649C2.04783 2.29562 -0.75 6.3206 -0.75 11.001H0ZM6.36328 1.19141L7.0341 1.52682L7.03508 1.52486L6.36426 1.18945L5.69344 0.854043L5.69246 0.855996L6.36328 1.19141ZM6.36426 1.18945L6.70492 1.85762C8.44717 0.969349 10.4355 0.782073 15.8931 0.749987L15.8887 0L15.8843 -0.749987C10.5096 -0.718389 8.14026 -0.557884 6.0236 0.521284L6.36426 1.18945ZM15.8887 0V0.75H18.1104V0V-0.75H15.8887V0Z" fill="url(#paint0_radial_247_355)"/></g></g><defs><filter id="filter0_f_247_355" x="-1.5" y="-1.5" width="36.999" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="0.375" result="effect1_foregroundBlur_247_355"/></filter><radialGradient id="paint0_radial_247_355" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="scale(22.6672 22)"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></radialGradient><clipPath id="clip0_247_355"><rect width="34" height="22" fill="white"/></clipPath></defs></svg>';
const RIGHT_HIGHLIGHT_SVG =
  '<svg width="34" height="22" viewBox="0 0 34 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_248_367)"><g filter="url(#filter0_f_248_367)"><path d="M15.8896 22L15.8852 22.75H15.8896V22ZM6.36523 20.8105L5.69441 21.146L5.80476 21.3666L6.02457 21.4787L6.36523 20.8105ZM6.36426 20.8086L7.03508 20.4732L6.91502 20.2331L6.66986 20.1237L6.36426 20.8086ZM0.000976562 10.999L-0.749023 10.999V10.999H0.000976562ZM6.36523 1.18945L6.67077 1.8744L6.68856 1.86646L6.70591 1.85761L6.36523 1.18945ZM15.8896 0V-0.750013L15.8852 -0.749987L15.8896 0ZM18.1113 0L18.1157 -0.75H18.1113V0ZM27.6357 1.18945L27.2951 1.85761L27.3124 1.86646L27.3302 1.8744L27.6357 1.18945ZM34 10.999H34.75V10.999L34 10.999ZM27.6367 20.8086L27.3311 20.1237L27.086 20.2331L26.9659 20.4732L27.6367 20.8086ZM27.6357 20.8105L27.9764 21.4787L28.1962 21.3666L28.3066 21.146L27.6357 20.8105ZM18.1113 22V22.75L18.1157 22.75L18.1113 22ZM15.8896 22L15.8941 21.25C10.4365 21.2179 8.44814 21.0307 6.7059 20.1424L6.36523 20.8105L6.02457 21.4787C8.14124 22.5579 10.5106 22.7184 15.8852 22.75L15.8896 22ZM6.36523 20.8105L7.03605 20.4751L7.03508 20.4732L6.36426 20.8086L5.69344 21.144L5.69441 21.146L6.36523 20.8105ZM6.36426 20.8086L6.66986 20.1237C3.1813 18.5671 0.750977 15.0665 0.750977 10.999H0.000976562H-0.749023C-0.749023 15.6794 2.0488 19.7044 6.05866 21.4935L6.36426 20.8086ZM0.000976562 10.999L0.750977 10.999C0.751118 6.93142 3.18188 3.43072 6.67077 1.8744L6.36523 1.18945L6.05969 0.504511C2.0495 2.29338 -0.748863 6.31844 -0.749023 10.999L0.000976562 10.999ZM6.36523 1.18945L6.70591 1.85761C8.4484 0.969166 10.4362 0.782093 15.8941 0.749987L15.8896 0L15.8852 -0.749987C10.5104 -0.718369 8.14149 -0.558077 6.02456 0.521292L6.36523 1.18945ZM15.8896 0V0.75H18.1113V0V-0.75H15.8896V0ZM18.1113 0L18.1069 0.749987C23.5648 0.782093 25.5526 0.969166 27.2951 1.85761L27.6357 1.18945L27.9764 0.521292C25.8595 -0.558077 23.4906 -0.718369 18.1157 -0.749987L18.1113 0ZM27.6357 1.18945L27.3302 1.8744C30.8191 3.43072 33.2499 6.93142 33.25 10.999L34 10.999L34.75 10.999C34.7498 6.31844 31.9515 2.29338 27.9413 0.504511L27.6357 1.18945ZM34 10.999H33.25C33.25 15.0665 30.8197 18.5671 27.3311 20.1237L27.6367 20.8086L27.9423 21.4935C31.9522 19.7044 34.75 15.6794 34.75 10.999H34ZM27.6367 20.8086L26.9659 20.4732L26.9649 20.4751L27.6357 20.8105L28.3066 21.146L28.3075 21.144L27.6367 20.8086ZM27.6357 20.8105L27.2951 20.1424C25.5528 21.0307 23.5645 21.2179 18.1069 21.25L18.1113 22L18.1157 22.75C23.4904 22.7184 25.8597 22.5579 27.9764 21.4787L27.6357 20.8105ZM18.1113 22V21.25H15.8896V22V22.75H18.1113V22Z" fill="url(#paint0_radial_248_367)" fill-opacity="0.5"/></g></g><defs><filter id="filter0_f_248_367" x="-1.49902" y="-1.5" width="36.999" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="0.375" result="effect1_foregroundBlur_248_367"/></filter><radialGradient id="paint0_radial_248_367" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(34 22) rotate(180) scale(22.6672 22)"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></radialGradient><clipPath id="clip0_248_367"><rect width="34" height="22" fill="white"/></clipPath></defs></svg>';

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
  "--smooth-capsule-highlight-width": string;
  "--smooth-capsule-highlight-height": string;
  "--smooth-capsule-left-highlight": string;
  "--smooth-capsule-right-highlight": string;
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
const leftHighlightDataUri = createSvgDataUri(LEFT_HIGHLIGHT_SVG);
const rightHighlightDataUri = createSvgDataUri(RIGHT_HIGHLIGHT_SVG);

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
  const scaledHighlightWidth =
    (capsuleHeight * HIGHLIGHT_VIEW_BOX_WIDTH) / CAP_VIEW_BOX_HEIGHT;
  const scaledHighlightHeight =
    (capsuleHeight * HIGHLIGHT_VIEW_BOX_HEIGHT) / CAP_VIEW_BOX_HEIGHT;
  const rootClassName = className
    ? `smooth-capsule ${className}`
    : "smooth-capsule";
  const style: SmoothCapsuleStyle = {
    "--smooth-capsule-cap-width": `${scaledCapWidth}px`,
    "--smooth-capsule-cap-height": `${capsuleHeight}px`,
    "--smooth-capsule-cap-overlap": `${scaledCapOverlap}px`,
    "--smooth-capsule-highlight-width": `${scaledHighlightWidth}px`,
    "--smooth-capsule-highlight-height": `${scaledHighlightHeight}px`,
    "--smooth-capsule-left-highlight": highlight ? leftHighlightDataUri : "none",
    "--smooth-capsule-right-highlight": highlight
      ? rightHighlightDataUri
      : "none",
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
