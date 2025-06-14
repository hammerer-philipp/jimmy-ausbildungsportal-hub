import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingCubeProps {
  position: [number, number, number];
  color: string;
  size?: number;
}

export const FloatingCube = ({ position, color, size = 1 }: FloatingCubeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <Box ref={meshRef} position={position} args={[size, size, size]}>
      <meshStandardMaterial color={color} transparent opacity={0.8} />
    </Box>
  );
};