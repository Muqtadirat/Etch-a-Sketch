"use strict";

const grid = document.querySelectorAll(".grid");

grid.forEach((item) => {
  item.addEventListener("mousemove", () => {
    item.style.cssText = "background-color:black; opacity: 1";
  });
});
