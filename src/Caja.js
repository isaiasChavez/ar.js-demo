AFRAME.registerComponent('box', {
  schema: {
    width: {type: 'number', default: 1},
    height: {type: 'number', default: 1},
    depth: {type: 'number', default: 1},
    color: {type: 'color', default: '#dfa'}
  },

  init: function () {
    var data = this.data;
   var el = this.el;
   
      const scene = document.getElementById('scene');
    const raycaster = document.getElementById("raycaster");
    // const camera = AFRAME.scenes[0].camera;
    console.log("SSSS",scene,raycaster);




    this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
    this.material = new THREE.MeshStandardMaterial({color: data.color});
   this.mesh = new THREE.Mesh( this.geometry, this.material );
   this.mesh.position.set(0,0,0)
    el.setObject3D('mesh', this.mesh);
  },

  /**
   * Update the mesh in response to property updates.
   */
 update: function( oldData ) {
   console.log("Old data?",oldData);
    var data = this.data;
    var el = this.el;

    // If `oldData` is empty, then this means we're in the initialization process.
    // No need to update.
    if (Object.keys(oldData).length === 0) { return; }

    // Geometry-related properties changed. Update the geometry.
    if (data.width !== oldData.width ||
        data.height !== oldData.height ||
        data.depth !== oldData.depth) {
      el.getObject3D('mesh').geometry = new THREE.BoxBufferGeometry(data.width, data.height,
                                                                    data.depth);
    }

    // Material-related properties changed. Update the material.
    if (data.color !== oldData.color) {
      el.getObject3D('mesh').material.color = new THREE.Color(data.color);
    }
  }
});