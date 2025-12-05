const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(numbers) {
  const answer=numbers.reduce((acc,num)=>{
    return acc + num;
  },0);	
  return answer;
};

const multiply = function(numArray) {
  const answer=numArray.reduce((acc,num)=>{
    return acc*num;
  },1)
  return answer;
};

const power = function(base,exponent) {
 return base ** exponent;	
};

const factorial = function(factorial) {
  let fact=1;
	for(let i=1; i<=factorial;i++){
    fact=fact*i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
