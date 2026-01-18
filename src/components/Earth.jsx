import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Points, PointMaterial, Ring } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const ParticleGlobe = (props) => {
    const ref = useRef();
    const sphere = random.inSphere(new Float32Array(3000), { radius: 1.2 });

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#60a5fa"
                    size={0.02}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const EarthModel = () => {
    const ref = useRef();
    const ringRef = useRef();

    useFrame((state, delta) => {
        ref.current.rotation.y += delta / 4;
        ringRef.current.rotation.z += delta / 8;
        ringRef.current.rotation.x += delta / 12;
    });

    return (
        <group>
            {/* Core Globe (Wireframe) */}
            <Sphere args={[1, 32, 32]} ref={ref} scale={1.8}>
                <meshStandardMaterial
                    color="#2563eb"
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </Sphere>

            {/* Inner Solid Core (Dark) */}
            <Sphere args={[0.9, 32, 32]} scale={1.8}>
                <meshBasicMaterial color="#000000" />
            </Sphere>

            {/* Orbital Ring */}
            <group ref={ringRef} rotation={[1, 0, 0]}>
                <Ring args={[2.2, 2.25, 64]} >
                    <meshBasicMaterial color="#93c5fd" side={2} transparent opacity={0.5} />
                </Ring>
            </group>

            {/* Another Orbital Ring */}
            <group rotation={[0, 1, 0]}>
                <Ring args={[2.5, 2.52, 64]} rotation={[0.5, 0, 0]} >
                    <meshBasicMaterial color="#3b82f6" side={2} transparent opacity={0.3} />
                </Ring>
            </group>
        </group>
    );
};

const Earth = () => {
    return (
        <div className="h-[400px] w-full flex items-center justify-center cursor-move">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#60a5fa" />

                {/* Particles Background/Aura */}
                <ParticleGlobe />

                <EarthModel />

                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
            </Canvas>
        </div>
    );
};

export default Earth;
