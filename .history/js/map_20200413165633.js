import * as T from "../CS559-THREE/build/three.module.js";
import { GrWorld } from "../CS559-Framework/GrWorld.js";
import { GrObject } from "../CS559-Framework/GrObject.js";
import * as InputHelpers from "../CS559-Libs/inputHelpers.js";
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
  let cube = new customObj();
  let box = new T.BoxGeometry(100, 100, 100);
  let texImg = new T.TextureLoader().load("../dragonfly.jpg");
  let tex = new T.MeshStandardMaterial({map: texImg, side: T.DoubleSide});
  let sky = new T.Mesh(box, tex);
  let skyBox = new GrObject("default:", sky);
  cube.objects.forEach(element => {
    element.translateY(1);
  });
  world.add(skyBox);
  world.add(cube);
  world.go();
}
Helpers.onWindowOnload(test);
