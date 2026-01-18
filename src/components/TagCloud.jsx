import React, { useMemo, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, TrackballControls } from '@react-three/drei';
import * as THREE from 'three';

const Word = ({ children, ...props }) => {
    const color = new THREE.Color();
    const fontProps = { fontSize: 2.2, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
    const ref = useRef()
    const [hovered, setHovered] = useState(false)
    const over = (e) => (e.stopPropagation(), setHovered(true))
    const out = () => setHovered(false)
    // Change the mouse cursor on hover
    useEffect(() => {
        if (hovered) document.body.style.cursor = 'pointer'
        return () => (document.body.style.cursor = 'auto')
    }, [hovered])
    // Tie component to the render-loop
    useFrame(({ camera }) => {
        // Make text face the camera
        ref.current.quaternion.copy(camera.quaternion)
        // Animate font color
        ref.current.material.color.lerp(color.set(hovered ? '#3b82f6' : 'white'), 0.1)
    })
    return <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...props} {...fontProps} children={children} />
}

const Cloud = ({ count = 4, radius = 23, words }) => {
    // Create a spherical distribution
    const keywords = useMemo(() => {
        const temp = []
        const spherical = new THREE.Spherical()
        const phiSpan = Math.PI / (words.length + 1)
        const thetaSpan = (Math.PI * 2) / words.length

        for (let i = 0; i < words.length; i++) {
            // distribute points on a sphere
            const phi = Math.acos(-1 + (2 * i) / words.length);
            const theta = Math.sqrt(words.length * Math.PI) * phi;

            const r = radius;
            // const x = r * Math.cos( theta ) * Math.sin( phi );
            // const y = r * Math.sin( theta ) * Math.sin( phi );
            // const z = r * Math.cos( phi );

            temp.push([new THREE.Vector3().setFromSpherical(spherical.set(r, phi, theta)), words[i]])
        }
        return temp
    }, [count, radius, words])
    return keywords.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}

const TagCloud = () => {
    const skills = [
        "Python", "Java", "HTML", "CSS", "JS", "React", "Git", "GitHub", "SQL", "Robotics",
        "Bootstrap", "Tailwind", "Arduino", "Figma", "Next.js", "Firebase"
    ];

    return (
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 40], fov: 90 }}>
            <fog attach="fog" args={['#000000', 35, 100]} />
            <Cloud words={skills} />
            <TrackballControls noZoom />
        </Canvas>
    )
}

export default TagCloud;
