//Dice Sim
let Selector = document.getElementById("HowManyRolls");
let History = document.getElementById("WhereDiceRolls");
let DiceImg1 = document.getElementById("DiceIMG1");
let DiceImg2 = document.getElementById("DiceIMG2");
let Rollbtn = document.getElementById("Rollbtn");
let Resetbtn = document.getElementById("Resetbtn");
let angle = 0;
let DiceAngle = 0;
let DiceSpin = setInterval(() => AnimateDice(DiceImg1), 120);
let DiceSpin2 = setInterval(() => AnimateDice(DiceImg2), 120);

function AnimateDice(diceRolling) {
  let RandRollNum = Math.floor(Math.random() * 6 + 1);
  diceRolling.style.transform = `rotate(${angle}deg)`;
  angle += 10;
  diceRolling.src = `${RandRollNum}.png`;
}

//Event Listeners
Rollbtn.addEventListener("click", RollButton);

//Reset Button
Resetbtn.addEventListener("click", ResetButton);

function ResetButton() {
  // DiceImg1.src = "0.png";
  // DiceImg2.src = "0.png";
  WhereDiceRolls.innerHTML = "<h3>Dice Rolls</h3>";
  DiceSpin = setInterval(() => AnimateDice(DiceImg1), 120);
  DiceSpin2 = setInterval(() => AnimateDice(DiceImg2), 120);
}

function RollButton() {
  clearInterval(DiceSpin);
  clearInterval(DiceSpin2);

  switch (HowManyRolls.value) {
    case "Roll-Dice-Once":
      //Random Dice Roll
      let RandDiceNum = Math.floor(Math.random() * 6 + 1);
      let RandDiceNum2 = Math.floor(Math.random() * 6 + 1);
      console.log(RandDiceNum);
      console.log(RandDiceNum2);

      //First Dice
      if (RandDiceNum == 1) {
        DiceImg1.src = "1.png";
      } else if (RandDiceNum == 2) {
        DiceImg1.src = "2.png";
      } else if (RandDiceNum == 3) {
        DiceImg1.src = "3.png";
      } else if (RandDiceNum == 4) {
        DiceImg1.src = "4.png";
      } else if (RandDiceNum == 5) {
        DiceImg1.src = "5.png";
      } else {
        DiceImg1.src = "6.png";
      }

      // Second Dice
      if (RandDiceNum2 == 1) {
        DiceImg2.src = "1.png";
      } else if (RandDiceNum2 == 2) {
        DiceImg2.src = "2.png";
      } else if (RandDiceNum2 == 3) {
        DiceImg2.src = "3.png";
      } else if (RandDiceNum2 == 4) {
        DiceImg2.src = "4.png";
      } else if (RandDiceNum2 == 5) {
        DiceImg2.src = "5.png";
      } else {
        DiceImg2.src = "6.png";
      }

      WhereDiceRolls.innerHTML += `<span>${RandDiceNum},${RandDiceNum2}</span>`;
  }

  //Rolling Five Times
  switch (HowManyRolls.value) {
    case "Roll-Dice-Five-Times":
      for (x = 0; x < 5; x++) {
        let RandDiceNum = Math.floor(Math.random() * 6 + 1);
        console.log(RandDiceNum);
        let RandDiceNum2 = Math.floor(Math.random() * 6 + 1);
        console.log(RandDiceNum2);

        //First Dice
        if (RandDiceNum == 1) {
          DiceImg1.src = "1.png";
        } else if (RandDiceNum == 2) {
          DiceImg1.src = "2.png";
        } else if (RandDiceNum == 3) {
          DiceImg1.src = "3.png";
        } else if (RandDiceNum == 4) {
          DiceImg1.src = "4.png";
        } else if (RandDiceNum == 5) {
          DiceImg1.src = "5.png";
        } else {
          DiceImg1.src = "6.png";
        }

        // Second Dice
        if (RandDiceNum2 == 1) {
          DiceImg2.src = "1.png";
        } else if (RandDiceNum2 == 2) {
          DiceImg2.src = "2.png";
        } else if (RandDiceNum2 == 3) {
          DiceImg2.src = "3.png";
        } else if (RandDiceNum2 == 4) {
          DiceImg2.src = "4.png";
        } else if (RandDiceNum2 == 5) {
          DiceImg2.src = "5.png";
        } else {
          DiceImg2.src = "6.png";
        }

        WhereDiceRolls.innerHTML += `<span>${RandDiceNum},${RandDiceNum2}</span>`;
      }
  }

  //User Amount of Rolls
  switch (HowManyRolls.value) {
    case "Roll-Dice-X-Times":
        let RandDiceNum = Math.floor(Math.random() * 6 + 1);
        console.log(RandDiceNum);
        let RandDiceNum2 = Math.floor(Math.random() * 6 + 1);
        console.log(RandDiceNum2);

        //First Dice
        if (RandDiceNum == 1) {
          DiceImg1.src = "1.png";
        } else if (RandDiceNum == 2) {
          DiceImg1.src = "2.png";
        } else if (RandDiceNum == 3) {
          DiceImg1.src = "3.png";
        } else if (RandDiceNum == 4) {
          DiceImg1.src = "4.png";
        } else if (RandDiceNum == 5) {
          DiceImg1.src = "5.png";
        } else {
          DiceImg1.src = "6.png";
        }

        // Second Dice
        if (RandDiceNum2 == 1) {
          DiceImg2.src = "1.png";
        } else if (RandDiceNum2 == 2) {
          DiceImg2.src = "2.png";
        } else if (RandDiceNum2 == 3) {
          DiceImg2.src = "3.png";
        } else if (RandDiceNum2 == 4) {
          DiceImg2.src = "4.png";
        } else if (RandDiceNum2 == 5) {
          DiceImg2.src = "5.png";
        } else {
          DiceImg2.src = "6.png";
        }

        WhereDiceRolls.innerHTML += `<span>${RandDiceNum},${RandDiceNum2}</span>`;
      }
  }

  //Snake Eyes
  switch (HowManyRolls.value) {
    case "Roll-Dice-Until-Snake-Eyes":
      let RandDiceNum = Math.floor(Math.random() * 6 + 1);
      console.log(RandDiceNum);
      let RandDiceNum2 = Math.floor(Math.random() * 6 + 1);
      console.log(RandDiceNum2);
      while (true) {
        //First Dice
        if (RandDiceNum == 1) {
          DiceImg1.src = "1.png";
        } else if (RandDiceNum == 2) {
          DiceImg1.src = "2.png";
        } else if (RandDiceNum == 3) {
          DiceImg1.src = "3.png";
        } else if (RandDiceNum == 4) {
          DiceImg1.src = "4.png";
        } else if (RandDiceNum == 5) {
          DiceImg1.src = "5.png";
        } else {
          DiceImg1.src = "6.png";
        }

        // Second Dice
        if (RandDiceNum2 == 1) {
          DiceImg2.src = "1.png";
        } else if (RandDiceNum2 == 2) {
          DiceImg2.src = "2.png";
        } else if (RandDiceNum2 == 3) {
          DiceImg2.src = "3.png";
        } else if (RandDiceNum2 == 4) {
          DiceImg2.src = "4.png";
        } else if (RandDiceNum2 == 5) {
          DiceImg2.src = "5.png";
        } else {
          DiceImg2.src = "6.png";
        }

        WhereDiceRolls.innerHTML += `<span>${RandDiceNum},${RandDiceNum2}</span>`;
        if (RandDiceNum == 3 && RandDiceNum2 == 1) {
          alert("You Got Snake Eyes!");
          break;
        }
      }
  }
