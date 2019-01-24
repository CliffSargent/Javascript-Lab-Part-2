"use strict";

// Declare Wins, our HP, Grant's HP
let player = undefined;
let userHp = 40;
let grantHp = 10;
let uWin = 0;
let gWin = 0;


function startGame() {
// Prompt the User
    let game = prompt("Wanna play?");
    if (game === "yes") {
      player = prompt("Name?");
    }
  startCombat();
  } 

  function getDamage(){
    let attack = prompt("Would you like to attack or quit?"); 
    if (attack === "attack") {
      userHp -= Math.floor(Math.random() * 5) + 1;
      grantHp -= Math.floor(Math.random() * 5) + 1;
    // Check health
      if (grantHp <= 0){
        uWin += 1;
        console.log(`Your score is ${uWin} wins`);
      }
    } else if (attack === "quit") {
      
    }
  } 

  function startCombat() {
  //While Loop
    while (gWin < 1 && uWin < 3) {
    // Remove Health  
        getDamage();
        }
      
    //State Remaining Health    
        console.log(`${player}'s Health: ${userHp}`);
        console.log(`Grant's Health: ${grantHp}`);
      }          
     

//     //Reset  
        grantHp = 10;
//       }
//       else {
//         gWin += 1;
//       }
//     } if (uWin === 3) {
//       //We Win
//       console.log(`${player} wins!`);
//     }
//     // Player says 'No'
//   } else if (game === "no") {
//     console.log("Fine. Later Gator.")
//   } else {
//     //Grant Wins
//     console.log(`Grant wins. Loser.`);
//   }
//   }  

startGame();
