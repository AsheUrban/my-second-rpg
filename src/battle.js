export const battle = (player, enemy) => {
  player.calcValues();
  enemy.hp -= player.dmg;

  if(enemy.hp <= 0){
    enemy.hp = 0;
    enemy.status = "Dead";
  }

  if(enemy.status === "Alive"){
    let enemyAttack = enemy.str - player.def;
    if (enemyAttack > 0){
      player.hp -= (enemyAttack);
    }
  }

  return player.charClass + " is battling " + enemy.name;
} 