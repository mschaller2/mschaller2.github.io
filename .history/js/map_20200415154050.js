/*
import * as T from "../CS559-THREE/build/three.module.js";
import { GrWorld } from "../CS559-Framework/GrWorld.js";
import { GrObject } from "../CS559-Framework/GrObject.js";
import * as Helpers from "../CS559-Libs/helpers.js";
import { CubeTextureLoader } from "../CS559-THREE/build/three.module.js";


var con


function test() {
  let parentOfCanvas = document.getElementById("div1");
  let world = new GrWorld({ where: parentOfCanvas });
  world.scene.background = new CubeTextureLoader().load(["../images/singapore.jpg","../images/singapore.jpg","../images/singapore.jpg","../images/singapore.jpg","../images/singapore.jpg","../images/singapore.jpg"]);
  world.go();
}
Helpers.onWindowOnload(test);
*/
/**
 * dat.globe Javascript WebGL Globe Toolkit
 * http://dataarts.github.com/dat.globe
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */
import * as DAT from "../webgl-globe-master/globe";

// Where to put the globe?
var container = document.getElementById('container');

// Make the globe
var globe = new DAT.Globe( container );

/*
// We're going to ask a file for the JSON data.
var xhr = new XMLHttpRequest();

// Where do we get the data?
xhr.open( 'GET', 'myjson.json', true );

// What do we do when we have it?
xhr.onreadystatechange = function() {

    // If we've received the data
    if ( xhr.readyState === 4 && xhr.status === 200 ) {

        // Parse the JSON
        var data = JSON.parse( xhr.responseText );

        // Tell the globe about your JSON data
        for ( var i = 0; i < data.length; i ++ ) {
            globe.addData( data[i][1], {format: 'magnitude', name: data[i][0]} );
        }

        // Create the geometry
        globe.createPoints();

        // Begin animation
        globe.animate();

    }

};
*/
// Begin request
globe.animate();
xhr.send( null );