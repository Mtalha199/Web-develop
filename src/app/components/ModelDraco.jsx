/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 modelDraco.gltf 
*/
'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/modelDraco.gltf')
  return (
    <group {...props} scale={[0.4,0.4,0.4]} dispose={null}>
      <mesh geometry={nodes.Circle001.geometry} material={materials.screen}
      //  position={[0, 3.085, 0]} 
      //  intensity={1}
      //  rotation={[-1.559, 0.415, 2.027]}
        // scale={0.619}
        >
        <mesh geometry={nodes.Circle002.geometry} material={materials['Touched Plastic Rough']} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/modelDraco.gltf')
