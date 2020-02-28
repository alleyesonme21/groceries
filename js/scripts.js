$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    $("#formOne").hide();
    $("#list").show();
    var groceries = ["item1", "item4", "item3", "item2", "item5" ];
    // groceries.sort();
    var items= [];
    groceries.forEach(function(grocery) {
      items.push($("input#" + grocery).val().toUpperCase());
      //add another loop to loop through items 
      $("." + grocery).text(items.sort());
      console.log(items);
    });
   
    // var items = groceries.map(function(grocery) {
    //   $("input#" + grocery).val();
    //   $("." + grocery).text(items);
    //   return items.toUpperCase().sort();
    // });
  });
});