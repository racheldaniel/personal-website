
//jquery-- select nav elements, attach listener to scroll to correct section when clicked on navbar

$(".navbar-end").find("a").click(function(e) {
  e.preventDefault();
  let $section = $(this).attr("href");
  $("html, body").animate({
      scrollTop: $($section).offset().top
  });
});



$(document).ready(function() {

  $("section").hover(function() {
     let id = $(this).attr("id");
     $("a").removeClass("is-active");
     $("[href=#"+id+"]").addClass("is-active");
  });

});