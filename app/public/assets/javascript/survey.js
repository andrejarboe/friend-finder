$("#submit").on("click", function (event) {
  event.preventDefault();

  var newFriend = {
    name: $("#name").val().trim(),
    photo: $("#photo").val().trim(),
    score: [
      $("#q1").val(),
      $("#q2").val(),
      $("#q3").val(),
      $("#q4").val(),
      $("#q5").val(),
      $("#q6").val(),
      $("#q7").val(),
      $("#q8").val(),
      $("#q9").val(),
      $("#q10").val()
    ]
  };

  console.log(newFriend);
});
