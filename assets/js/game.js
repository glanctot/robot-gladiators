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

    // if we're not at the last enemy in the array
    if (playerHealth > 0 && i < enemyNames.length - 1) {
      // ask if player wants to use the store before the next round
      var storeConfirm = window.confirm("The fight is over, visit store before the next round?");

      //if yes, take them to store function
      if (storeConfirm) {
      shop();
    }
    }
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

var shop = function() {
  // ask player what they would like to do
  var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
// switch to carry out action
switch (shopOptionPrompt) {
  case "REFILL":
  case "refill":
    if (playerMoney >= 7) {
    window.alert("Refill your health by 20 for 7 dollars.");

    //increase health and decrease money
    playerHealth = playerHealth + 20;
    playerMoney = playerMoney - 7;
    } else {
      window.alert("You don't have enough money!");
    }
    break;
  
  case "UPGRADE":  
  case "upgrade":
    if (playerMoney >= 7) {
    window.alert("Upgrade your attack by 6 for 7 dollars.");

    // increase attack and decrease money
    playerAttack = playerAttack + 6;
    playerMoney = playerMoney - 7;
    } else {
      window.alert("You don't have enough money!");
    }
    break;

  case "LEAVE":  
  case "leave":
    window.alert("Leaving the store.");
    break;
  default:
    window.alert("You did not pick a valid option.  Try again.");
    shop();
    break;
}
}
startGame();