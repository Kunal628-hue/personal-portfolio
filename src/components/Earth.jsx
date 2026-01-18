import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const EarthModel = () => {
    const ref = useRef();

    useFrame((state, delta) => {
        ref.current.rotation.y += delta / 4;
    });

    return (
        <group>
            {/* Core Globe */}
            <Sphere args={[1, 64, 64]} ref={ref} scale={2}>
                <meshStandardMaterial
                    color="#1d4ed8" /* blue-700 */
                    roughness={0.5}
                    metalness={0.5}
                    emissive="#1e3a8a"
                    emissiveIntensity={0.2}
                    wireframe={true}
                />
            </Sphere>
            {/* Atmosphere Glow */}
            <Sphere args={[1, 64, 64]} scale={2.2}>
                <meshStandardMaterial
                    color="#60a5fa"
                    opacity={0.1}
                    transparent
                    side={2} /* DoubleSide */
                />
            </Sphere>
        </group>
    );
};

const Earth = () => {
    return (
        <div className="h-[400px] w-full md:w-1/2">
            <Canvas camera={{ position: [0, 0, 6] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 3, 4]} intensity={1.5} />
                <EarthModel />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};

export default Earth;
