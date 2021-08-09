import items from "./Items.js";
import UIBaseScene from "./UIBaseScene.js";
import DropItem from "./DropItem.js";

export default class CraftingScene2 extends UIBaseScene{
    constructor(){
        super("CraftingScene2");
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
        this.maxColumns = 3;
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

    chooseCraftingItem3(){
        let index = 2;

        for(let i = 0;i<40;i++){
            if(this.inventory.getItem(i)) continue;
            else{length = i; break;}
        }
        this.item_num[2] = (this.item_num[2] + 1)%length;

        if(this.newCraftingSlot[index].item) this.newCraftingSlot[index].item.destroy();
        let item = this.inventory.getItem(this.item_num[2]);
        
        let x = this.margin + this.tileSize / 2 + (index % this.maxColumns) * (this.tileSize + this.gridSpacing);
        let y = this.margin + this.tileSize / 2 + Math.floor(index/this.maxColumns) * (this.tileSize + this.gridSpacing) + this.game.config.height / 2; 
        let a = items[item.name].frame;
       
        this.newCraftingSlot[index].item = this.add.sprite(x,y,"items",a);
       
        var length = 0;
        
    }


    create(){
        // this.add.image(128,128,'new_background').setOrigin(0,0);
        for (let index = 0; index < this.maxColumns; index++) {
            let x = this.margin + this.tileSize / 2 + (index % this.maxColumns) * (this.tileSize + this.gridSpacing);
            let y = this.margin + this.tileSize / 2 + Math.floor(index/this.maxColumns) * (this.tileSize + this.gridSpacing) + this.game.config.height / 2; 
            this.newCraftingSlot[index] = this.add.sprite(x,y,"items",11);
        }
        this.movementText = this.add.text( this.margin,this.margin + this.tileSize / 2 + this.game.config.height / 2 + this.tileSize/2,'2-3 items\nusing \'R\' \'T\' \'Y\' to choose\n\'E\' to craft',{fontSize: '16px', fill:'#000'});
        this.input.keyboard.on("keydown-R", () =>{
            this.chooseCraftingItem1();
        });
        this.input.keyboard.on("keydown-T", () =>{
            this.chooseCraftingItem2();
        });
        this.input.keyboard.on("keydown-Y", () =>{
            this.chooseCraftingItem3();
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
        for(let index = 0; index < 3; index++){
            var item = this.newCraftingSlot[index].item;
            if(item && items[this.inventory.items[this.item_num[index]].name].level !== 4) {
                cou++;
                //var inv_item = this.inventory.getItem(this.item_num[index]);
                console.log("inventory items:");
                console.log(this.inventory.items);
                this.inventory.items[this.item_num[index]].quantity--;
                if(this.inventory.items[this.item_num[index]].quantity<0) flag = true;
                // let existingKey = Object.keys(this.inventory.items).find(key => this.inventory.items[key].name === this.newCraftingSlot.name);
                // console.log(existingKey);   
                // this.inventory.items[existingKey].quantity --;
                // this.inventory.getItemQuantity
                // if(this.inventory.items[existingKey].quantity < 0)  flag = true;
            }
        }

        for(let index = 0; index < 3; index++){
            var item = this.newCraftingSlot[index].item;
            if(item && items[this.inventory.items[this.item_num[index]].name].level !== 4) {
                //var inv_item = this.inventory.getItem(this.item_num[index]);
                this.inventory.items[this.item_num[index]].quantity++;
                // let existingKey = Object.keys(this.inventory.items).find(key => this.inventory.items[key].name === this.newCraftingSlot.name);
                // console.log(existingKey);   
                // this.inventory.items[existingKey].quantity --;
                // this.inventory.getItemQuantity
                // if(this.inventory.items[existingKey].quantity < 0)  flag = true;
            }
        }

        console.log("how many items are using: "+ cou);
        //check number
        // if(this.newCraftingSlot[0].item.name===this.newCraftingSlot[1].item.name&&this.newCraftingSlot[2].item.name===this.newCraftingSlot[1].item.name){
        //     var num = this.inventory.getItemQuantity(this.newCraftingSlot[0].name);
        //     if(num<3) flag = true;
        // }
        // else if(this.newCraftingSlot[0].item.name===this.newCraftingSlot[1].item.name ||this.newCraftingSlot[0].item.name===this.newCraftingSlot[2].item.name ){
        //     if(this.inventory.getItemQuantity(this.newCraftingSlot[0].name)<2) flag = true;
        // }
        // else if(this.newCraftingSlot[1].item.name===this.newCraftingSlot[2].item.name){
        //     if(this.inventory.getItemQuantity(this.newCraftingSlot[2].name)<2) flag = true;
        // }
        if(cou < 2){ 
            alert("At least 2 items should be used ! Don't contain level 4 item!");
            result = false;
        }
        if(flag){
            alert("Don't have enough items!");
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
        var cou = 0;
        for(let index = 0; index < 3; index++){
            if(this.newCraftingSlot[index].item && this.newCraftingSlot[index].item.level != 4) {
                cou++;
            }
        }
        var cat = [0.0, 0.0, 0.0, 0.0];
        var level = 0;
        var cate;
        var item_re_name = ["","",""];
        var item_re_level = ["","",""];
        var item_re_category = ["","",""];
        var re_num = 0;
        for(let index = 0; index < 3; index++){
            var aaa = this.newCraftingSlot[index].item;
            if(aaa){
                console.log("index = ",index, " , exist");
                var inv_item = this.inventory.getItem(this.item_num[index]);
                console.log("the item in index " + index + "is:");
                console.log(inv_item);
                var item = items[inv_item.name];
                this.inventory.removeItem(inv_item.name)
                if(item && item.level !== 4) {
                    item_re_name[re_num] = item.name.toString();
                    item_re_level[re_num] = item.level.toString(); 
                    if(item.type === 'c'){
                        item_re_category[re_num] = 'c';
                        for(let i = 0; i < 4; i++){
                            cat[i]+= (item.tendency[i]*(1/cou));
                        }
                    }
                    else{
                        level+=item.level;
                        item_re_category[re_num]=item.category.toString();
                        // console.log("level "+level);
                        if(item.category==="forging") cat[0]+=1/cou;
                        else if(item.category==="crafting") cat[1]+=1/cou;
                        else if(item.category==="food") cat[2]+=1/cou;
                        else cat[3]+=1/cou;
                    }
                    re_num = re_num + 1;
                }
            }
                
            
        }
        console.log("level");
        console.log(item_re_level);
        console.log("name");
        console.log(item_re_name);
        console.log("type");
        console.log(item_re_category);
        level = Math.ceil(level/cou) + 1;
        var num = Math.ceil(Math.random()*100);
        if(num < cat[0]*100) cate = "forging";
        else if(num < (cat[0]+cat[1])*100) cate = "crafting";
        else if(num < (cat[0]+cat[1]+cat[2])*100) cate = "food";
        else  cate = "alchemy";
        var fin_name = "", fin_level = "", fin_category = "";
        fin_level = level.toString();
        fin_category = cate.toString();
        if(level === 4){
            let item1 = items["fin_item"];
            console.log(item1);
            fin_name = "fin_item";
            var x = new DropItem({ name:"fin_item",scene:this.mainScene,x:this.player.x -32,y:this.player.y,frame:item1.frame});
        }
        else{
            let newitems = Object.keys(items).filter(function(i) { return (items[i].category === cate && items[i].level === level);})
            num = Math.floor(Math.random()*(4-level));
            let item1 = items[newitems[num]];
            console.log(item1);
            var x = new DropItem({ name:newitems[num],scene:this.mainScene,x:this.player.x -32,y:this.player.y,frame:item1.frame});
            console.log(x);
            fin_name = newitems[num];
        }
        fin_name = fin_name.toString();
        for (let i=0;i<cou;i++){
            if(this.newCraftingSlot[i].item) this.newCraftingSlot[i].item.destroy();
        }
        this.base("Normal_generate").create([
            {
              "fields": {
                "Name": this.no,
                "item1_name": item_re_name[0],
                "item1_level": item_re_level[0],
                "item1_type": item_re_category[0],
                "item2_name": item_re_name[1],
                "item2_level": item_re_level[1],
                "item2_type": item_re_category[1],
                "item3_name": item_re_name[2],
                "item3_level": item_re_level[2],
                "item3_type": item_re_category[2],
                "product_name": fin_name,
                "product_level":fin_level,
                "product_type":fin_category
              }
            },
          ], function(err, records) {
            if (err) {
              console.error(err);
              return;
            }
            records.forEach(function (record) {
              console.log(record.getId());
            });
          });
        this.player.score+=Math.pow(2,level+1);
        this.mainScene.scene.stop('CraftingScene2');
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