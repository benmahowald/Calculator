// console.log('script handshake');
var input1 = Number(0);
var input2 = Number(0);
var mathOperator = '';
var returnedResult;

$(document).ready(function () {
  // console.log('jquery sourced');

  $('.operatorClass').on('click', function () {
    // console.log('in operatorClass click');
    mathOperator = $(this).data('input-operator');
  });

  $('#calculate').on('click', function () {
    // console.log('calculate clicked');

    input1 = Number($('#numInput1').val());
    input2 = Number($('#numInput2').val());

    var mathObject = {
      num1: input1,
      num2: input2,
      ops: mathOperator,
    };

    // console.log(mathObject);
    $.ajax({
      url: '/summation',
      type: 'POST',
      data: mathObject,
      success: function (data) {
        returnedResult = data.calc;
        displayResult();
      },
    }); // end ajax
  }); // end on-click

  $('#clear').on('click', function () {
    console.log('in clear');
    $('#numInput1').val('');
    $('#numInput2').val('');
    $('#resultOutput').html('');
  });

}); // end doc ready

var displayResult = function () {
  // console.log('in displayResult');
  $('#resultOutput').append(returnedResult);
};
