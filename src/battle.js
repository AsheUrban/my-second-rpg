export const battle = (player, enemy) => {
  player.calcValues();
  enemy.hp -= player.dmg;

  if(enemy.hp <= 0){
    enemy.hp = 0;
    enemy.status = "Dead";
    player.EXP += enemy.expDrop;
  }

  if(enemy.status === "Alive"){
    let enemyAttack = enemy.str - player.def;
    if (enemyAttack > 0){
      player.currentHp -= (enemyAttack);
    }
  }

  if(player.EXP >= 100){
    player.increaseStats();
    player.EXP = 0;
  }

  return player.charClass + " is battling " + enemy.name;
} 