$(document).ready(function () {
  $(canvas).hide();
  $("#start").click(() => {
    $("#start").hide(1000);
    $(canvas).show(2000);
  });
});
