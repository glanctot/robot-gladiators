var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames.length);
  
var fight = function(enemyName) {
  // repeat and execute as long as the enemy robot is still alive
  while(playerHealth > 0 && enemyHealth > 0){
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
      // if yes, leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight.  Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }
    
    // if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
   //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
   enemyHealth = enemyHealth - playerAttack;
  
   // Log a resulting message to the console so we know that it worked.
   console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " remaining.");
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      //award player money for winning
      playerMoney = playerMoney + 20;
      break;
    }
    else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
  
    // Log a resulting message to the console so we know that it worked.
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " remaining.");
  
    // check players health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died.");
      break;
    }
    else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    }
  }
  }
  
var startGame = function() {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
    window.alert("Welcome to Robot Gladiators! Round " + (i+1));

    var pickedEnemyName = enemyNames[i];

    enemyHealth = 50;

    fight(pickedEnemyName);
  } else {
    window.alert("You have lost your robot in battle!  Game over!");
    break;
  }
}
endGame();
}


var endGame = function() {
  // if player is still alive, player wins!
  if (playerHealth > 0) {
  window.alert("The game has now ended.  Let's see how you did!");
} else {
  window.alert("You've lost your robot in battle.")
}
// ask if they would like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");
if (playAgainConfirm) {
  // restart game
  startGame();
} else {
  window.alert("Thank you for playing Robot Gladiators!  Come back again soon!")
}
}

startGame();