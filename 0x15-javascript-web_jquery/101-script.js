$(document).ready(function () {
  // Add new element to list
  $("#add_item").click(function () {
    $("UL.my_list").append("<li>Item</li>");
  });

  // Remove last element from list
  $("#remove_item").click(function () {
    $("UL.my_list li:last-child").remove();
  });

  // Clear all elements from list
  $("#clear_list").click(function () {
    $("UL.my_list").empty();
  });
});
