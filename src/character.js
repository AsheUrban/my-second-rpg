export class Character {

  constructor(charClass){
    this.charClass = charClass;
    this.EXP = 0;
    this.bag = [];
    this.baseStats;
    this.baseInv;
  }

  baseStats(){
    if(this.charClass == "Wizard"){
      this.int = 10;
      this.str = 2;
      this.hp = 20;
    }
    else if(this.charClass == "Warrior"){
      this.int = 2;
      this.str = 10;
      this.hp = 24;
    }
    else if(this.charClass == "Rogue"){
      this.int = 8;
      this.str = 5;
      this.hp = 22;
    }
    else if(this.charClass == "Cleric"){
      this.int = 6;
      this.str = 6;
      this.hp = 30;
    }
  }

  baseInv(){
    if(this.charClass == "Wizard"){
      const Staff = {"name": "Staff", "damage": 10};
      const Robe = {"name": "Robe", "armor": 2};
      this.bag.push(Staff, Robe);
    }
    else if(this.charClass == "Warrior"){
      const Sword = {"name": "Sword", "damage": 10};
      const ChestPlate = {"name": "ChestPlate", "armor": 6};
      this.bag.push(Sword, ChestPlate);
    }
    else if(this.charClass == "Rogue"){
      const Dagger = {"name": "Dagger", "damage": 10};
      const Cloak = {"name": "Cloak", "armor": 2};
      this.bag.push(Dagger, Cloak);
    }
    else if(this.charClass == "Cleric"){
      const Sword = {"name": "Sword", "damage": 10};
      const ChestPlate = {"name": "ChestPlate", "armor": 6};
      this.bag.push(Sword, ChestPlate);
    }
  }
}