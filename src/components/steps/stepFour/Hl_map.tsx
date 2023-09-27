/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 hl_map.gltf -t -K -T 
Files: hl_map.gltf [1.4MB] > hl_map-transformed.glb [310.8KB] (78%)
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    hl_mp_stalkyard_1: THREE.Mesh
    hl_mp_stalkyard_2: THREE.Mesh
    hl_mp_stalkyard_3: THREE.Mesh
    hl_mp_stalkyard_4: THREE.Mesh
    hl_mp_stalkyard_5: THREE.Mesh
    hl_mp_stalkyard_6: THREE.Mesh
    hl_mp_stalkyard_7: THREE.Mesh
    hl_mp_stalkyard_8: THREE.Mesh
    hl_mp_stalkyard_9: THREE.Mesh
    hl_mp_stalkyard_10: THREE.Mesh
    hl_mp_stalkyard_11: THREE.Mesh
    hl_mp_stalkyard_12: THREE.Mesh
    hl_mp_stalkyard_13: THREE.Mesh
    hl_mp_stalkyard_14: THREE.Mesh
    hl_mp_stalkyard_15: THREE.Mesh
    hl_mp_stalkyard_16: THREE.Mesh
    hl_mp_stalkyard_17: THREE.Mesh
    hl_mp_stalkyard_18: THREE.Mesh
    hl_mp_stalkyard_19: THREE.Mesh
    hl_mp_stalkyard_20: THREE.Mesh
    hl_mp_stalkyard_21: THREE.Mesh
    hl_mp_stalkyard_22: THREE.Mesh
    hl_mp_stalkyard_23: THREE.Mesh
    hl_mp_stalkyard_24: THREE.Mesh
    hl_mp_stalkyard_25: THREE.Mesh
    hl_mp_stalkyard_26: THREE.Mesh
    hl_mp_stalkyard_27: THREE.Mesh
    hl_mp_stalkyard_28: THREE.Mesh
    hl_mp_stalkyard_29: THREE.Mesh
    hl_mp_stalkyard_30: THREE.Mesh
    hl_mp_stalkyard_31: THREE.Mesh
    hl_mp_stalkyard_32: THREE.Mesh
    hl_mp_stalkyard_33: THREE.Mesh
    hl_mp_stalkyard_34: THREE.Mesh
    hl_mp_stalkyard_35: THREE.Mesh
    hl_mp_stalkyard_36: THREE.Mesh
    hl_mp_stalkyard_37: THREE.Mesh
    hl_mp_stalkyard_38: THREE.Mesh
    hl_mp_stalkyard_39: THREE.Mesh
    hl_mp_stalkyard_40: THREE.Mesh
    hl_mp_stalkyard_41: THREE.Mesh
    hl_mp_stalkyard_42: THREE.Mesh
    hl_mp_stalkyard_43: THREE.Mesh
    hl_mp_stalkyard_44: THREE.Mesh
    hl_mp_stalkyard_45: THREE.Mesh
    hl_mp_stalkyard_46: THREE.Mesh
    hl_mp_stalkyard_47: THREE.Mesh
    hl_mp_stalkyard_48: THREE.Mesh
    hl_mp_stalkyard_49: THREE.Mesh
    hl_mp_stalkyard_50: THREE.Mesh
    hl_mp_stalkyard_51: THREE.Mesh
    hl_mp_stalkyard_52: THREE.Mesh
    hl_mp_stalkyard_53: THREE.Mesh
    hl_mp_stalkyard_54: THREE.Mesh
    hl_mp_stalkyard_55: THREE.Mesh
    hl_mp_stalkyard_56: THREE.Mesh
    hl_mp_stalkyard_57: THREE.Mesh
    hl_mp_stalkyard_58: THREE.Mesh
    hl_mp_stalkyard_59: THREE.Mesh
    hl_mp_stalkyard_60: THREE.Mesh
    hl_mp_stalkyard_61: THREE.Mesh
    hl_mp_stalkyard_62: THREE.Mesh
    hl_mp_stalkyard_63: THREE.Mesh
    hl_mp_stalkyard_64: THREE.Mesh
    hl_mp_stalkyard_65: THREE.Mesh
    hl_mp_stalkyard_66: THREE.Mesh
    hl_mp_stalkyard_67: THREE.Mesh
    hl_mp_stalkyard_68: THREE.Mesh
  }
  materials: {
    material_0: THREE.MeshStandardMaterial
    material_1: THREE.MeshStandardMaterial
    material_2: THREE.MeshStandardMaterial
    material_3: THREE.MeshStandardMaterial
    material_4: THREE.MeshStandardMaterial
    material_5: THREE.MeshStandardMaterial
    material_6: THREE.MeshStandardMaterial
    material_7: THREE.MeshStandardMaterial
    material_8: THREE.MeshStandardMaterial
    material_9: THREE.MeshStandardMaterial
    material_10: THREE.MeshStandardMaterial
    material_11: THREE.MeshStandardMaterial
    material_12: THREE.MeshStandardMaterial
    material_13: THREE.MeshStandardMaterial
    material_14: THREE.MeshStandardMaterial
    material_15: THREE.MeshStandardMaterial
    material_16: THREE.MeshStandardMaterial
    material_17: THREE.MeshStandardMaterial
    material_18: THREE.MeshStandardMaterial
    material_19: THREE.MeshStandardMaterial
    material_20: THREE.MeshStandardMaterial
    material_21: THREE.MeshStandardMaterial
    material_22: THREE.MeshStandardMaterial
    material_23: THREE.MeshStandardMaterial
    material_24: THREE.MeshStandardMaterial
    material_25: THREE.MeshStandardMaterial
    material_26: THREE.MeshStandardMaterial
    material_27: THREE.MeshStandardMaterial
    material_28: THREE.MeshStandardMaterial
    material_29: THREE.MeshStandardMaterial
    material_30: THREE.MeshStandardMaterial
    material_31: THREE.MeshStandardMaterial
    material_32: THREE.MeshStandardMaterial
    material_33: THREE.MeshStandardMaterial
    material_34: THREE.MeshStandardMaterial
    material_35: THREE.MeshStandardMaterial
    material_36: THREE.MeshStandardMaterial
    material_37: THREE.MeshStandardMaterial
    material_38: THREE.MeshStandardMaterial
    material_39: THREE.MeshStandardMaterial
    material_40: THREE.MeshStandardMaterial
    material_41: THREE.MeshStandardMaterial
    material_42: THREE.MeshStandardMaterial
    material_43: THREE.MeshStandardMaterial
    material_44: THREE.MeshStandardMaterial
    material_45: THREE.MeshStandardMaterial
    material_46: THREE.MeshStandardMaterial
    material_47: THREE.MeshStandardMaterial
    material_48: THREE.MeshStandardMaterial
    material_49: THREE.MeshStandardMaterial
    material_50: THREE.MeshStandardMaterial
    material_51: THREE.MeshStandardMaterial
    material_52: THREE.MeshStandardMaterial
    material_53: THREE.MeshStandardMaterial
    material_54: THREE.MeshStandardMaterial
    material_55: THREE.MeshStandardMaterial
    material_56: THREE.MeshStandardMaterial
    material_57: THREE.MeshStandardMaterial
    material_58: THREE.MeshStandardMaterial
    material_59: THREE.MeshStandardMaterial
    material_60: THREE.MeshStandardMaterial
    material_61: THREE.MeshStandardMaterial
    material_62: THREE.MeshStandardMaterial
    material_63: THREE.MeshStandardMaterial
    material_64: THREE.MeshStandardMaterial
    material_65: THREE.MeshStandardMaterial
    material_66: THREE.MeshStandardMaterial
    material_67: THREE.MeshStandardMaterial
  }
}

export function HlMapModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/hl_map-transformed.glb') as GLTFResult
  return (
    <group scale={0.025} position-y={-3.5} {...props} dispose={null}>
      <group>
        <group>
          <mesh geometry={nodes.hl_mp_stalkyard_1.geometry} material={materials.material_0} />
          <mesh geometry={nodes.hl_mp_stalkyard_2.geometry} material={materials.material_1} />
          <mesh geometry={nodes.hl_mp_stalkyard_3.geometry} material={materials.material_2} />
          <mesh geometry={nodes.hl_mp_stalkyard_4.geometry} material={materials.material_3} />
          <mesh geometry={nodes.hl_mp_stalkyard_5.geometry} material={materials.material_4} />
          <mesh geometry={nodes.hl_mp_stalkyard_6.geometry} material={materials.material_5} />
          <mesh geometry={nodes.hl_mp_stalkyard_7.geometry} material={materials.material_6} />
          <mesh geometry={nodes.hl_mp_stalkyard_8.geometry} material={materials.material_7} />
          <mesh geometry={nodes.hl_mp_stalkyard_9.geometry} material={materials.material_8} />
          <mesh geometry={nodes.hl_mp_stalkyard_10.geometry} material={materials.material_9} />
          <mesh geometry={nodes.hl_mp_stalkyard_11.geometry} material={materials.material_10} />
          <mesh geometry={nodes.hl_mp_stalkyard_12.geometry} material={materials.material_11} />
          <mesh geometry={nodes.hl_mp_stalkyard_13.geometry} material={materials.material_12} />
          <mesh geometry={nodes.hl_mp_stalkyard_14.geometry} material={materials.material_13} />
          <mesh geometry={nodes.hl_mp_stalkyard_15.geometry} material={materials.material_14} />
          <mesh geometry={nodes.hl_mp_stalkyard_16.geometry} material={materials.material_15} />
          <mesh geometry={nodes.hl_mp_stalkyard_17.geometry} material={materials.material_16} />
          <mesh geometry={nodes.hl_mp_stalkyard_18.geometry} material={materials.material_17} />
          <mesh geometry={nodes.hl_mp_stalkyard_19.geometry} material={materials.material_18} />
          <mesh geometry={nodes.hl_mp_stalkyard_20.geometry} material={materials.material_19} />
          <mesh geometry={nodes.hl_mp_stalkyard_21.geometry} material={materials.material_20} />
          <mesh geometry={nodes.hl_mp_stalkyard_22.geometry} material={materials.material_21} />
          <mesh geometry={nodes.hl_mp_stalkyard_23.geometry} material={materials.material_22} />
          <mesh geometry={nodes.hl_mp_stalkyard_24.geometry} material={materials.material_23} />
          <mesh geometry={nodes.hl_mp_stalkyard_25.geometry} material={materials.material_24} />
          <mesh geometry={nodes.hl_mp_stalkyard_26.geometry} material={materials.material_25} />
          <mesh geometry={nodes.hl_mp_stalkyard_27.geometry} material={materials.material_26} />
          <mesh geometry={nodes.hl_mp_stalkyard_28.geometry} material={materials.material_27} />
          <mesh geometry={nodes.hl_mp_stalkyard_29.geometry} material={materials.material_28} />
          <mesh geometry={nodes.hl_mp_stalkyard_30.geometry} material={materials.material_29} />
          <mesh geometry={nodes.hl_mp_stalkyard_31.geometry} material={materials.material_30} />
          <mesh geometry={nodes.hl_mp_stalkyard_32.geometry} material={materials.material_31} />
          <mesh geometry={nodes.hl_mp_stalkyard_33.geometry} material={materials.material_32} />
          <mesh geometry={nodes.hl_mp_stalkyard_34.geometry} material={materials.material_33} />
          <mesh geometry={nodes.hl_mp_stalkyard_35.geometry} material={materials.material_34} />
          <mesh geometry={nodes.hl_mp_stalkyard_36.geometry} material={materials.material_35} />
          <mesh geometry={nodes.hl_mp_stalkyard_37.geometry} material={materials.material_36} />
          <mesh geometry={nodes.hl_mp_stalkyard_38.geometry} material={materials.material_37} />
          <mesh geometry={nodes.hl_mp_stalkyard_39.geometry} material={materials.material_38} />
          <mesh geometry={nodes.hl_mp_stalkyard_40.geometry} material={materials.material_39} />
          <mesh geometry={nodes.hl_mp_stalkyard_41.geometry} material={materials.material_40} />
          <mesh geometry={nodes.hl_mp_stalkyard_42.geometry} material={materials.material_41} />
          <mesh geometry={nodes.hl_mp_stalkyard_43.geometry} material={materials.material_42} />
          <mesh geometry={nodes.hl_mp_stalkyard_44.geometry} material={materials.material_43} />
          <mesh geometry={nodes.hl_mp_stalkyard_45.geometry} material={materials.material_44} />
          <mesh geometry={nodes.hl_mp_stalkyard_46.geometry} material={materials.material_45} />
          <mesh geometry={nodes.hl_mp_stalkyard_47.geometry} material={materials.material_46} />
          <mesh geometry={nodes.hl_mp_stalkyard_48.geometry} material={materials.material_47} />
          <mesh geometry={nodes.hl_mp_stalkyard_49.geometry} material={materials.material_48} />
          <mesh geometry={nodes.hl_mp_stalkyard_50.geometry} material={materials.material_49} />
          <mesh geometry={nodes.hl_mp_stalkyard_51.geometry} material={materials.material_50} />
          <mesh geometry={nodes.hl_mp_stalkyard_52.geometry} material={materials.material_51} />
          <mesh geometry={nodes.hl_mp_stalkyard_53.geometry} material={materials.material_52} />
          <mesh geometry={nodes.hl_mp_stalkyard_54.geometry} material={materials.material_53} />
          <mesh geometry={nodes.hl_mp_stalkyard_55.geometry} material={materials.material_54} />
          <mesh geometry={nodes.hl_mp_stalkyard_56.geometry} material={materials.material_55} />
          <mesh geometry={nodes.hl_mp_stalkyard_57.geometry} material={materials.material_56} />
          <mesh geometry={nodes.hl_mp_stalkyard_58.geometry} material={materials.material_57} />
          <mesh geometry={nodes.hl_mp_stalkyard_59.geometry} material={materials.material_58} />
          <mesh geometry={nodes.hl_mp_stalkyard_60.geometry} material={materials.material_59} />
          <mesh geometry={nodes.hl_mp_stalkyard_61.geometry} material={materials.material_60} />
          <mesh geometry={nodes.hl_mp_stalkyard_62.geometry} material={materials.material_61} />
          <mesh geometry={nodes.hl_mp_stalkyard_63.geometry} material={materials.material_62} />
          <mesh geometry={nodes.hl_mp_stalkyard_64.geometry} material={materials.material_63} />
          <mesh geometry={nodes.hl_mp_stalkyard_65.geometry} material={materials.material_64} />
          <mesh geometry={nodes.hl_mp_stalkyard_66.geometry} material={materials.material_65} />
          <mesh geometry={nodes.hl_mp_stalkyard_67.geometry} material={materials.material_66} />
          <mesh geometry={nodes.hl_mp_stalkyard_68.geometry} material={materials.material_67} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/hl_map-transformed.glb')
