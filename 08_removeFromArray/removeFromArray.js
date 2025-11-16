const removeFromArray = function(passedArray, ...extraArguments) {
  return passedArray.filter(item => !extraArguments.includes(item));
};


// Do not edit below this line
module.exports = removeFromArray;
