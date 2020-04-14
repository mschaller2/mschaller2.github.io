import * as T from "../CS559-THREE/build/three.module.js";
import { GrWorld } from "../CS559-Framework/GrWorld.js";
import { GrObject } from "../CS559-Framework/GrObject.js";
import * as Helpers from "../CS559-Libs/helpers.js";
import { CubeTextureLoader } from "../CS559-THREE/build/three.module.js";



function test() {
  let parentOfCanvas = document.getElementById("div1");
  let world = new GrWorld({ where: parentOfCanvas });
  world.scene.background = new CubeTextureLoader().load(["../images/singapore.jpg"]);
  world.go();
}
Helpers.onWindowOnload(test);
