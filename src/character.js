import { timers } from "jquery";

export class Character {
  
  constructor(charClass){
    this.charClass = charClass;
    this.EXP = 0;
  }

  baseStats(){
    if(this.charClass == "Wizard"){
      this.int = 10;
      this.str = 2;
      this.hp = 20;
    }
  }
}