let burgerOpen = false

//event listener on navbar burger for mobile
$(".navbar-burger").click(function() {
  if (burgerOpen === false){
    $("#navbarMenuHeroA").addClass("is-active" )
    burgerOpen = true
  }else {
    $("#navbarMenuHeroA").removeClass("is-active")
    burgerOpen = false
  }
});


//select nav elements, attach listener to smooth scroll to correct section when clicked on navbar. Also collapses burger nav if user is on mobile

$(".navbar-end").find("a").click(function (e) {
  e.preventDefault();
  let $section = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $($section).offset().top
  });
  if (burgerOpen === true){
    $("#navbarMenuHeroA").removeClass("is-active")
    burgerOpen = false
  }
});


//set is-active class on nav items based on position on screen

$(document).ready(function () {

  $("section").hover(function () {
    let id = $(this).attr("id");
    $("a").removeClass("is-active");
    $("[href=#" + id + "]").addClass("is-active");
  });

});

//variable used in toggleText
let status = "less"

//function called with "See More/Less" button that appends the rest of the bio and resets based on whether user is requesting more or less
const toggleText= () => {
  let shortParagraphs = ["Greg Daniel founded Daniel Literary Group in early 2007 after more than ten years in publishing, six of which were at the executive level at Thomas Nelson Publishers where he was Vice President and Associate Publisher for W Publishing Group, a trade book division of Thomas Nelson."]

  let longParagraphs = ['Greg has had the honor of working with such critically acclaimed authors as Nadia Bolz-Weber, Sara Miles, Jon Sweeney, Scot McKnight, River Jordan, Matthew Paul Turner, and David Dark. Greg has also been involved with publishing books by a number of celebrity personalities, including Bono, George Foreman, and "Black Hawk Down" hero Cpt Jeff Struecker.', '            With his publishing background, Greg brings a keen editorial eye to the projects he represents. He teaches writing workshops at a handful of conferences each year. Greg also provides consulting services to authors who need help determining their best entryway into publishing in an ever-evolving market.']


  if (status === "less") {
    // let p = document.createElement("p")
    // p.innerHTML = longParagraph
    longParagraphs.forEach(paragraph => {
        let p = document.createElement("p")
        p.innerHTML = paragraph
        document.getElementById("profile").appendChild(p)
    })
    document.getElementById("toggleButton").innerText = "See Less";
    status = "more";
  } else if (status === "more") {
    document.getElementById("profile").innerHTML = ""
    shortParagraphs.forEach(paragraph => {
        let p = document.createElement("p")
        p.innerHTML = paragraph
        document.getElementById("profile").appendChild(p)
    })
    document.getElementById("toggleButton").innerText = "See More";
    status = "less"
  }
}

//event listener on See More/Less
$("#toggleButton").click(function (e) {
  e.preventDefault();
  toggleText()
});

//event listener on giftStorm gif-- brings up modal
$("#projImg1").click(function() {
  $("#projDesc1").addClass("is-active" )
});

//event listener on Waddle gif-- brings up modal
$("#projImg2").click(function() {
    $("#projDesc2").addClass("is-active" )
  });

//event listener on Bangazon gif-- brings up modal
$("#projImg3").click(function() {
    $("#projDesc3").addClass("is-active" )
  });

//event listener on close buttons on giftStorm modal
$(".closeModal").click(function() {
  $("#projDesc1").removeClass("is-active" )
});

//event listener on close buttons on Waddle modal
$(".closeModal").click(function() {
    $("#projDesc2").removeClass("is-active" )
  });

//event listener on close buttons on Bangazon modal
$(".closeModal").click(function() {
    $("#projDesc3").removeClass("is-active" )
  });

//scroll listener to toggle navbar color
$(function () {
    $(document).scroll(function () {
      let $nav = $(".hero-head");
      let $hero = $(".hero-body");
      let $subtitle = $("#hero-subtitle")
      $nav.toggleClass('scrolled', $(this).scrollTop() > $hero.height());
      $subtitle.toggleClass('scrolled', $(this).scrollTop() >= $nav.height());
    });
  });