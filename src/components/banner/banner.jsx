import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { WebIO } from "@gltf-transform/core";
import { KHRONOS_EXTENSIONS } from "@gltf-transform/extensions";
import { metalRough } from "@gltf-transform/functions";
import "./banner.css";
import { gsap } from "gsap";

const Banner = () => {
  const mountRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const currentMountRef = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(5, 5, 10);

    let mixer;
    let model;

    const loadAndConvertModel = async () => {
      const io = new WebIO().registerExtensions(KHRONOS_EXTENSIONS);
      const document = await io.read("/model/scene.gltf");

      await document.transform(metalRough());
      const glb = await io.writeBinary(document);

      const loader = new GLTFLoader();
      loader.parse(
        glb.buffer,
        "",
        (gltf) => {
          model = gltf.scene;

          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          model.position.sub(center);

          model.traverse((node) => {
            if (node.isMesh) {
              node.castShadow = true;
              node.receiveShadow = true;
            }
          });

          scene.add(model);

          mixer = new THREE.AnimationMixer(model);
          if (gltf.animations && gltf.animations.length > 0) {
            mixer.clipAction(gltf.animations[1]).play();
            modelMove();
          }
        },
        undefined,
        (error) => {
          console.error("An error occurred while loading the model", error);
        }
      );
    };

    loadAndConvertModel();

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    currentMountRef.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 2);
    topLight.position.set(50, 50, 50);
    topLight.castShadow = true;
    topLight.shadow.mapSize.set(1024, 1024);
    topLight.shadow.bias = -0.005;
    scene.add(topLight);

    const backLight = new THREE.DirectionalLight(0xffffff, 0.5);
    backLight.position.set(-10, 10, -10);
    scene.add(backLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;

    const onMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current = { x: mouseX, y: mouseY };
    };
    window.addEventListener("mousemove", onMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    const reRender3d = () => {
      requestAnimationFrame(reRender3d);
      controls.update();

      // Optional smooth model rotation
      if (model) {
        model.rotation.y += (mouseRef.current.x * Math.PI * 0.1 - model.rotation.y) * 0.05;
        model.rotation.x += (mouseRef.current.y * Math.PI * 0.1 - model.rotation.x) * 0.05;
      }

      const bannerText = document.querySelector(".banner h1");
      if (bannerText) {
        const rotationX = mouseRef.current.y * 20;
        const rotationY = mouseRef.current.x * 20;
        bannerText.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
      }

      renderer.render(scene, camera);
      if (mixer) mixer.update(0.02);
    };
    reRender3d();
    let arrPositionModel =[
      {
        id: 'bannerId',
        position: {x: 0, y: -2, z: 0},
        rotation: {x: 8, y: -4, z: 0},
        scale: {x: 0.5, y: 0.5, z: 0.5},
      },
      {
        id: 'followersCount',
        position: {x: 7, y: -1, z: 0},
        rotation: {x: -0.5, y: 0, z: 0},
        scale: {x: 0.2, y: 0.2, z: 0.2}
      },
      {
        id: 'aboutOne',
        position: {x: 7, y: 0.5, z: 0},
        rotation: {x: 0, y: -0.5, z: 0},
        scale: {x: 0.2, y: 0.2, z: 0.2}
      },
      {
        id: 'coreP',
        position: {x: 0, y: 0, z: 0},
        rotation: {x: 0, y: 0, z: 0},
        scale: {x: 0.5, y: 0.5, z: 0.5}
      },
      {
        id: 'podcast',
        position: {x: 7, y: 0.5, z: 0},
        rotation: {x: 0, y: -0.5, z: 0},
        scale: {x: 0.2, y: 0.2, z: 0.2}
      },
      {
        id: 'ama',
        position: {x: -10, y: -7, z: 0},
        rotation: {x: 0, y: -0.5, z: 0},
        scale: {x: 0.5, y: 0.5, z: 0.5}
      },
      {
      id: 'past',
      position: {x: 0, y: 0, z: 0},
      rotation: {x: 0, y: -0.5, z: 0},
      scale: {x: 0.1, y: 0.1, z: 0.1}
    }
    ]

    const modelMove = () => {
      const sections = document.querySelectorAll('.mainSection');
      let currentSectionId = null;
    
      sections.forEach((mainSection) => {
        const rect = mainSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
          currentSectionId = mainSection.id;
        }
      });
    
      let newCoordinate;
    
      if (currentSectionId) {
        newCoordinate = arrPositionModel.find(val => val.id === currentSectionId);
      } else {
        // No section is in view; revert to initial state
        newCoordinate = arrPositionModel[0]; // Assuming the first element is the initial state
      }
    
      if (newCoordinate) {
        gsap.to(model.position, {
          x: newCoordinate.position.x,
          y: newCoordinate.position.y,
          z: newCoordinate.position.z,
          duration: 1,
          ease: "power2.out"
        });
        gsap.to(model.rotation, {
          x: newCoordinate.rotation.x,
          y: newCoordinate.rotation.y,
          z: newCoordinate.rotation.z,
          duration: 1,
          ease: "power2.out"
        });
        gsap.to(model.scale, {
          x: newCoordinate.scale.x,
          y: newCoordinate.scale.y,
          z: newCoordinate.scale.z,
          duration: 1,
          ease: "power2.out"
        })
      }
    };
    

    window.addEventListener('scroll', () => {
      if (model) {
        modelMove();
      }
    });
    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect =window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });
    

    return () => {
      if (currentMountRef) {
        currentMountRef.removeChild(renderer.domElement);
      }
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="banner" >
      {/* Background Image */}
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      className="bannerBg"></div>

      {/* Title */}
      
      <h1 id="bannerId" className="mainSection">BUZZ</h1>
      <p className="quote">Where crypto becomes unforgettable</p>
      <p className="mini-info">
        Campaigns, live AMAs & interviews—Buzz is the media engine for the next generation of Web3.
      </p>

      {/* 3D Model Container */}
      <div ref={mountRef} id="container3D" className="banner-container"></div>
    </div>
  );
};

export default Banner;
