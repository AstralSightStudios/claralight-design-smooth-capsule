# @claralight-design/smooth-capsule

![Smooth Capsule preview](./assets/preview.png)

React component for rendering a smooth, glass-like capsule mask with configurable blur, tint, size, and highlight.

用于在 React 中渲染平滑玻璃质感胶囊遮罩的组件，支持配置模糊、色调、尺寸和高光。

## Features / 特性

- SVG-mask based capsule shape with smooth left and right caps.
- 基于 SVG mask 的胶囊形状，左右端帽过渡平滑。
- CSS backdrop blur and tint layer for glass-style UI.
- 使用 CSS 背景模糊和色调层实现玻璃质感。
- Size is driven by capsule height while preserving cap proportions.
- 通过胶囊高度控制尺寸，并保持端帽比例。
- Optional inset highlight for stronger depth.
- 可选内侧高光，用于增强层次感。
- Ships TypeScript types and a standalone CSS entry.
- 提供 TypeScript 类型和独立 CSS 入口。

## Installation / 安装

```bash
pnpm add @claralight-design/smooth-capsule
```

```bash
npm install @claralight-design/smooth-capsule
```

React 18 or later is required.

需要 React 18 或更高版本。

## Usage / 使用

Import the component and its stylesheet once in your application.

在应用中导入组件，并全局导入一次样式文件。

```tsx
import { SmoothCapsule } from "@claralight-design/smooth-capsule";
import "@claralight-design/smooth-capsule/smooth-capsule.css";

export function Example() {
  return (
    <SmoothCapsule>
      <span>平滑胶囊</span>
    </SmoothCapsule>
  );
}
```

With custom size and visual settings:

使用自定义尺寸和视觉参数：

```tsx
import { SmoothCapsule } from "@claralight-design/smooth-capsule";
import "@claralight-design/smooth-capsule/smooth-capsule.css";

export function CustomCapsule() {
  return (
    <SmoothCapsule
      capHeight={44}
      blur={24}
      tint="rgb(255 255 255 / 0.18)"
      highlight
    >
      <span style={{ width: 180, height: 44 }}>Smooth Capsule</span>
    </SmoothCapsule>
  );
}
```

## Props / 属性

| Prop / 属性 | Type / 类型 | Default / 默认值 | Description / 说明 |
| --- | --- | --- | --- |
| `capWidth` | `number` | `undefined` | Sets the reference cap width. If `capHeight` is not provided, height is calculated from this value. / 设置参考端帽宽度。未传入 `capHeight` 时，会根据该值计算高度。 |
| `capHeight` | `number` | `22` | Sets the capsule cap height. This is the primary size control. / 设置胶囊端帽高度，是主要尺寸控制项。 |
| `blur` | `number` | `24` | Backdrop blur radius in pixels. / 背景模糊半径，单位为像素。 |
| `tint` | `string` | `rgb(255 255 255 / 0.14)` | CSS color used as the translucent tint layer. / 用作半透明色调层的 CSS 颜色。 |
| `highlight` | `boolean` | `false` | Enables inset highlight and brighter backdrop filtering. / 启用内侧高光，并提高背景滤镜亮度。 |
| `className` | `string` | `undefined` | Additional class name applied to the root element. / 追加到根元素的类名。 |
| `children` | `ReactNode` | `undefined` | Content rendered inside the capsule. / 渲染在胶囊内部的内容。 |

## Styling Notes / 样式说明

The root element is an inline-flex `<span>`. The component defines CSS custom properties internally from props, then applies mask, blur, tint, and optional highlight through `smooth-capsule.css`.

根元素是一个 `inline-flex` 的 `<span>`。组件会根据属性生成 CSS 自定义属性，并通过 `smooth-capsule.css` 应用遮罩、模糊、色调和可选高光。

Child content controls the visible middle width. Set width, padding, or layout styles on the child element when you need a specific capsule length.

子内容会影响中间区域的可见宽度。需要固定胶囊长度时，请在子元素上设置宽度、内边距或布局样式。

## Local Development / 本地开发

Install dependencies:

安装依赖：

```bash
pnpm install
```

Start the Vite demo:

启动 Vite 演示：

```bash
pnpm dev
```

Build the package:

构建组件包：

```bash
pnpm build
```

## Package Exports / 包导出

```ts
export { SmoothCapsule } from "@claralight-design/smooth-capsule";
export type { SmoothCapsuleProps } from "@claralight-design/smooth-capsule";
```

```ts
import "@claralight-design/smooth-capsule/smooth-capsule.css";
```

## Browser Support / 浏览器支持

The component relies on CSS masks and `backdrop-filter`. For the intended glass effect, use browsers that support `mask-image`, `-webkit-mask-image`, and `backdrop-filter`.

组件依赖 CSS mask 和 `backdrop-filter`。如需完整玻璃效果，请使用支持 `mask-image`、`-webkit-mask-image` 和 `backdrop-filter` 的浏览器。

## License / 许可证

See [LICENSE](./LICENSE).
