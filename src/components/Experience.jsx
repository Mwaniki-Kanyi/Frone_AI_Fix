import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Sparkles, Stars, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const OrganicShape = () => {
    const meshRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.x = Math.sin(time * 0.2) * 0.2;
        meshRef.current.rotation.y = Math.cos(time * 0.3) * 0.2;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={meshRef} position={[0, 0, -2]}>
                <icosahedronGeometry args={[2, 4]} />
                <meshStandardMaterial
                    color="#05fc00"
                    roughness={0.1}
                    metalness={0.9}
                    wireframe
                    transparent
                    opacity={0.15}
                />
            </mesh>
            <mesh position={[0, 0, -2]}>
                <icosahedronGeometry args={[1.9, 4]} />
                <meshStandardMaterial
                    color="#05fc00"
                    roughness={0.1}
                    metalness={0.5}
                    emissive="#05fc00"
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.05}
                />
            </mesh>
        </Float>
    );
};

const Scene = () => {
    return (
        <>
            <color attach="background" args={['#080809']} />
            <fog attach="fog" args={['#080809', 2, 12]} />

            <ambientLight intensity={0.5} />
            <pointLight position={[5, 10, 5]} intensity={2} color="#05fc00" />
            <spotLight position={[-5, 10, -5]} intensity={1} color="#ffffff" angle={0.3} penumbra={1} />

            <Sparkles
                count={200}
                scale={15}
                size={3}
                speed={0.4}
                opacity={0.5}
                color="#05fc00"
            />

            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            <OrganicShape />

            <ContactShadows
                position={[0, -4, 0]}
                opacity={0.4}
                scale={20}
                blur={2}
                far={4.5}
            />

            <Environment preset="night" />
        </>
    );
};

const Experience = () => {
    return (
        <div className="fixed inset-0 z-10 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Experience;
