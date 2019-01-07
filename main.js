
//select nav elements, attach listener to smooth scroll to correct section when clicked on navbar

$(".navbar-end").find("a").click(function (e) {
  e.preventDefault();
  let $section = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $($section).offset().top
  });
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
  let paragraphs = ["I was first introduced to the world of Software Development as a Systems Operations Analyst at Community Health Systems, where I worked alongside Developers, gathering data about system use for our department. When I stepped into the role of Systems Operations Manager-- the liaison between our department's tech staff and our hundreds of application users-- I realized I loved being a part of the creation and improvement of technology with the end user always in mind. More than anything I enjoyed diving into the code to search for answers any time I was asked the classic question-- is this issue a bug, user error, or intentional design upon which we can improve?", "My interest in the world of Devs grew exponentially in my time with CHS, and it soon became clear that Software Development was the rigorous, creative and exciting career for which I'd been searching. I knew I had to go all in, and enrolled in Nashville Software School's Full-Time Web Developer Bootcamp.", "I couldn't be more thrilled to be learning Full-Stack Development (Python/Django backend) with my bright and supportive classmates of NSS' Cohort 28, and can't wait to see what comes next."]

  if (status === "less") {
    paragraphs.forEach((paragraph) => {
      let p = document.createElement("p")
      p.innerHTML = paragraph
      document.getElementById("profile").appendChild(p)
    })
    document.getElementById("toggleButton").innerText = "See Less";
    status = "more";
  } else if (status === "more") {
    document.getElementById("profile").innerHTML = ""
    let p = document.createElement("p")
    p.innerHTML = "It started in the 6th grade, with the grid-based logic puzzles our homeroom teacher would hand out every morning. I devoured every challenge, scouring the internet for puzzles I’d print for endless entertainment on family road trips. As I grew and pursued various interests, dreams and goals, the undercurrent was always the same -- a love of problem-solving and creating something tangible. I graduated from The University of Mississippi with a BFA in Theater and a minor in Accounting, still searching for a career path as challenging as it was rewarding."
    document.getElementById("profile").appendChild(p)
    document.getElementById("toggleButton").innerText = "See More";
    status = "less"
  }
}

//event listener on See More/Less
$("#toggleButton").click(function (e) {
  e.preventDefault();
  toggleText()
});

//event listener on giftStorm image-- brings up modal
$("#projImg1").click(function() {
  $("#projDesc1").addClass("is-active" )
});

//event listener on close buttons on giftStorm modal
$(".closeModal").click(function() {
  $("#projDesc1").removeClass("is-active" )
});