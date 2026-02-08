import React from 'react';
import { Float, Torus, Box, Sphere, Icosahedron, Octahedron } from '@react-three/drei';

const FloatingShapes = () => {
    return (
        <>
            {/* Left Side Shapes */}
            <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={[-4, 2, -3]}>
                <Torus args={[0.6, 0.2, 16, 32]} rotation={[0.5, 0.5, 0]}>
                    <meshStandardMaterial color="#ec4899" roughness={0.2} metalness={0.8} />
                </Torus>
            </Float>

            <Float speed={3} rotationIntensity={2} floatIntensity={1} position={[-5, -2, -5]}>
                <Box args={[0.8, 0.8, 0.8]} rotation={[0, 0.5, 0]}>
                    <meshStandardMaterial color="#8b5cf6" roughness={0.1} metalness={0.6} />
                </Box>
            </Float>

            <Float speed={1.5} rotationIntensity={1} floatIntensity={2} position={[-2, 3, -8]}>
                <Icosahedron args={[0.7, 0]} rotation={[0, 0, 0]}>
                    <meshStandardMaterial color="#3b82f6" roughness={0.3} metalness={0.5} wireframe />
                </Icosahedron>
            </Float>


            {/* Right Side Shapes */}
            <Float speed={2.5} rotationIntensity={1} floatIntensity={1.5} position={[4, -1, -2]}>
                <Sphere args={[0.4, 32, 32]}>
                    <meshStandardMaterial color="#06b6d4" roughness={0.1} metalness={0.9} />
                </Sphere>
            </Float>

            <Float speed={2} rotationIntensity={2} floatIntensity={1} position={[5, 2, -6]}>
                <Octahedron args={[0.9, 0]} rotation={[0, 0, 0.5]}>
                    <meshStandardMaterial color="#10b981" roughness={0.2} metalness={0.7} />
                </Octahedron>
            </Float>

            <Float speed={3} rotationIntensity={1} floatIntensity={2} position={[3, -3, -4]}>
                <Torus args={[0.3, 0.1, 16, 32]} rotation={[1, 0, 0]}>
                    <meshStandardMaterial color="#f59e0b" roughness={0.2} metalness={0.8} />
                </Torus>
            </Float>
        </>
    );
}

export default FloatingShapes;
