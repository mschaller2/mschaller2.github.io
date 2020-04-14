import * as T from "../CS559-THREE/build/three.module.js";
import { GrWorld } from "../CS559-Framework/GrWorld.js";
import { GrObject } from "../CS559-Framework/GrObject.js";
import * as Helpers from "../CS559-Libs/helpers.js";
import { CubeTextureLoader } from "../CS559-THREE/build/three.module.js";

class customObj extends GrObject{
  constructor(){
    let obj = new T.BoxGeometry(2, 2, 2);
    let box = new T.MeshStandardMaterial({color: "red"});
    let mesh = new T.Mesh(obj, box);
    super("Custom", mesh);
  }
}

function test() {
  let parentOfCanvas = document.getElementById("div1");
  let world = new GrWorld({ where: parentOfCanvas });
  world.scene.background = new CubeTextureLoader().load(["../images/singapore.jpg"]);
  world.go();
}
Helpers.onWindowOnload(test);
