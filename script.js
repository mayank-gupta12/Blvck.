
var men = document.querySelector(".men")
var nav = document.querySelector("nav")
var overlay = document.querySelector(".overlay")
var navBottom = document.querySelector(".nav-bottom")
var women = document.querySelector(".women")
men.addEventListener("mouseenter", function () {
  // overlay.style.opacity = 1
  overlay.style.top = "93%"
  nav.style.backgroundColor = "black"
  overlay1.style.top = "-300%"
  overlay1.style.zIndex = ""
})
navBottom.addEventListener("mouseleave", function () {
  nav.style.backgroundColor = "transparent"
  // overlay.style.opacity = 0
  overlay.style.top = "-300%"
})
overlay.addEventListener("mouseleave", function () {
  nav.style.backgroundColor = "transparent"
  // overlay.style.opacity = 0
  overlay.style.top = "-300%"
})
women.addEventListener("mouseleave", function () {
  // nav.style.backgroundColor = "transparent"
  // overlay.style.opacity = 0
  overlay.style.top = "-300%"
})

var women = document.querySelector(".women")
var nav = document.querySelector("nav")
var overlay1 = document.querySelector(".overlay1")
var navBottom = document.querySelector(".nav-bottom")
var men = document.querySelector(".men")
women.addEventListener("mouseenter", function () {
  // overlay.style.opacity = 1
  overlay1.style.top = "93%"
  nav.style.backgroundColor = "black"
})
navBottom.addEventListener("mouseleave", function () {
  nav.style.backgroundColor = "transparent"
  // overlay.style.opacity = 0
  overlay1.style.top = "-300%"
})
overlay1.addEventListener("mouseleave", function () {
  nav.style.backgroundColor = "transparent"
  // overlay.style.opacity = 0
  overlay1.style.top = "-300%"
})

men.addEventListener("mouseleave", function () {
  // nav.style.backgroundColor = "transparent"
  // overlay.style.opacity = 0
  overlay1.style.top = "-300%";
})
var whte = document.querySelector(".whte")
var nav = document.querySelector("nav")
var overlay2 = document.querySelector(".overlay2")
var navBottom = document.querySelector(".nav-bottom")
// var men = document.querySelector(".men")
whte.addEventListener("mouseenter", function () {
  // overlay.style.opacity = 1
  overlay2.style.top = "93%"
  nav.style.backgroundColor = "black"
})
navBottom.addEventListener("mouseleave", function () {
  nav.style.backgroundColor = "transparent"
  // overlay.style.opacity = 0
  overlay2.style.top = "-300%"
})
overlay2.addEventListener("mouseleave", function () {
  nav.style.backgroundColor = "transparent"
  // overlay.style.opacity = 0
  overlay2.style.top = "-300%"
})

// // men.addEventListener("mouseleave", function () {
// //   // nav.style.backgroundColor = "transparent"
// //   // overlay.style.opacity = 0
// //   overlay1.style.top = "-300%"

// })

var accessories = document.querySelector(".accessories")
accessories.addEventListener("mouseenter", function () {
  overlay1.style.top = "-300%"
  overlay.style.top = "-300%"
  nav.style.backgroundColor = "transparent"

})
var digital = document.querySelector(".digital")
digital.addEventListener("mouseenter", function () {
  overlay2.style.top = "-300%"
  // overlay.style.top = "-300%"
  nav.style.backgroundColor = "transparent"

})
var nft = document.querySelector(".nft")
nft.addEventListener("mouseenter", function () {
  overlay2.style.top = "-300%"
  // overlay.style.top = "-300%"
  nav.style.backgroundColor = "transparent"

})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

var img1 = document.querySelector("#img-1")
var img1Btn = document.querySelector("#img-1 button")
var img11 = document.querySelector(".img-11")
var img12 = document.querySelector(".img-12")

img11.addEventListener("mousemove", function () {
  img12.style.opacity = 1
  img11.style.display = "none"
  img1Btn.style.top = "74%"
  img1Btn.style.opacity = 1
})
img1.addEventListener("mouseleave", function () {
  img12.style.opacity = 0
  img11.style.display = "initial"
  img1Btn.style.top = "90%"
  img1Btn.style.opacity = 0
})
var img2 = document.querySelector("#img-2")
var img2Btn = document.querySelector("#img-2 button")
var img21 = document.querySelector(".img-21")
var img22 = document.querySelector(".img-22")

img21.addEventListener("mousemove", function () {
  img22.style.opacity = 1
  img21.style.display = "none"
  img2Btn.style.top = "74%"
  img2Btn.style.opacity = 1
})
img2.addEventListener("mouseleave", function () {
  img22.style.opacity = 0
  img21.style.display = "initial"
  img2Btn.style.top = "90%"
  img2Btn.style.opacity = 0
})
var img3 = document.querySelector("#img-3")
var img3Btn = document.querySelector("#img-3 button")
var img31 = document.querySelector(".img-31")
var img32 = document.querySelector(".img-32")

img31.addEventListener("mousemove", function () {
  img32.style.opacity = 1
  img31.style.display = "none"
  img3Btn.style.top = "74%"
  img3Btn.style.opacity = 1
})
img3.addEventListener("mouseleave", function () {
  img32.style.opacity = 0
  img31.style.display = "initial"
  img3Btn.style.top = "90%"
  img3Btn.style.opacity = 0
})
var img4 = document.querySelector("#img-4")
var img4Btn = document.querySelector("#img-4 button")
var img41 = document.querySelector(".img-41")
var img42 = document.querySelector(".img-42")

img41.addEventListener("mousemove", function () {
  img42.style.opacity = 1
  img41.style.display = "none"
  img4Btn.style.top = "74%"
  img4Btn.style.opacity = 1
})
img4.addEventListener("mouseleave", function () {
  img42.style.opacity = 0
  img41.style.display = "initial"
  img4Btn.style.top = "90%"
  img4Btn.style.opacity = 0
})
var img5 = document.querySelector("#img-5")
var img5Btn = document.querySelector("#img-5 button")
var img51 = document.querySelector(".img-51")
var img52 = document.querySelector(".img-52")

img51.addEventListener("mousemove", function () {
  img52.style.opacity = 1
  img51.style.display = "none"
  img5Btn.style.top = "74%"
  img5Btn.style.opacity = 1
})
img5.addEventListener("mouseleave", function () {
  img52.style.opacity = 0
  img51.style.display = "initial"
  img5Btn.style.top = "90%"
  img5Btn.style.opacity = 0
})
var img6 = document.querySelector("#img-6")
var img6Btn = document.querySelector("#img-6 button")
var img61 = document.querySelector(".img-61")
var img62 = document.querySelector(".img-62")
img61.addEventListener("mousemove", function () {
  img62.style.opacity = 1
  img61.style.display = "none"
  img6Btn.style.top = "74%"
  img6Btn.style.opacity = 1
})
img6.addEventListener("mouseleave", function () {
  img62.style.opacity = 0
  img61.style.display = "initial"
  img6Btn.style.top = "90%"
  img6Btn.style.opacity = 0
})
var img7 = document.querySelector("#img-7")
var img7Btn = document.querySelector("#img-7 button")
var img71 = document.querySelector(".img-71")
var img72 = document.querySelector(".img-72")
img71.addEventListener("mousemove", function () {
  img72.style.opacity = 1
  img71.style.display = "none"
  img7Btn.style.top = "74%"
  img7Btn.style.opacity = 1
})
img7.addEventListener("mouseleave", function () {
  img72.style.opacity = 0
  img71.style.display = "initial"
  img7Btn.style.top = "90%"
  img7Btn.style.opacity = 0
})
var img8 = document.querySelector("#img-8")
var img8Btn = document.querySelector("#img-8 button")
var img81 = document.querySelector(".img-81")
var img82 = document.querySelector(".img-82")
img81.addEventListener("mousemove", function () {
  img82.style.opacity = 1
  img81.style.display = "none"
  img8Btn.style.top = "74%"
  img8Btn.style.opacity = 1
})
img8.addEventListener("mouseleave", function () {
  img82.style.opacity = 0
  img81.style.display = "initial"
  img8Btn.style.top = "90%"
  img8Btn.style.opacity = 0
})
var img9 = document.querySelector("#img-9")
var img9Btn = document.querySelector("#img-9 button")
var img91 = document.querySelector(".img-91")
var img92 = document.querySelector(".img-92")
img91.addEventListener("mousemove", function () {
  img92.style.opacity = 1
  img91.style.display = "none"
  img9Btn.style.top = "74%"
  img9Btn.style.opacity = 1
})
img9.addEventListener("mouseleave", function () {
  img92.style.opacity = 0
  img91.style.display = "initial"
  img9Btn.style.top = "90%"
  img9Btn.style.opacity = 0
})








var flag = 0
var arrow = document.querySelector("button i")
var list = document.querySelector(".list")
var body = document.querySelector(".footer")
// var up = document.querySelector("#up")
var down = document.querySelector("#down")
arrow.addEventListener("click", function () {
  if (flag === 0) {
    list.style.display = "initial"
    // up.style.display = "initial"
    // down.style.display = "none"
    flag = 1
  } else {
    flag === 1
    list.style.display = "none"
    // down.style.display = "initial"
    // up.style.display = "none"
    flag = 0
  }
})
list.addEventListener("mouseleave", function () {
  list.style.display = "none"
})