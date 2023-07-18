import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { SVGLoader } from '../loaders/SVGLoader';



const ThreeScene = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    // Code to set up your Three.js scene
  
    const loader = new SVGLoader();
    const svgPath = 'path/to/your/svg/file.svg';
  
    loader.load(svgPath, (data) => {
      const paths = data.paths;
      const group = new THREE.Group();
  
      for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
  
        const shapes = path.toShapes(true);
  
        for (let j = 0; j < shapes.length; j++) {
          const shape = shapes[j];
          const geometry = new THREE.ShapeGeometry(shape);
          const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
          const mesh = new THREE.Mesh(geometry, material);
          group.add(mesh);
        }
      }
  
      // Add the group to the scene or perform other operations with the loaded SVG data
      scene.add(group);
    });
  
    // Code to render and animate your scene
  const animate = () => {
    requestAnimationFrame(animate);
    // Code for scene animation
    renderer.render(scene, camera);
  };
  animate();
  }, []);
  

  return <div ref={sceneRef} />;
};

export default ThreeScene;
