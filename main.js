const video = document.querySelector('video');

video.addEventListener('play', () => {
    video.controls = false;
});

video.addEventListener('mouseenter', () => {
    video.controls = true;
});

//menu
document.querySelector('.barClick').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var menuIcon = document.querySelector('.menuIcon');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
        menuIcon.style.display = 'none';
    } else {
        menu.style.display = 'none';
        menuIcon.style.display = 'flex';
    }
});

//backtotop
const mybutton = document.getElementById("toTop");
const scrollFunction = () => {
  if (document.body.scrollTop > 220 || document.documentElement.scrollTop > 220) {
    mybutton.classList.remove("hidden");
  } else {
    mybutton.classList.add("hidden");
  }
};
const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
mybutton.addEventListener("click", backToTop);

window.addEventListener("scroll", scrollFunction);

//to down

const myDowbutton = document.getElementById("toBottom");

const scrollDown = () => {
  window.scrollTo({
    top: window.scrollY + 600,
    behavior: "smooth",
  });
};

myDowbutton.addEventListener("click", scrollDown);

