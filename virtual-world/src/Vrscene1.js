import React from 'react';
import 'aframe';
// import 'aframe-particle-system-component' ;
import {Entity, Scene} from 'aframe-react';

export default function Vrscene1() {
  return (
    <Scene>
        <a-assets>
          <img id="groundTexture" alt='groundTexture' src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
          <img id="skyTexture" alt='skyTexture' src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
        </a-assets>
        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
        <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
        {/* <Entity particle-system={{preset: 'snow'}}/> */}
        <Entity light={{type: 'point'}}/>
        <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
        <Entity text={{value: 'Hello, WebVR!'}}/>
      </Scene>
  )
}
