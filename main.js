const toggleBtns = document.querySelectorAll(".nav-toggle");
const navLists = document.querySelectorAll(".list");
const navLinks = document.querySelectorAll(".list ul li, .list ul li a");

let navbar = true;

toggleBtns.forEach((toggleBtn, index) => {
    toggleBtn.addEventListener("click", () => {
        if (navbar) {
            toggleBtn.classList.add("active-btn");
            navLists[index].classList.add("active-ul");
            navbar = false;
        } else {
            toggleBtn.classList.remove("active-btn");
            navLists[index].classList.remove("active-ul");
            navbar = true;
        }
    });
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        toggleBtns.forEach(btn => btn.classList.remove("active-btn"));
        navLists.forEach(list => list.classList.remove("active-ul"));
        navbar = true;
    });
});

// faq
let toggles = document.getElementsByClassName("toggle");
let contentDiv = document.getElementsByClassName("content");
let icons = document.getElementsByClassName("icon");

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", () => {
    if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
      toggles[i].style.color = "#0084e9";
      icons[i].classList.remove("fa-plus");
      icons[i].classList.add("fa-minus");
    } else {
      contentDiv[i].style.height = "0px";
      toggles[i].style.color = "#111130";
      icons[i].classList.remove("fa-minus");
      icons[i].classList.add("fa-plus");
    }

    for (let j = 0; j < contentDiv.length; j++) {
      if (j !== i) {
        contentDiv[j].style.height = "0px";
        toggles[j].style.color = "#111130";
        icons[j].classList.remove("fa-minus");
        icons[j].classList.add("fa-plus");
      }
    }
  });
}

//ficky
document.addEventListener("DOMContentLoaded", function () {
  let elem = document.querySelector(".carousel");
  let flkty = new Flickity(elem, {
    wrapAround: true,
    autoPlay: 3000,
    pauseAutoPlayOnHover: false,
    prevNextButtons: false,
    pageDots: false,
  });
});
