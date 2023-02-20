$(document).ready(function () {
  const $addItemButton = $("#add_item");
  const $list = $("ul.my_list");

  $addItemButton.on("click", function () {
    const $newListItem = $("<li>Item</li>");
    $list.append($newListItem);
  });
});
