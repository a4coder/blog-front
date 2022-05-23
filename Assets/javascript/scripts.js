$(function () {
  $(".faq-box").on("click", function () {
    $(this).children("div:last").toggle(".faq-answer-hidden");
  });

  $(".open-menu").on("click", function () {
    $("#menu").css("right", "0");
  });

  $(".close-menu").on("click", function () {
    $("#menu").css("right", "-250px");
  })

  $("")

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
