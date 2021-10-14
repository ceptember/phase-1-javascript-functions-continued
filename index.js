//as a function
function saturdayFun (plan = 'roller-skate'){
    return `This Saturday, I want to ${plan}!`
};

//as a function expression 
let mondayWork = function (plan = 'go to the office') {
    return `This Monday, I will ${plan}.`
};


function wrapAdjective(flair = "*"){
    return function(adj1 = "special"){
        return `You are ${flair}${adj1}${flair}!`;
    }
};

//let myStr = wrapAdjective("*~*")("rad");
//console.log(myStr);


