"use strict";

const container = document.querySelector(".container");
const canvasBtn = document.querySelector(".grid-setter");
// var grid;
// var gridBox;

function createGrids(canvasChange) {
  container.innerHTML = "";
  let x = canvasChange;

  for (let gridBox = 0; gridBox < x; gridBox++) {
    const gridBox = document.createElement("div");
    gridBox.setAttribute("class", "gridbox");

    container.appendChild(gridBox);

    for (let grid = 0; grid < x; grid++) {
      const grid = document.createElement("div");
      grid.setAttribute("class", "grid");
      gridBox.appendChild(grid);

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

canvasBtn.addEventListener("click", canvasChange);
