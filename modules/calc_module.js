var calculateNum = function (a, b, op) {
  console.log('in calculateNum');
  switch (op) {
    case '+':
      var result = a + b;
      break;
    case '-':
      var result = a - b;
      break;
    case '*':
      var result = a * b;
      break;
    case '/':
      var result = a / b;
  } // end switch
};  // end calculateNum

module.exports = calculateNum;
