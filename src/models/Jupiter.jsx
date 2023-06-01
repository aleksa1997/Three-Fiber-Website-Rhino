import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Jupiter(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "./models/jupiter/scene-transformed.glb"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.ArmatureAction.timeScale = 10;
    actions.ArmatureAction.play();
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.11}
        >
          <group name="Root">
            <group name="Armature">
              <primitive object={nodes.Armature_rootJoint} />
              <skinnedMesh
                name="JUPITER_0"
                geometry={nodes.JUPITER_0.geometry}
                material={materials.JUPITER}
                skeleton={nodes.JUPITER_0.skeleton}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/jupiter/scene-transformed.glb");
