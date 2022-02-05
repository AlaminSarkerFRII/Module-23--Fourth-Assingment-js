
/* <=================================================
problem - 01 ( ana to vori convert )
===================================================> */

function anaToVori(ana){

     // error chacking
     if(typeof ana != "number" || ana <= 0){
        return 'please Enter a Positive Number.'
     }

    let vori = ana / 16;
    return vori;
}

let yourAna = -1;
// console.log(anaToVori(yourAna));


/*
<=======================================================
problem - 02 - pandaCost
========================================================> */


function pandaCost(singaraQuantity,chamucaQuantity,zilapyQuantity){
// error chacking

if(typeof singaraQuantity,chamucaQuantity,zilapyQuantity != "number" || singaraQuantity,chamucaQuantity,zilapyQuantity <= 0){
    return 'please Enter Positive Number.'
}

    let perSingaraPrice = 7 ;
    let perChamucaPrice = 10;
    let perZilapyPrice = 15;

    //total budget calculation
    let totalSingaraPrice = perSingaraPrice * singaraQuantity;
    let totalChamucaPrice = perChamucaPrice * chamucaQuantity ;
    let totalZilapyPrice = perZilapyPrice * zilapyQuantity ;
    totalPrice = totalSingaraPrice + totalChamucaPrice + totalZilapyPrice ;
    return totalPrice;
}

console.log(pandaCost(0,-2,0));


/* <==================================================
problem - 03 ( picnicBudget)
======================================================> */

function picnicBudget(numberOfPerson){

    // error chacking

    if(typeof numberOfPerson != "number" || numberOfPerson <= 0){
        return 'please Enter a Positive Number.'
    }
    //main part ...
        let budget = 0;
    if(numberOfPerson <=100){
        budget = numberOfPerson * 5000;

    }else if(numberOfPerson <=200){

        let first100PersonBudget = 100 * 5000;
        let reminingBudget = (numberOfPerson - 100) * 4000;
        budget = first100PersonBudget + reminingBudget;

    } else{
        let first100PersonBudget = 100 * 5000;
        let second100PersonBudget = 100 * 4000;
        let reminingBudget = (numberOfPerson - 200)* 3000;
        budget = first100PersonBudget + second100PersonBudget + reminingBudget ;

    }

    return budget;

}



// console.log(picnicBudget(0));



/* <=======================================     
problem - 04
============================================> */


function oddFriend(friends){

    //error handle

    if(typeof friends !='Object'){
        return 'Please Enter an array of string';
    }

    for(let i = 0; i<friends.length; i++){
        if(friends[i].length % 2 ==1){
           return friends[i];
        }

    }
}

let myFriends = [42,2];

// console.log(oddFriend(myFriends));