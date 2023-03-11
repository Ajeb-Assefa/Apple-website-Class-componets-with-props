import $ from "jquery";
$(document).ready(function () {
  justToggleSlide();
});
function justToggleSlide() {
  $(".footer-links-wrapper h3").click(function () {
    if ($(window).width() <= 768) {
      $(this).next().slideToggle();
      $(this).toggleClass("expanded");
    }
  });
  $(window).on("resize", function () {
    window.location.reload();
  });
}
