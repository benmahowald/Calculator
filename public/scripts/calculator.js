// console.log('script handshake');
var input1 = Number(0);
var input2 = Number(0);
var mathOperator = '';
var returnedResult;
var clicks = 0;

$(document).ready(function () {
  // console.log('jquery sourced');

  $('.number').on('click', function () {
    console.log('in number click');
    if( clicks % 2 === 0) {
      input1 = $(this).data('digit');
      $('#calcDisplay').val(input1);
      clicks++;
      // console.log(input1);
    }
    else {
      input2 = $(this).data('digit');
      $('#calcDisplay').val(input2);
      clicks++;
      // console.log(input2);
    }
  });
console.log(input2);
  $('.operatorClass').on('click', function () {
    // console.log('in operatorClass click');
    mathOperator = $(this).data('input-operator');
    
  });

  $('#calculate').on('click', function () {
    // console.log('calculate clicked');

    var mathObject = {
      num1: input1,
      num2: input2,
      ops: mathOperator,
    };

    console.log(mathObject);

    $.ajax({
      url: '/summation',
      type: 'POST',
      data: mathObject,
      success: function (data) {
        returnedResult = data.calc;
        displayResult();
      },
    }); // end ajax
    equalsReset();
  }); // end on-click

  $('#clear').on('click', function () {
    $('#calcDisplay').val('');
  });

}); // end doc ready

var displayResult = function () {
  // console.log('in displayResult');
  $('#calcDisplay').val('');
  $('#calcDisplay').val(returnedResult);
};

var equalsReset = function () {
  input1 = undefined;
  input2 = undefined;
  mathOperator = undefined;
};
