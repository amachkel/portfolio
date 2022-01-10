/*hamburger menu for mobile*/
function myHamburger() {
    var x = document.getElementById("navbar");
    x.classList.toggle('active');//stops navbar from showing when reloaded.
    
    //I apparently don't need the if/else statement. Thanks w3schools./s
    // if (x.style.display === "block") {
    //   x.style.display = "none";
    // } else {
    //   x.style.display = "block";
    // }
  }