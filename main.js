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
  let shortParagraphs = ["I love solving puzzles. There is a joy in the balance of creativity and logic that has been an undercurrent in all of my academic and professional endeavors. Having graduated with a BFA in Theater and a minor in Accounting, I knew I wanted to find a career that was as challenging as it was rewarding.", "So how does a Theater major find her way into software?"]

  let longParagraph = "In 2010, I joined Community Health Systems (CHS). There, as a Systems Operations Analyst, I had the opportunity to work closely with developers in gathering data about the system use for the department. After being promoted to Systems Operations Manager,  my increased involvement in the development process sparked a passion for code-- particularly for being a part of the creation and improvement of technology with an emphasis on the end user-- which culminated in leaving to attend Nashville Software School’s six month Python/ Django bootcamp. I am excited about this new journey as a software developer that brings with it the opportunity to problem-solve and learn something new each day."


  if (status === "less") {
    let p = document.createElement("p")
    let img = document.getElementById("headshot")
    p.innerHTML = longParagraph
    document.getElementById("profile").appendChild(p)
    img.setAttribute("src", "./images/prisonMike.png")
    document.getElementById("toggleButton").innerText = "See Less";
    status = "more";
  } else if (status === "more") {
    let img = document.getElementById("headshot")
    img.setAttribute("src", "./images/headshot2.png")
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