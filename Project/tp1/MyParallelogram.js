import {CGFobject} from '../lib/CGF.js';
/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		//double-faced
		this.vertices = [
			0, 0, 0,	//canto esq inf -> 0
			1, 1, 0,	//canto esq sup -> 1
            3, 1, 0,    //canto sup dir -> 2
			2, 0, 0,	//canto dir inf -> 3

		];

		//Counter-clockwise reference of vertices
		this.indices = [
			2, 1, 0,
            0, 3, 2,
			0, 1, 2,
			2, 3, 0
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

