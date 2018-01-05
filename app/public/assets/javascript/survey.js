$("#submit").on("click", function (event) {
  event.preventDefault();

// Form validation
function validateForm() {
  var isValid = true;
  $(".form-control").each(function() {
    if ($(this).val() === "") {
      isValid = false;
    }
  });

  $(".chosen-select").each(function() {

    if ($(this).val() === "") {
      isValid = false;
    }
  });
  return isValid;
}

  
if(validateForm()){
  var newFriend = {
    name: $("#name").val().trim(),
    photo: $("#photo").val().trim(),
    scores: [
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

  $.post("/api/friends", newFriend);

  // $("#name").val("");  
  // $("#photo").val("");  
  // $("#q2").val("");
  // $("#q1").val("");
  // $("#q3").val("");
  // $("#q4").val("");
  // $("#q5").val("");
  // $("#q6").val("");
  // $("#q7").val("");
  // $("#q8").val("");
  // $("#q9").val("");
  // $("#q10").val("");  

  }else {
    alert("Please fill out all fields before submitting!");
  }
});
