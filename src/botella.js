AFRAME.registerComponent('botella', {
  schema: {
    health: {type: 'int', default: 20},
    alive: {type: 'boolean', default: true},
    id: {type: 'int', default: 0}
  },

   tick: function () {
    var entity = this.el;
    
    // console.log(this.data.health);
    // // if (this.data.health <= 0) {
     // entity.parentNode.removeChild(entity);
     // }
    },
    init: function () {
     var data = this.data;
     var el = this.el;
     this.el.addEventListener( 'click', () => {
      console.log("click");
     })
     
     console.log("this.el.object3D",this.el.object3D );
     console.log("DATA Y EL",data,this.el.components);
     console.log("Botella 3d",this.el.components.botella);
    // this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
    // this.material = new THREE.MeshStandardMaterial({color: data.color});
   // this.mesh = new THREE.Mesh( this.geometry, this.material );
   // this.mesh.position.set(0,0,0)
    // el.setObject3D('mesh', this.mesh);
  },
   

  // randomDamage: function (min, max) {
  //          return Math.round(Math.random() * (max - min) + min);
  //          },

  // attackPlayer: function (damage) {
  //   var player = document.querySelector('#player');
  //   console.log(player.components.player.getHealth());
  //   player.components.player.reduceHealth(damage);
  //   player.components.player.updateHealthText();
  // },

  //  reduceHealth: function (damage) {
  //   // this.attackPlayer(this.randomDamage(1,3));
  //   if(this.data.health > 0)
  //     this.data.health -= damage;
  //   if(this.data.health <= 0) {
  //     this.data.alive = false;
  //     this.data.health = 0;
  //   }
  //  },

  //  getHealth: function () {
  //   return this.data.health;
  //  },

  //  isDead: function () {
  //   return !this.data.alive;
  //  },

  //  updateHealthText: function () {
  //   document.querySelector('#text-health-'+this.data.id).setAttribute('text', 'value', 'HP ' + this.data.health);
  //  }
});