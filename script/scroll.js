// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.backgroundImage = "linear-gradient(90deg, #230023 0, #f4ccff)";
  } else {
    document.getElementById("navbar").style.background = "transparent";
  }
}