$(".card__title").hover(
  function () {
    // over
    $(this).css("color", "hsl(47, 88%, 63%)");
  },
  function () {
    // out
    $(this).css("color", "hsl(0, 0%, 7%)");
  },
);
