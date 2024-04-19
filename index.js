//scrolling function
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
//loop over the sections
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
  //if we are in the animated section then reavel the content   
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
      //when we are out of the section remove content
      else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

// humburgermenu
function myFunction() {
  var x = document.getElementById("dropdownmenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
//downloading cv
document.querySelector('button').onclick = function () {
    var link = document.createElement('a');
    link.href = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
    link.download = 'file.pdf';
    document.body.appendChild(link); 
    link.click();
    document.body.removeChild(link);
}