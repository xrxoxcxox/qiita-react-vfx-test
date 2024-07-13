import { VFXSpan } from "react-vfx";

function App() {
  return (
    <div className="container">
      <VFXSpan shader="uvGradient">uvGradient</VFXSpan>
      <VFXSpan shader="rainbow">rainbow</VFXSpan>
      <VFXSpan shader="glitch">glitch</VFXSpan>
      <VFXSpan shader="rgbGlitch">rgbGlitch</VFXSpan>
      <VFXSpan shader="rgbShift">rgbShift</VFXSpan>
      <VFXSpan shader="shine">shine</VFXSpan>
      <VFXSpan shader="blink">blink</VFXSpan>
      <VFXSpan shader="spring">spring</VFXSpan>
      <VFXSpan
        shader="duotone"
        uniforms={{
          color1: [1, 0.2, 0.2, 1],
          color2: [0.2, 0.2, 1, 1],
          speed: 1,
        }}
      >
        duotone
      </VFXSpan>
      <VFXSpan
        shader="tritone"
        uniforms={{
          color1: [1, 0.2, 0.2, 1],
          color2: [0.2, 0.2, 1, 1],
          color3: [0.2, 1, 0.2, 1],
          speed: 1,
        }}
      >
        tritone
      </VFXSpan>
      <VFXSpan shader="hueShift" uniforms={{ shift: 0.2 }}>hueShift</VFXSpan>
      <VFXSpan shader="sinewave">sinewave</VFXSpan>
      <VFXSpan shader="pixelate">pixelate</VFXSpan>
      <VFXSpan shader="halftone">halftone</VFXSpan>
      <VFXSpan shader="slitScanTransition">slitScanTransition</VFXSpan>
      <VFXSpan shader="warpTransition">warpTransition</VFXSpan>
      <VFXSpan shader="pixelateTransition">pixelateTransition</VFXSpan>
    </div>
  );
}

export default App;
