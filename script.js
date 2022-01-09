/*hamburger menu for mobile*/
function myFunction() {
    var x = document.getElementById("navbar");
    x.classList.toggle('active');
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }