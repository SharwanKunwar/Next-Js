
# 🛠️ React Three Fiber (R3F) Helper Tools

This guide introduces helpful tools in **React Three Fiber (R3F)** that enhance development experience, orientation, and debugging in 3D scenes.

## 📦 Installation

Make sure you have `@react-three/fiber` and `@react-three/drei` installed:

```bash
npm install @react-three/fiber @react-three/drei three
```

---

## 🔭 Gizmo Helpers

### 🔹 `GizmoHelper` + `GizmoViewport`

Shows a small interactive cube in the corner that lets you quickly rotate your scene to top, front, side, etc.

```jsx
import { GizmoHelper, GizmoViewport } from '@react-three/drei'

<GizmoHelper alignment="bottom-right" margin={[80, 80]}>
  <GizmoViewport 
    axisColors={['red', 'green', 'blue']} 
    labelColor="white" 
  />
</GizmoHelper>
```

---

### 🔹 `GizmoHelper` + `Viewcube`

A stylized orientation cube alternative to `GizmoViewport`.

```jsx
import { GizmoHelper, Viewcube } from '@react-three/drei'

<GizmoHelper alignment="top-right" margin={[100, 100]}>
  <Viewcube />
</GizmoHelper>
```

---

## 🧱 Scene Helpers

### 🔹 `gridHelper`

Adds a floor/grid for better spatial awareness.

```jsx
<gridHelper args={[10, 10]} />
```

- `args`: `[size, divisions]`

---

### 🔹 `axesHelper`

Displays the XYZ axes in red (X), green (Y), and blue (Z).

```jsx
<axesHelper args={[5]} />
```

- `args`: `[size]`

---

## 🌐 Full Example

```jsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls, GizmoHelper, GizmoViewport } from '@react-three/drei'

function Scene() {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight position={[2, 2, 2]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      <gridHelper args={[10, 10]} />
      <axesHelper args={[5]} />
      <OrbitControls />

      <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
        <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="white" />
      </GizmoHelper>
    </Canvas>
  )
}
```

---

## 🧠 Summary

- Use **`GizmoViewport`** or **`Viewcube`** for orientation controls.
- Add **`gridHelper`** and **`axesHelper`** to visually debug your 3D space.
- Combine with **`OrbitControls`** for full user navigation experience.

---

## 📚 References

- [React Three Fiber Documentation](https://docs.pmnd.rs/react-three-fiber)
- [Drei Helpers](https://docs.pmnd.rs/drei)
