document.addEventListener("DOMContentLoaded", function() {
  // Your existing main.js code here
gsap.registerPlugin(ScrollTrigger);

// nav animations
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "nav",
    name: "fade",
    start: "top",
    end: "bottom center",
    scrub: 1.5,
    stagger: true
  },
});

tl.to(".nav_logo, .nav_socials", {
  opacity: 0,
  duration: 1,
});

// img animation

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".about_img",
    start: "top center",
    end: "center",
    scrub: 1.5,
    ease: Power4.easeOut,
    stagger: true
  },
});

tl2.to(".about_img img", {
  scale: 1.1
});

//================================================== responsive nav
let btn = document.querySelector(".nav_btn.button");
let navcnt = document.querySelector(".responsive_nav");
let close = document.querySelector(".close");
let overlay = document.querySelector('.overlay');
let contact = document.querySelector('.contact');
let btn2 = document.querySelector('.btnc');
let btn3 = document.querySelector('.btncc');
let close2 = document.querySelector(".close2");


btn.onclick = function () {
  navcnt.classList.add("active");
  overlay.classList.add("active");
};

close.onclick = function () {
  navcnt.classList.remove("active");
  overlay.classList.remove("active");
};

overlay.onclick = function () {
  navcnt.classList.remove("active");
  overlay.classList.remove("active");
}

btn2.onclick = function () {
  contact.classList.add("active");
  navcnt.classList.remove("active");
  overlay.classList.remove("active");
}

close2.onclick = function () {
  contact.classList.remove("active");
};

btn3.onclick = function () {
  contact.classList.add("active");
}

//================================================== Cursor

var circle = document.querySelector("#cursor");
var frames = document.querySelectorAll("#frame");
window.addEventListener("mousemove", function (dets) {
  gsap.to(circle, {
    x: dets.clientX,
    y: dets.clientY,
    duration: .1,
    ease: Expo
  })
})

frames.forEach(frame => {
  frame.addEventListener("mousemove", function (dets) {
    gsap.to(circle, {
      scale: 7,
      opacity: .2,
      duration: .2
    })
  })

  frame.addEventListener("mouseleave", function (dets) {
    gsap.to(circle, {
      scale: 1,
      opacity: 1
    })
  })
})


//================================================== Loader
var tl3 = gsap.timeline();
tl3.from("#loader .heading h1", {
  y: "100%",
  duration: 1,
  ease: Circ.easeInOut
})

  .to("#loader .heading h1", {
    y: "-105%",
    duration: 1,
    delay: .5,
    ease: Circ.easeInOut
  })

  .to("#loader", {
    y: "-110%",
    duration: 1,
    delay: -.5,
    ease: Circ.easeInOut
  })

  .to("#loader_overlay", {
    height: "100%",
    top: 0,
    duration: 1,
    delay: -1.2,
    ease: Circ.easeInOut
  })

  .to("#loader_overlay", {
    height: "0%",
    duration: 1,
    delay: -.5,
    ease: Circ.easeInOut,
  })

});
