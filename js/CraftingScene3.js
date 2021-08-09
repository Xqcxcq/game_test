import items from "./Items.js";
import UIBaseScene from "./UIBaseScene.js";
import DropItem from "./DropItem.js";

export default class CraftingScene3 extends UIBaseScene{
    constructor(){
        super("CraftingScene3");
        this.rows = 1;
        this.gridSpacing = 4;
        this.newCraftingSlot = [];
        this.uiScale = 1.0;
        this.item_num=[-1,-1,-1];
        // this.item1_num = 0;
        // this.item2_num = 0;
        // this.item3_num = 0;
    }
    init(data) {
        let { mainScene } = data;
        this.mainScene = mainScene;
        this.inventory = mainScene.player.inventory;
        this.maxColumns = 2;
        this.maxRows = 1;
        this.player = mainScene.player;
        this.no = mainScene.no;
        this.base = mainScene.base;
    }

    static preload(scene){
        // scene.load.image('new_background','assets/images/background.png');
    }

    destroyCraftingSlot(newCraftingSlot){
        newCraftingSlot.item.destroy();
        newCraftingSlot.destroy();
    }

    chooseCraftingItem1(){
        let index = 0;
        var length = 0;
        for(let i = 0;i<40;i++){
            if(this.inventory.getItem(i)) continue;
            else{length = i; break;}
        }
        this.item_num[0] = (this.item_num[0] + 1)%length;
        if(this.newCraftingSlot[index].item) this.newCraftingSlot[index].item.destroy();
        let item = this.inventory.getItem(this.item_num[0]);
        let x = this.margin + this.tileSize / 2;
        let y = this.margin + this.tileSize / 2 + Math.floor(index/this.maxColumns) * (this.tileSize + this.gridSpacing) + this.game.config.height / 2; 
        let a = items[item.name].frame;
        this.newCraftingSlot[index].item = this.add.sprite(x,y,"items",a);
        
        
    }

    chooseCraftingItem2(){
        let index = 1;
        var length = 0;
        for(let i = 0;i<40;i++){
            if(this.inventory.getItem(i)) continue;
            else{length = i; break;}
        }
        this.item_num[1] = (this.item_num[1] + 1)%length;
        if(this.newCraftingSlot[index].item) this.newCraftingSlot[index].item.destroy();
        let item = this.inventory.getItem(this.item_num[1]);
        
        let x = this.margin + this.tileSize / 2 + (index % this.maxColumns) * (this.tileSize + this.gridSpacing);
        let y = this.margin + this.tileSize / 2 + Math.floor(index/this.maxColumns) * (this.tileSize + this.gridSpacing) + this.game.config.height / 2; 
        let a = items[item.name].frame;
      
        this.newCraftingSlot[index].item = this.add.sprite(x,y,"items",a);
    }

    create(){
        // this.add.image(128,128,'new_background').setOrigin(0,0);
        for (let index = 0; index < this.maxColumns; index++) {
            let x = this.margin + this.tileSize / 2 + (index % this.maxColumns) * (this.tileSize + this.gridSpacing);
            let y = this.margin + this.tileSize / 2 + Math.floor(index/this.maxColumns) * (this.tileSize + this.gridSpacing) + this.game.config.height / 2; 
            this.newCraftingSlot[index] = this.add.sprite(x,y,"items",11);
        }
        this.movementText = this.add.text( this.margin,this.margin + this.tileSize / 2 + this.game.config.height / 2 + this.tileSize/2,'2 items\nusing \'R\' \'T\' to choose\n\'E\' to craft\nFirst must be synthesis\nSecond must be collection',{fontSize: '16px', fill:'#000'});
        this.input.keyboard.on("keydown-R", () =>{
            this.chooseCraftingItem1();
        });
        this.input.keyboard.on("keydown-T", () =>{
            this.chooseCraftingItem2();
        });
        
        this.input.keyboard.on("keyup-E", () =>{
            this.crafting();
        });
    }

    get_item(itemname){
        for(let i = 0;i<40;i++){
            if(this.inventory.getItem(i)&&this.inventory.getItem(i).name === itemname) return i;
        }
    }

    check(){
        console.log("show what are using for crafting");
        console.log(this.newCraftingSlot);
        console.log("this is the inventory");
        console.log(this.inventory.items);
        var cou = 0;
        
        var flag = false;
        var result = true;
        for(let index = 0; index < 2; index++){
            var item = this.newCraftingSlot[index].item;
            console.log("level: ")
            console.log(items[this.inventory.items[this.item_num[index]].name].level);
            if(item && items[this.inventory.items[this.item_num[index]].name].level !== 4) {
                cou++;
            }
        }

        console.log("how many items are using: "+ cou);
        if(cou < 2){ 
            alert("2 items should be used for this!");
            result = false;
        }
        console.log(items[this.inventory.items[this.item_num[0]].name].type);
        if(items[this.inventory.items[this.item_num[0]].name].type !=="s"){
            alert("The first item should be synthesis.");
            result = false;
        }
        if(items[this.inventory.items[this.item_num[1]].name].type !=="c"){
            alert("The second item should be collection.");
            result = false;
        }
        // for(let index = 0; index < 3; index++){
        //     if(this.newCraftingSlot[index].item && this.newCraftingSlot[index].item.level != 4) {
        //         cou++;
        //         let existingKey = Object.keys(this.inventory.items).find(key => this.inventory.items[key].name === newCraftingSlot.name);
        //         this.inventory.items[existingKey].quantity ++;
        //     }
        // }
        return result;
    }

    crafting(){
        if(!this.check()) return;
        var cou = 2;
        var cat = [0.0, 0.0, 0.0, 0.0];
        var level = 0;
        var cate;
        var item_re_name = ["",""];
        var item_re_level = ["",""];
        var item_re_category = ["",""]; 
        for(let index = 0; index < cou; index++){
            var inv_item = this.inventory.getItem(this.item_num[index]);
            console.log("the item in index " + index + "is:");
            console.log(inv_item);
            var item = items[inv_item.name];
            this.inventory.removeItem(inv_item.name)
            if(item && item.level !== 4) {
                item_re_name[index] = item.name.toString();
                item_re_level[index] = item.level.toString();
                if(item.type === 'c'){
                    item_re_category[index] = 'c';
                    for(let i = 0; i < 4; i++){
                        cat[i]+= (item.tendency[i]*(1/cou));
                    }
                }
                else{
                    item_re_category[index] = item.category.toString();
                    level = item.level + 1;
                    // console.log("level "+level);
                    if(item.category==="forging") cat[0]+=1/cou;
                    else if(item.category==="crafting") cat[1]+=1/cou;
                    else if(item.category==="food") cat[2]+=1/cou;
                    else cat[3]+=1/cou;
                }
            }
        }
        var aaa = Math.ceil(Math.random()*100);
        var fin_result='';
        if(aaa < 50){
            fin_result = "fail";
        }
        else{
            fin_result = "success";
            var num = Math.ceil(Math.random()*100);
            if(num < cat[0]*100) cate = "forging";
            else if(num < (cat[0]+cat[1])*100) cate = "crafting";
            else if(num < (cat[0]+cat[1]+cat[2])*100) cate = "food";
            else  cate = "alchemy";
            if(level === 4){
                let item1 = items["fin_item"];
                console.log(item1);
                var x = new DropItem({ name:"fin_item",scene:this.mainScene,x:this.player.x -32,y:this.player.y,frame:item1.frame});
            }
            else{
                let newitems = Object.keys(items).filter(function(i) { return (items[i].category === cate && items[i].level === level);})
                num = Math.floor(Math.random()*(4-level));
                let item1 = items[newitems[num]];
                console.log(item1);
                var x = new DropItem({ name:newitems[num],scene:this.mainScene,x:this.player.x -32,y:this.player.y,frame:item1.frame});
                console.log(x);
                this.player.score+=Math.pow(2,level+2);
            }
        }
        this.base("Risky_generate").create([
            {
                "fields": {
                  "Name": this.no,
                  "item1_name": item_re_name[0].toString(),
                  "item1_level": item_re_level[0].toString(),
                  "item1_type": item_re_category[0].toString(),
                  "item2_name": item_re_name[1].toString,
                  "sucess_rate": fin_result.toString()
                }
              }
          ], function(err, records) {
            if (err) {
              console.error(err);
              return;
            }
            records.forEach(function (record) {
              console.log(record.getId());
            });
          });
        for (let i=0;i<cou;i++){
            if(this.newCraftingSlot[i].item) this.newCraftingSlot[i].item.destroy();
        }
        this.mainScene.scene.stop('CraftingScene3');
        this.item_num=[-1,-1,-1];
        // this.destroyCraftingSlot(this.newCraftingSlot);
        //delete this.newCraftingSlot.item;
        // delete this.newCraftingSlot;
        // this.newCraftingSlot.destroy();
    }
    destroyCrafting2Slot(inventorySlot) {
        if(inventorySlot.item) inventorySlot.item.destroy();
        if(inventorySlot.quantityText) inventorySlot.quantityText.destroy();
        inventorySlot.destroy();
    }
}