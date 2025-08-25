$(document).ready(function() {
  //IBM calculator logic
  $("#ibm-button").click(function() {
    height_m = $("#ibm-input-height").val() / 100;
    ibmResult = $("#ibm-input-weight").val() / (height_m ** 2);
    hasDecimal = ibmResult - parseInt(ibmResult);
    $("#bmi-result").html((hasDecimal ? parseInt(ibmResult) : Number(ibmResult).toFixed(2)) + " kg/m²");
  })

  //classes page hover on card
  $(".classes-content-container").hover(
      function()  {
        $(this).find('img').addClass('classes-image-filtered');
        $(this).find(".classes-hidden-text").show("slow", "swing");
      },
      function() {
        $(this).find('img').removeClass('classes-image-filtered');
        $(this).find(".classes-hidden-text").hide("slow", "linear");
      }
      )
})

