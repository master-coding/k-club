import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import styles from "./homepage.module.css";

function Earth() {
  const earthTexture = useLoader(TextureLoader, "/earth.webp");
  const earthRef = useRef();

  const axialTilt = (20 * Math.PI) / 180;

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.01;
      earthRef.current.rotation.x = 0.4;
    }
  });

  return (
    <group rotation-z={axialTilt}>
      <mesh ref={earthRef} scale={3}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={earthTexture} />
      </mesh>
    </group>
  );
}

export default function Homepage() {
  return (
    <div className={styles["homepage-container"]}>
      <div className={styles["content"]}>
        <h1 className={styles["title"]}>
          Think, Speak and Lead
          <br />
          with Confidence
        </h1>
        <p className={styles["subtitle"]}>
          Empowering leaders with the skills to positively influence their
          organizations.
        </p>
      </div>

      <div className={styles["earth"]}>
        <Canvas
          camera={{
            position: [0, 0, 10],
            fov: 50,
            near: 0.1,
            far: 1000,
          }}
        >
          <ambientLight />
          <pointLight position={[0, 0.1, 5]} />
          <Earth />
        </Canvas>
      </div>
    </div>
  );
}
