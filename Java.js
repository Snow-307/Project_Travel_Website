

var swiper = new Swiper(".discover_container", {
    effect: "cards",
    grabCursor: true,
    loop: true,
  });

  var slideIndex = 1;
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
  }

  function redirectToPage() {
    window.location.href = 'Boxes.html';
  }

  function redirectToForm() {
    window.location.href = 'form2.html';
  }

var storedUsername = localStorage.getItem("username");

if (storedUsername) {
  // Pre-fill the username input field
  document.getElementById("username").value = storedUsername;
}

function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  if(typeof username === Number){
    alert("Invalid Input. Username cannot contail number");
  }
  
  if (username === "admin" && password === "pass123") {
    alert("Login successful!");
    window.location.href = 'File.html';
    document.getElementById("log").innerHTML = "Welcome Admin";

  } else {
    alert("Invalid username or password. Please try again.");
  }
}