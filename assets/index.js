// Dark and light theme

const toggler = document.getElementById("t");

toggler.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// Typing effect

var i = 0;
var txt = "Hey there! I am Pratham a Front-end Developer.";

function typeWriter() {
  if (i < txt.length) {
    if (i < 10) {
      document.getElementById("typing-ht").innerHTML += txt.charAt(i);
      i++;
    } else if (i >= 26 && i <= 34) {
      document.getElementById("frontend").innerHTML += txt.charAt(i);
      i++;
    } else if (i >= 34 && i <= 46) {
      document.getElementById("developer").innerHTML += txt.charAt(i);
      i++;
    } else {
      document.getElementById("typing-wd").innerHTML += txt.charAt(i);
      i++;
    }

    setTimeout(typeWriter, 100);
  }
}

setInterval(() => {
  setTimeout(function () {
    if (cursor) {
      document.getElementById("cursor").innerHTML = "_";
      document.getElementById("cursor").style.opacity = 0;
      cursor = false;
    } else {
      document.getElementById("cursor").innerHTML = "_";
      document.getElementById("cursor").style.opacity = 1;
      cursor = true;
    }
  }, 4600);
}, 400);

// Footer

var isPop = false;

function animateButton() {
  if (isPop == 0) {
    document.getElementById("btn1").style.transform =
      "translateY(-70px) rotate(1080deg)";
    document.getElementById("btn2").style.transform =
      "translateY(-140px) rotate(1080deg)";
    document.getElementById("btn3").style.transform =
      "translateY(-210px) rotate(1080deg)";
    document.getElementById("btn4").style.transform =
      "translateY(-280px) rotate(1080deg)";

    // document.getElementById("btn1").style.transform = "";

    isPop = true;
  } else {
    document.getElementById("btn1").style.transform = "translateY(0)";
    document.getElementById("btn2").style.transform = "translateY(0)";
    document.getElementById("btn3").style.transform = "translateY(0)";
    document.getElementById("btn4").style.transform = "translateY(0)";

    isPop = false;
  }
}
