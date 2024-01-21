"use strict";

const container = document.querySelector(".container");
const canvasBtn = document.querySelector(".grid-setter");
const eraser = document.querySelector(".eraser");
const clearBtn = document.querySelector(".clear");
const rainbowBtn = document.querySelector(".rainbow-pen");
// let gridBox;
let grids = [];

function createGrids(canvasChange) {
  container.innerHTML = "";
  let x = canvasChange;

  for (let col = 0; col < x; col++) {
    const gridBox = document.createElement("div");
    gridBox.setAttribute("class", "gridbox");

    container.appendChild(gridBox);

    for (let row = 0; row < x; row++) {
      const grid = document.createElement("div");
      grid.setAttribute("class", "grid");
      gridBox.appendChild(grid);
      grids.push(grid);

      grid.addEventListener("mousemove", () => {
        grid.style.cssText = "background-color:black; opacity: 1";
      });
    }
  }
}

const canvasChange = () => {
  let canvasSize = +prompt("Pick your canvas");

  createGrids(canvasSize);
};

createGrids(16);

const clearCanvas = () => {
  grids.forEach((grid) => {
    grid.style.backgroundColor = "white";
  });
};

const erase = () => {
  grids.forEach((grid) => {
    grid.addEventListener("mousemove", () => {
      grid.style.cssText = "background-color: white";
    });
  });
};

canvasBtn.addEventListener("click", canvasChange);
clearBtn.addEventListener("click", clearCanvas);
eraser.addEventListener("click", erase);
