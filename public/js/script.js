document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});

$(document).ready(()=>{
  $(".emailBtn").on("click", () => {
    if($(".nameInfo").val().length == 0 || $(".emailInfo").val().length == 0 || $(".messageInfo").val().length == 0){
      $("#errorMessage").show();
    } else {
      $(".contact-form").hide();
      $("#successMessage").show();
    }
  });

  $(".errorCloseBtn").on("click", () => {
    $("#errorMessage").hide();
  })

  $(".closeBtn").on("click", () => {
    location.reload();
  })
});