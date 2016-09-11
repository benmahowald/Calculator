// console.log('script handshake');
var input1 = Number(0);
var input2 = Number(0);
var mathOperator = '';

$(document).ready(function () {
  // console.log('jquery sourced');

  $('.operatorClass').on('click', function () {
    console.log('in operatorClass click');
    mathOperator = $(this).data('input-operator');
    console.log(mathOperator);
  });

  $('#calculate').on('click', function () {
    console.log('calculate clicked');

    var input1 = $('#numInput1').val();
    var input2 = $('#numInput2').val();

    var mathObject = {
      num1: input1,
      num2: input2,
      type: mathOperator,
    };
    console.log(mathObject);
    $.ajax({
      url: '/summation',
      type: 'POST',
      data: mathObject,
      success: function (data) {
        console.log('ajax success: ' + data);
      },
    }); // end ajax
  }); // end on-click


}); // end doc ready
