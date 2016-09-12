var calculateNum = function (a, b, op) {
  var result = 0;
  console.log('in calculateNum');
  switch (op) {
    case '+':
      result = Number(a) + Number(b);
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
  } // end switch
  return result;
};  // end calculateNum

module.exports = calculateNum;
