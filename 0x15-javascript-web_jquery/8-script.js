$(document).ready(function () {
  $.getJSON(
    "https://swapi-api.alx-tools.com/api/films/?format=json",
    function (data) {
      const $list = $("#list_movies");
      data.results.forEach(function (movie) {
        $("<li>" + movie.title + "</li>").appendTo($list);
      });
    }
  );
});

