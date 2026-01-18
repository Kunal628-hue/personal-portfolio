import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Grid, Stars } from '@react-three/drei';

const MovingPlane = () => {
    const gridRef = useRef();

    useFrame((state, delta) => {
        if (gridRef.current) {
            gridRef.current.position.z = (state.clock.elapsedTime * 2) % 10;
        }
    })

    return (
        <group position={[0, -2, -20]}>
            <Grid
                ref={gridRef}
                args={[100, 100]}
                cellSize={1}
                cellThickness={1}
                sectionSize={5}
                sectionThickness={1.5}
                fadeDistance={50}
                sectionColor="#00ff88"
                cellColor="#005522"
                infiniteGrid={true}
            />
        </group>
    )
}

const VaporwaveSun = () => {
    return (
        <mesh position={[0, 5, -30]}>
            <circleGeometry args={[8, 64]} />
            <meshBasicMaterial color="#d946ef" /> {/* Fuchsia-500 */}
        </mesh>
    )
}

const CyberFooter = () => {
    return (
        <footer className="relative h-[300px] w-full bg-black overflow-hidden border-t border-gray-900">
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
                    <fog attach="fog" args={['#000000', 5, 50]} />
                    <MovingPlane />
                    <VaporwaveSun />
                    <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                </Canvas>
            </div>

            <div className="relative z-10 h-full flex flex-col justify-end pb-8 items-center text-center pointer-events-none">
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-600 mb-2 font-mono">
                    SYSTEM_SHUTDOWN // COMPLETED
                </h3>
                <p className="text-gray-500 text-xs font-mono">
                    &copy; {new Date().getFullYear()} Kunal Singhi. Executing Portfolio.exe
                </p>
            </div>

            {/* Vignette/Fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
        </footer>
    );
};

export default CyberFooter;
