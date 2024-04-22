//scrolling function
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
//loop over the sections
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 200;
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
// assigned a href attribute, which is set to the URL of the file to be downloaded
    var link = document.createElement('a');
    link.href = "https://drive.google.com/file/d/1iNV2SE7likoUpntGo-qEwCrVaIIk-KBR/view?usp=sharing";
// download the URL instead of navigating to it and also provides a default filename for the downloaded file.
    link.download = 'file.pdf';
//This makes the anchor element part of the dom and it's not visible for the user
    document.body.appendChild(link); 
    link.click();
//clean up the DOM and remove the anchor element that was temporarily added
    document.body.removeChild(link);
}


window.onload = function() {
  document.getElementById('ContactMe').addEventListener('submit', function(event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm('contact_service', 'ContactMe', this)
          .then(() => {
              console.log('SUCCESS!');
          }, (error) => {
              console.log('FAILED...', error);
          });
  });
}