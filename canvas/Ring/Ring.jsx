import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import { useRecoilState } from 'recoil'
import { gemState } from '@/state/atoms/GemState'
import { metalState } from '@/state/atoms/metalState'

export default function Ring(props) {
  const [gem, setGem] = useRecoilState(gemState)
  const [metal, setMetal] = useRecoilState(metalState)
  const { nodes, materials } = useGLTF('/ring.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={[114.832, 115.326, 125.261]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
          <mesh geometry={nodes.Object_10.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_100.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_101.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_102.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_103.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_104.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_105.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_106.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_107.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_108.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_109.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_11.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_110.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_111.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_112.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_114.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_115.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_117.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_12.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_13.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_14.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_15.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_16.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_17.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_18.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_19.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_2.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_20.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_21.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_22.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_23.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_24.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_25.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_26.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_27.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_28.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_29.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_3.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_30.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_31.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_32.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_33.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_34.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_35.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_36.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_37.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_38.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_39.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_4.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_40.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_41.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_42.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_43.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_44.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_45.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_46.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_47.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_48.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_49.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_5.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_50.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_51.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_52.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_53.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_54.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_55.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_56.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_57.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_58.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_59.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_6.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_60.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_61.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_62.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_63.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_64.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_65.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_66.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_67.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_68.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_69.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_7.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_70.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_71.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_72.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_73.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_74.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_75.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_76.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_77.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_78.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_79.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_8.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_80.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_81.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_82.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_83.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_84.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_85.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_86.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_87.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_88.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_89.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_9.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_90.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_91.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_92.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_93.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_94.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_95.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_96.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_97.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_98.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_99.geometry} material={materials[metal]} />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
          <mesh geometry={nodes.Diamond_Round.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_10.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_11.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_12.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_13.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_14.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_15.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_16.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_17.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_18.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_19.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_2.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_20.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_21.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_22.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_23.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_24.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_25.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_26.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_27.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_28.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_29.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_3.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_30.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_31.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_32.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_33.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_34.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_35.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_36.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_37.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_38.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_39.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_4.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_40.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_41.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_42.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_43.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_44.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_45.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_46.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_47.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_48.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_49.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_5.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_50.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_51.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_52.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_53.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_54.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_55.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_56.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_57.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_58.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_59.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_6.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_7.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_8.geometry} material={materials[gem]} />
          <mesh geometry={nodes.Diamond_Round_9.geometry} material={materials[gem]} />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
          <mesh geometry={nodes.Object_119.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_120.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_121.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_122.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_123.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_124.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_125.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_126.geometry} material={materials[metal]} />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
          <mesh geometry={nodes.Object_118.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_127.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_128.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_129.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_130.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_131.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_132.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_133.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_134.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_135.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_136.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_137.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_138.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_139.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_140.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_141.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_142.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_143.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_144.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_145.geometry} material={materials[metal]} />
          <mesh geometry={nodes.Object_146.geometry} material={materials[metal]} />
        </group>
      </group>
      <PerspectiveCamera makeDefault={false} far={100} near={0.1} fov={22.895} position={[-0.132, 0.57, 6.508]} rotation={[-0.098, -0.009, -0.001]} />
    </group>
  )
}

useGLTF.preload('/ring.glb')
