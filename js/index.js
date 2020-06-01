$(document).ready(function () {
  $(function () {
    $('.dropdown').click(function () {
      $(this).next().slideToggle();
    });
  });
});
