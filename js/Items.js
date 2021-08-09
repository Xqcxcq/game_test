let items = {
  pickaxe: {name:"pickaxe",frame:162, mats:['wood','wood','stone'], level: 1, category: "forging", type: 's',des: "\n\tpickaxe\n\n\ttype: synthesis\n\n\tcategory: forging\n\n\tlevel: 1\t\n"},
  shovel : {name:"shovel",frame:163, mats:['wood','stone','stone'], level: 1, category: "forging", type: 's', des: "\n\tshovel\n\n\ttype: synthesis\n\n\tcategory: forging\n\n\tlevel: 1\t\n"},
  wood : {name:"wood",frame:272, level: 0,tendency:[0.3, 0.5, 0.0, 0.2], type: 'c', des: "\n\twood\n\n\ttype: collection\t\n"},
  stone : {name:"stone",frame:273, level: 0,tendency:[0.6, 0.1, 0.0, 0.3], type: 'c', des: "\n\tstone\n\n\ttype: collection\t\n"},
  berries : {name:"berries",frame:228, level: 0,tendency:[0.3, 0.5, 0.0, 0.2], type: 'c', des: "\n\tberries\n\n\ttype: collection\t\n"},
  meat : {name:"meat",frame:241, level: 0,tendency:[0.0, 0.0, 0.9, 0.1], type: 'c', des: "\n\tmeat\n\n\ttype: collection\t\n"},
  fur : {name:"fur",frame: 280, level: 0,tendency:[0.6, 0.1, 0.0, 0.3], type: 'c', des: "\n\tfur\n\n\ttype: collection\t\n"},
  health_potion: {name:"health_potion",frame: 144, level: 0,tendency:[0.0, 0.0, 0.0, 1.0], type: 'c', des: "\n\thealth_potion\n\n\ttype: collection\t\n"},
  wand_fire: {name:"wand_fire",frame: 105, level: 0,tendency:[0.0, 0.0, 0.0, 1.0], type: 'c', des: "\n\twand_fire\n\n\ttype: collection\t\n"},
  mushroom: {name:"mushroom",frame: 236, level: 0,tendency:[0.0, 0.0, 0.9, 0.1], type: 'c', des: "\n\tmushroom\n\n\ttype: collection\t\n"},
  cotton: {name:"cotton",frame: 277, level: 0,tendency:[0.1, 0.1, 0.0, 0.8], type: 'c', des: "\n\tcotton\n\n\ttype: collection\t\n"},
  dimand: {name:"dimand",frame: 276, level: 0,tendency:[0.5, 0.0, 0.0, 0.5], type: 'c', des: "\n\tdiamond\n\n\ttype: collection\t\n"},
  leaf: {name:"leaf",frame: 191, level: 0,tendency:[0.0, 0.0, 0.4, 0.6], type: 'c', des: "\n\tleaf\n\n\ttype: collection\t\n"},
  honey: {name:"honey",frame: 249, level: 0,tendency:[0.0, 0.0, 0.9, 0.1], type: 'c', des: "\n\thoney\n\n\ttype: collection\t\n"},
  stone_fen: {name:"stone_fen",frame: 250, level: 0,tendency:[0.6, 0.0, 0.0, 0.4], type: 'c', des: "\n\tpowder\n\n\ttype: collection\t\n"},

  stone_hammer: {name:"stone_hammer",frame: 164, level: 1, category: "forging", type: 's', des: "\n\tstone hammer\n\n\ttype: collection\t\n"},
  tiejian: {name:"iron_sword",frame: 81, level: 2, category: "forging", type: 's', des: "\n\tiron sword\n\n\ttype: synthesis\n\n\tcategory: forging\n\n\tlevel: 2\t\n"},
  liuxingchui: {name:"liuxingchui",frame: 92, level: 2, category: "forging", type: 's', des: "\n\tmeteor hammer\n\n\ttype: synthesis\n\n\tcategory: forging\n\n\tlevel: 2\t\n"},
  datiefu: {name:"big_iron_axe",frame: 91, level: 3, category: "forging", type: 's', des: "\n\tbig iron axe\n\n\ttype: synthesis\n\n\tcategory: forging\n\n\tlevel: 3\t\n"},

  dangong: {name:"slingshot",frame: 101, level: 1, category: "crafting", type: 's', des: "\n\tslingshot\n\n\ttype: synthesis\n\n\tcategory: crafting\n\n\tlevel: 1\t\n"},
  mujian: {name:"wood_sword",frame: 80, level: 1, category: "crafting", type: 's', des: "\n\twood sword\n\n\ttype: synthesis\n\n\tcategory: crafting\n\n\tlevel: 1\t\n"},
  muzhang: {name:"cane",frame: 103, level: 1, category: "crafting", type: 's', des: "\n\tcane\n\n\ttype: synthesis\n\n\tcategory: crafting\n\n\tlevel: 1\t\n"},
  shizigong: {name:"cross_bow",frame: 100, level: 2, category: "crafting", type: 's', des: "\n\tcross bow\n\n\ttype: synthesis\n\n\tcategory: crafting\n\n\tlevel: 2\t\n"},
  gong: {name:"bow",frame: 99, level: 2, category: "crafting", type: 's', des: "\n\tbow\n\n\ttype: synthesis\n\n\tcategory: crafting\n\n\tlevel: 2\t\n"},
  dun: {name:"shield",frame: 97, level: 3, category: "crafting", type: 's', des: "\n\tshield\n\n\ttype: synthesis\n\n\tcategory: crafting\n\n\tlevel: 3\t\n"},

  meat_1: {name:"meat_1",frame: 240, level: 1, category: "food", type: 's', des: "\n\tmeat 1\n\n\ttype: synthesis\n\n\tcategory: food\n\n\tlevel: 1\t\n"},
  meat_2: {name:"meat_2",frame: 242, level: 1, category: "food", type: 's', des: "\n\tmeat 2\n\n\ttype: synthesis\n\n\tcategory: food\n\n\tlevel: 1\t\n"},
  meat_3: {name:"meat_3",frame: 243, level: 1, category: "food", type: 's', des: "\n\tmeat 3\n\n\ttype: synthesis\n\n\tcategory: food\n\n\tlevel: 1\t\n"},
  bread: {name:"bread",frame: 237, level: 2, category: "food", type: 's', des: "\n\tbread\n\n\ttype: synthesis\n\n\tcategory: food\n\n\tlevel: 2\t\n"},
  cheese: {name:"cheese",frame: 247, level: 2, category: "food", type: 's', des: "\n\tcheese\n\n\ttype: synthesis\n\n\tcategory: food\n\n\tlevel: 2\t\n"},
  cake: {name:"cake",frame: 253, level: 3, category: "food", type: 's', des: "\n\tcake\n\n\ttype: synthesis\n\n\tcategory: food\n\n\tlevel: 3\t\n"},

  potion_1: {name:"potion_1",frame: 145, level: 1, category: "alchemy", type: 's', des: "\n\tpotion 1\n\n\ttype: synthesis\n\n\tcategory: alchemy\n\n\tlevel: 1\t\n"},
  potion_2: {name:"potion_2",frame: 146, level: 1, category: "alchemy", type: 's', des: "\n\tpotion 2\n\n\ttype: synthesis\n\n\tcategory: alchemy\n\n\tlevel: 1\t\n"},
  potion_3: {name:"potion_3",frame: 147, level: 1, category: "alchemy", type: 's', des: "\n\tpotion 3\n\n\ttype: synthesis\n\n\tcategory: alchemy\n\n\tlevel: 1\t\n"},
  potion_4: {name:"potion_4",frame: 149, level: 2, category: "alchemy", type: 's', des: "\n\tpotion 4\n\n\ttype: synthesis\n\n\tcategory: alchemy\n\n\tlevel: 2\t\n"},
  potion_5: {name:"potion_5",frame: 150, level: 2, category: "alchemy", type: 's', des: "\n\tpotion 5\n\n\ttype: synthesis\n\n\tcategory: alchemy\n\n\tlevel: 2\t\n"},
  potion_6: {name:"potion_6",frame: 154, level: 3, category: "alchemy", type: 's', des: "\n\tpotion 6\n\n\ttype: synthesis\n\n\tcategory: alchemy\n\n\tlevel: 3\t\n"},

  fin_item:{name:"fin_item",frame: 291,level: 4, type: 's', des: "\n\tfinal item\n\n\ttype: synthesis\n\n\tlevel: 4\n\n\tThis item can not be used for synthesis\t\n"}
};
export default items;