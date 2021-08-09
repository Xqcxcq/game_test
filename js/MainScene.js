import getAirtable from "./database.js";
import Player from "./Player.js";
import Resource from "./Resource.js";
import Enemy from "./Enemy.js";
import Crafting from "./Crafting.js";
// import Airtable from "airtable";
export default class MainScene extends Phaser.Scene {
  constructor(){
    super("MainScene");
    this.enemies = [];
    this.score = 0;
  }

  preload() {
    Player.preload(this);
    Enemy.preload(this);
    Resource.preload(this);
    this.load.image('tiles','assets/images/RPG Nature Tileset-extruded.png');
    this.load.tilemapTiledJSON('map','assets/images/map.json');
  }

  create(){
    // this.airtable = new Airtable_T();
    // console.log(this.airtable);
    // this.base = new Airtable();
    this.base = getAirtable('keynlBiEgPbRGN9gU','appLbRGsK2IhZVI1I');
    var number = Math.ceil(Math.random()*100000);
    // this.base('Player_id').select({
    //     // Selecting the first 3 records in Grid view:
    //     maxRecords: 100,
    //     view: "Grid view"
    // }).eachPage(function page(records, fetchNextPage) {
    //     // This function (`page`) will get called for each page of records.
    
    //     records.forEach(function(record) {
    //         console.log('Retrieved', record.get('Name'));
    //         number++;
    //     });
    
    //     // To fetch the next page of records, call `fetchNextPage`.
    //     // If there are more records, `page` will get called again.
    //     // If there are no more records, `done` will get called.
    //     fetchNextPage();
    
    // }, function done(err) {
    //     if (err) { console.error(err); return; }
    // });
    this.no = number.toString();
    // console.log("aaaaa= ",number);
    // this.base('Player_id').create([
    //   {
    //     "fields": {
    //       "Name": number.toString()
    //     }
    //   },
    // ], function(err, records) {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }
    //   records.forEach(function (record) {
    //     console.log(record.getId());
    //   });
    // });
    this.input.setDefaultCursor('url(assets/images/cursor.png), pointer')
    const map = this.make.tilemap({key: 'map'});
    this.map = map;
    const tileset = map.addTilesetImage('RPG Nature Tileset','tiles',32,32,1,2);
    const layer1 = map.createStaticLayer('Tile Layer 1',tileset,0,0);
    const layer2 = map.createStaticLayer('Tile Layer 2',tileset,0,0);
    layer1.setCollisionByProperty({collides:true});
    this.matter.world.convertTilemapLayer(layer1);
    this.map.getObjectLayer('Resources').objects.forEach(resource =>new Resource({scene:this,resource}));
    
    // var timesRun = 0;
    // var interval = setInterval(()=>{
    //   timesRun += 1;
    //   if(timesRun === 2){
    //     clearInterval(interval);
    //   }
    //   //do whatever here..
    //   this.map.getObjectLayer('Resources').objects.forEach(resource =>new Resource({scene:this,resource}));
    //   console.log("new!");
    // }, 240000);

    // this.map.getObjectLayer('Enemies').objects.forEach(enemy => this.enemies.push(new Enemy({scene:this,enemy})));
    this.player = new Player({scene:this,x:200,y:220,texture:'female',frame:'townsfolk_f_idle_1'});
    this.player.inputKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    })
    let camera = this.cameras.main;
    camera.zoom = 2;
    camera.startFollow(this.player);
    camera.setLerp(0.1,0.1);
    camera.setBounds(0,0,this.game.config.width,this.game.config.height);
    this.scene.launch('InventoryScene',{mainScene:this});
    // this.scene.launch('CraftingScene2',{mainScene:this});
    this.crafting = new Crafting({mainScene:this});

    // this.input.keyboard.on('keydown-C',() => {
    //   if(this.scene.isActive("CraftingScene")){
    //     this.scene.stop('CraftingScene')
    //   }else{
    //     this.scene.launch('CraftingScene',{mainScene:this});
    //   }
    // })

    this.input.keyboard.on('keydown-C',() => {
      if(this.scene.isActive("CraftingScene2")){
        this.scene.stop('CraftingScene2')
      }else{
        this.scene.launch('CraftingScene2',{mainScene:this});
        console.log('show new craft');
      }
      if(this.scene.isActive("CraftingScene3")){
        this.scene.stop('CraftingScene3');
      }
    })

    this.input.keyboard.on('keydown-V',() => {
      if(this.scene.isActive("CraftingScene3")){
        this.scene.stop('CraftingScene3')
      }else{
        this.scene.launch('CraftingScene3',{mainScene:this});
        console.log('show new craft');
      }
      if(this.scene.isActive("CraftingScene2")){
        this.scene.stop('CraftingScene2');
      }
    })
    
  }

  map_new(scene){
    scene.map.getObjectLayer('Resources').objects.forEach(resource =>new Resource({scene:this,resource}));
  }

  update(){
    this.enemies.forEach(enemy => enemy.update());
    this.player.update();
    var times = 0;
    // while(times <= 15){
    //   setTimeout(() => {
    //   this.map.getObjectLayer('Resources').objects.forEach(resource =>new Resource({scene:this,resource}));
    //   times= times+1;
    //   }, 10000);
    // }   
  }
}