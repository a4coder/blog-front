$(function () {
  $(".faq-box").on("click", function () {
    $(this).children("div:last").toggle(".faq-answer-hidden");
  });

  $(".open-menu").on("click", function () {
    $("#menu").css("right", "0");
  });

  $(".close-menu").on("click", function () {
    $("#menu").css("right", "-250px");
  });

  $(".filter-active").on("click", function () {
    $(".blog-box").css("display", "block");
  });

  $("#programming").on("click", function () {
    $(".programming").css("display", "block");
    $(".skill").css("display", "none");
    $(".technology").css("display", "none");
  });

  $("#skill").on("click", function () {
    $(".skill").css("display", "block");
    $(".programming").css("display", "none");
    $(".technology").css("display", "none");
  });

  $("#technology").on("click", function () {
    $(".technology").css("display", "block");
    $(".programming").css("display", "none");
    $(".skill").css("display", "none");
  });

  // var portfolio = $("#blogs-container").isotope({
  //   originLeft: false,
  // });

  // $("#blogs-filter li").on("click", function () {
  //   $("#blogs-filter li").removeClass("filter-active");
  //   $(this).addClass("filter-active");

  //   portfolio.isotope({
  //     filter: $(this).data("filter"),
  //   });
  // });

  //   portfolio.on("arrangeComplete", function () {
  //     if ($(window).scrollTop() % 2 == 0)
  //       $(window).scrollTop($(window).scrollTop() - 1);
  //     else {
  //       $(window).scrollTop($(window).scrollTop() + 1);
  //     }
  //   });
});
