$(document).ready(function() {

  $("#ibm-button").click(function() {

    height_m = $("#ibm-input-height").val() / 100;
    ibmResult = $("#ibm-input-weight").val() / (height_m ** 2);
    hasDecimal = ibmResult - parseInt(ibmResult);

    $("#bmi-result").html((hasDecimal ? parseInt(ibmResult) : Number(ibmResult).toFixed(2)) + " kg/m²");
  })

})

