import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { FloatingCube } from './FloatingCube';

export const Scene3D = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ffd000" />
        
        <Environment preset="city" />
        
        <FloatingCube position={[2, 1, 0]} color="#ffd000" size={0.8} />
        <FloatingCube position={[-2, -1, -1]} color="#333333" size={1.2} />
        <FloatingCube position={[0, 2, -2]} color="#ffd000" size={0.6} />
        <FloatingCube position={[3, -2, 1]} color="#333333" size={0.9} />
        <FloatingCube position={[-3, 1, 2]} color="#ffd000" size={0.7} />
      </Canvas>
    </div>
  );
};