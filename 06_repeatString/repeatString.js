const repeatString = function(passedString, repeated) {

    let sum="";
   for(let i=1;i<=repeated;i++)
   {
    sum += passedString;
   }
   return sum;
};

//repeatString("Uday",3);

// Do not edit below this line
module.exports = repeatString;
