//
// ========== Section 1 Logic ==========
//
const menuContainer = document.getElementById("menu-container");
const leftImage = document.getElementById("leftImage");
const rightImage = document.getElementById("rightImage");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");

const allItems = [leftImage, rightImage, card1, card2];

function blurOthers(exceptArray) {
  allItems.forEach((item) => {
    if (exceptArray.includes(item)) {
      item.classList.remove("blur-sm");
    } else {
      item.classList.add("blur-sm");
    }
  });
}

// Hover logic for Section 1
leftImage.addEventListener("mouseenter", () => {
  blurOthers([leftImage, card1]);
});
card1.addEventListener("mouseenter", () => {
  blurOthers([leftImage, card1]);
});
rightImage.addEventListener("mouseenter", () => {
  blurOthers([rightImage, card2]);
});
card2.addEventListener("mouseenter", () => {
  blurOthers([rightImage, card2]);
});
menuContainer.addEventListener("mouseleave", () => {
  allItems.forEach((item) => item.classList.remove("blur-sm"));
});

//
// ========== Section 2 Logic ==========
//
const menuContainer2 = document.getElementById("menu-container2");
const leftImage2 = document.getElementById("leftImage2");
const rightImage2 = document.getElementById("rightImage2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");

const allItems2 = [leftImage2, rightImage2, card3, card4];

function blurOthers2(exceptArray) {
  allItems2.forEach((item) => {
    if (exceptArray.includes(item)) {
      item.classList.remove("blur-sm");
    } else {
      item.classList.add("blur-sm");
    }
  });
}

// Hover logic for Section 2
leftImage2.addEventListener("mouseenter", () => {
  blurOthers2([leftImage2, card3]);
});
card3.addEventListener("mouseenter", () => {
  blurOthers2([leftImage2, card3]);
});
rightImage2.addEventListener("mouseenter", () => {
  blurOthers2([rightImage2, card4]);
});
card4.addEventListener("mouseenter", () => {
  blurOthers2([rightImage2, card4]);
});
menuContainer2.addEventListener("mouseleave", () => {
  allItems2.forEach((item) => item.classList.remove("blur-sm"));
});

//
// ========== Section 3 Logic ==========
//
const menuContainer3 = document.getElementById("menu-container3");
const leftImage3 = document.getElementById("leftImage3");
const rightImage3 = document.getElementById("rightImage3");
const card5 = document.getElementById("card5");
const card6 = document.getElementById("card6");

const allItems3 = [leftImage3, rightImage3, card5, card6];

function blurOthers3(exceptArray) {
  allItems3.forEach((item) => {
    if (exceptArray.includes(item)) {
      item.classList.remove("blur-sm");
    } else {
      item.classList.add("blur-sm");
    }
  });
}

// Hover logic for Section 3
leftImage3.addEventListener("mouseenter", () => {
  blurOthers3([leftImage3, card5]);
});
card5.addEventListener("mouseenter", () => {
  blurOthers3([leftImage3, card5]);
});
rightImage3.addEventListener("mouseenter", () => {
  blurOthers3([rightImage3, card6]);
});
card6.addEventListener("mouseenter", () => {
  blurOthers3([rightImage3, card6]);
});
menuContainer3.addEventListener("mouseleave", () => {
  allItems3.forEach((item) => item.classList.remove("blur-sm"));
});
