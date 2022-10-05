import React from 'react';
import 'aframe';
// import 'aframe-particle-system-component' ;
import {Entity, Scene} from 'aframe-react';

export default function Vrscene1() {
  return (
    <Scene>
        <a-assets>
          <img id="groundTexture" alt='groundTexture' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpO0mXBq34shLam2y3TOpB6dGI-6eS-vK6mqOjcPST3KIuDm_RxknJzqYqC1nBFMX22gs&usqp=CAU"/>
          <img id="skyTexture" alt='skyTexture' src="https://images.pexels.com/photos/33834/landscape-shore-sunset-clouds.jpg?cs=srgb&dl=pexels-pixabay-33834.jpg&fm=jpg"/>
        </a-assets>
        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="200" width="160"/>
        <Entity primitive="a-sky" height="2048" radius="80" src="#skyTexture" theta-length="90" width="2048"/>
        <Entity geometry={{primitive: 'box'}} width='20' height='50'  material={{color: 'yellow'}} position={{x: -1, y: 0.5, z: -5}}/>
        <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
        <Entity geometry={{primitive: 'box'}} material={{color: 'red',side: 'double' }}  position={{x: -2, y: 0, z: -5}}/>
        {/* <Entity particle-system={{preset: 'snow'}}/> */}
        <Entity light={{type: 'point'}}/>
        <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
        <Entity text={{value: 'Hello, WebVR!'}} size='big' position={{x: 0, y: 2, z: -5}}/>
      </Scene>
  )
}
