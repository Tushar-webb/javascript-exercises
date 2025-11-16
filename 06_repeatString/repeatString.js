const repeatString = function(passedString, repeated) {

    let sum="";
   for(let i=1;i<=repeated;i++)
   {
    sum += passedString;
   }
   if(repeated<0)
   {
    return "ERROR";
   }
   return sum;
};


// Do not edit below this line
module.exports = repeatString;
