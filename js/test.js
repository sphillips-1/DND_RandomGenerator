
/*  
  function getRandomArbitrary(max) {
    return Math.floor((Math.random() * max) + 1);
  }
  function rollAndCombineDice(dice){
    var diceResults = [];
    var dice;
	var diceFormula = dice.split("d").join(",").split("*").join(",").split(",");
    var numberOfDice = diceFormula[0];
    var diceSize = diceFormula[1];
    for (i = 0; i < numberOfDice; i++) {
        diceResults.push(getRandomArbitrary(diceSize));
    }
    console.log("Dice roll array ["+diceResults+"]");
    var diceTotal = parseInt(diceResults.reduce((a, b) => a + b, 0));
    if (typeof diceFormula[2] === 'undefined') {
  		diceFormula[2] = 1
	}
    diceTotal = diceTotal * diceFormula[2];
    return diceTotal;
  }
  function GetBaseGP(GPFormula){
	var crGParray = GPFormula.split(";");
    var CP = rollAndCombineDice(crGParray[0])*.01;
    console.log("CP formula-" + crGParray[0]);
    console.log("CP:["+CP+"]");
    var SP = rollAndCombineDice(crGParray[1])*.1;
    console.log("SP formula-" + crGParray[1]);
    console.log("SP:["+SP+"]");
    var GP = rollAndCombineDice(crGParray[2]);
    console.log("GP formula-" + crGParray[2]);
	console.log("GP:["+GP+"]");
    var PP = rollAndCombineDice(crGParray[3])*10;
    console.log("PP formula-" + crGParray[3]);
    console.log("PP:["+PP+"]");
    var TotalGP = CP + SP + GP + PP;
    var MoneyArray = ["CP["+CP+"] SP["+SP+"] GP["+GP+"] PP["+PP+"]",TotalGP]
	return MoneyArray;
  }

  var ChallengeRatingGP = {"Challenge 0-4":"6d6*100;3d6*100;2d6*10;0d0*0","Challenge 5-10":"2d6*100;2d6*1000;6d6*100;3d6* 10","Challenge 11-16":"0d0*0;0d0*0;4d6*1000;5d6*100","Challenge 17+":"0d0*0;0d0*0;12d6*1000;8d6*1000"};
 */ 
