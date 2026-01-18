import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Float } from '@react-three/drei';
import * as THREE from 'three';

const Candle = ({ position, height, color }) => {
    return (
        <group position={position}>
            {/* Main Body */}
            <Box args={[0.8, height, 0.8]} position={[0, height / 2, 0]}>
                <meshStandardMaterial color={color} metalness={0.6} roughness={0.2} />
            </Box>
            {/* Wick */}
            <Box args={[0.1, height + 2, 0.1]} position={[0, (height + 2) / 2 - 1, 0]}>
                <meshStandardMaterial color="#4b5563" />
            </Box>
        </group>
    );
};

const MarketGraph = () => {
    const candles = useMemo(() => {
        const data = [];
        let prevClose = 0;

        for (let i = 0; i < 15; i++) {
            const isGreen = Math.random() > 0.45;
            const height = Math.random() * 3 + 1; // 1 to 4
            const color = isGreen ? '#22c55e' : '#ef4444'; // green-500 : red-500

            // Simple logic to place them next to each other
            // const y = prevClose; 
            // randomness for "open" relatively to prev close
            const yOffset = (Math.random() - 0.5) * 2;

            data.push({
                position: [(i - 7) * 1.5, yOffset, 0],
                height: height,
                color: color
            });
            prevClose += (isGreen ? 1 : -1) * (Math.random());
        }
        return data;
    }, []);

    const groupRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.3; // Gentle swaying
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <group ref={groupRef} rotation={[0.2, -0.5, 0]}>
                {candles.map((candle, index) => (
                    <Candle key={index} {...candle} />
                ))}
            </group>
        </Float>
    );
};

const Market3D = () => {
    return (
        <div className="h-[400px] w-full">
            <Canvas camera={{ position: [0, 2, 12], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 5]} intensity={1.5} />
                <pointLight position={[-5, 5, -5]} color="#22c55e" intensity={0.5} />
                <pointLight position={[5, -5, 5]} color="#ef4444" intensity={0.5} />

                <MarketGraph />

                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 1.5} />
            </Canvas>
        </div>
    );
};

export default Market3D;
