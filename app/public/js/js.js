$("#add-btn").on("click", function (event) {
  event.preventDefault();

  var newStranger = {
      name: $("#name").val().trim(),
      photo: $("#photoLink").val().trim(),
      scores: [
        $('.q1').val().trim(),
        $('.q2').val().trim(),
        $('.q3').val().trim(),
        $('.q4').val().trim(),
        $('.q5').val().trim(),
        $('.q6').val().trim(),
        $('.q7').val().trim(),
        $('.q8').val().trim(),
        $('.q9').val().trim(),
        $('.q10').val().trim()
      ]
  };
  $.post("/api/strangers", newStranger)
    .then(function (data) {
      //console.log("survey.html", data);
      //alert("Adding character...");
      $("#update").text("Adding information...");
      $('#strangerMatch').html(data.findName);
      $("#strangerImage").attr("src", data.findImage);
      // Open modal 
      $('#myModal').modal("show");
    });
});
  