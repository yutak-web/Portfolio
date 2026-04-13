import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import type { Group, Mesh } from 'three'

function ParticleField() {
  const groupRef = useRef<Group>(null)
  const particles = useMemo(
    () =>
      Array.from({ length: 36 }, (_, index) => ({
        position: [
          ((index % 6) - 2.5) * 1.8,
          (Math.floor(index / 6) - 2.5) * 1.3,
          (index % 3) * -1.1,
        ] as [number, number, number],
        scale: 0.06 + (index % 5) * 0.02,
        speed: 0.4 + (index % 7) * 0.06,
      })),
    [],
  )

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(time * 0.12) * 0.04
      groupRef.current.position.y = Math.sin(time * 0.2) * 0.08
    }

    groupRef.current?.children.forEach((child, index) => {
      const mesh = child as Mesh
      const particle = particles[index]
      mesh.position.y =
        particle.position[1] + Math.sin(time * particle.speed + index) * 0.12
      mesh.position.x =
        particle.position[0] + Math.cos(time * particle.speed * 0.7 + index) * 0.08
    })
  })

  return (
    <group ref={groupRef}>
      {particles.map((particle, index) => (
        <mesh key={index} position={particle.position} scale={particle.scale}>
          <sphereGeometry args={[1, 24, 24]} />
          <meshStandardMaterial
            color={index % 4 === 0 ? '#67a6ff' : '#d5e7ff'}
            transparent
            opacity={index % 4 === 0 ? 0.9 : 0.5}
            roughness={0.2}
            metalness={0.1}
          />
        </mesh>
      ))}
    </group>
  )
}

function AccentRings() {
  const ringRef = useRef<Group>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    if (!ringRef.current) return

    ringRef.current.rotation.x = Math.sin(time * 0.2) * 0.18 + 1.1
    ringRef.current.rotation.y = time * 0.08
    ringRef.current.rotation.z = Math.cos(time * 0.16) * 0.1
  })

  return (
    <group ref={ringRef} position={[2.9, 1.6, -1.2]}>
      {[1.1, 1.6, 2.15].map((radius, index) => (
        <mesh key={radius} rotation={[Math.PI / 2, 0, index * 0.45]}>
          <torusGeometry args={[radius, 0.018, 16, 100]} />
          <meshBasicMaterial
            color={index === 1 ? '#3e86ff' : '#bdd8ff'}
            transparent
            opacity={index === 1 ? 0.75 : 0.45}
          />
        </mesh>
      ))}
    </group>
  )
}

export function SceneBackground() {
  return (
    <div className="scene-background" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 6.5], fov: 48 }}>
        <color attach="background" args={['#f8fbff']} />
        <fog attach="fog" args={['#f8fbff', 5, 12]} />
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 4, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-3, -2, 4]} intensity={0.9} color="#7aaeff" />
        <ParticleField />
        <AccentRings />
      </Canvas>
    </div>
  )
}
