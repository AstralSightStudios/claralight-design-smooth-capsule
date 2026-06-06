import { useEffect, useState } from "react";
import { SmoothCapsule } from "../src/SmoothCapsule";

export function Demo() {
  const [width, setWidth] = useState(180);
  const [height, setHeight] = useState(44);
  const [blur, setBlur] = useState(24);
  const [blurEnabled, setBlurEnabled] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState<string>();

  useEffect(() => {
    return () => {
      if (backgroundImage) {
        URL.revokeObjectURL(backgroundImage);
      }
    };
  }, [backgroundImage]);

  function handleBackgroundChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0];

    if (!file) {
      return;
    }

    const nextBackgroundImage = URL.createObjectURL(file);

    if (backgroundImage) {
      URL.revokeObjectURL(backgroundImage);
    }

    setBackgroundImage(nextBackgroundImage);
  }

  return (
    <main
      className={backgroundImage ? "demo-page demo-page--image" : "demo-page"}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      <section className="demo-preview" aria-label="组件预览">
        <SmoothCapsule
          capHeight={height}
          blur={blurEnabled ? blur : 0}
          tint="rgb(255 255 255 / 0.18)"
        >
          <span
            className="demo-capsule-content"
            style={{ width, height }}
          >
            Smooth Capsule
          </span>
        </SmoothCapsule>
      </section>

      <form className="demo-controls">
        <label className="demo-field">
          <span>宽度</span>
          <input
            min="96"
            max="360"
            type="range"
            value={width}
            onChange={(event) => setWidth(Number(event.currentTarget.value))}
          />
          <output>{width}px</output>
        </label>

        <label className="demo-field">
          <span>高度</span>
          <input
            min="22"
            max="96"
            type="range"
            value={height}
            onChange={(event) => setHeight(Number(event.currentTarget.value))}
          />
          <output>{height}px</output>
        </label>

        <label className="demo-field">
          <span>模糊</span>
          <input
            min="0"
            max="48"
            type="range"
            value={blur}
            onChange={(event) => setBlur(Number(event.currentTarget.value))}
          />
          <output>{blur}px</output>
        </label>

        <label className="demo-switch">
          <input
            type="checkbox"
            checked={blurEnabled}
            onChange={(event) => setBlurEnabled(event.currentTarget.checked)}
          />
          <span>启用模糊</span>
        </label>

        <label className="demo-file">
          <span>背景图片</span>
          <input
            accept="image/*"
            type="file"
            onChange={handleBackgroundChange}
          />
        </label>
      </form>
    </main>
  );
}
