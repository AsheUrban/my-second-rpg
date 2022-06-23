export const battle = (player, enemy) => {
  enemy.hp -= player.bag[0].damage;
  if(enemy.hp < 0){
    enemy.hp = 0;
  }
  return player.charClass + " is battling " + enemy.name;
} 