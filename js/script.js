$(document).ready(function() {
  $(document).on("scroll", function() {
    var $nav = $(".header")
    $nav.toggleClass("scrolled", $(this).scrollTop() > 80)
  })
});

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav__links");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if(top >= offset && top < offset + height) {
      console.log("top: " + top)
      console.log("offset: " + offset)
      console.log("height: " + height)
      navLinks.forEach(links => {
        links.classList.remove("active");
        document.querySelector(".nav__links[href*=" + id + "]").classList.add("active");
      });
    }
  });
}