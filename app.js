"use strict";

const container = document.querySelector(".container");
const canvasBtn = document.querySelector(".grid-setter");
const eraser = document.querySelector(".eraser");
const clearBtn = document.querySelector(".clear");
const rainbowBtn = document.querySelector(".rainbow-pen");
const colorBtn = document.querySelector(".pen-color");
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

const color = () => {
  grids.forEach((grid) => {
    grid.addEventListener("mousemove", () => {
      grid.style.cssText = "background-color:black; opacity: 1";
    });
  });
};

const erase = () => {
  grids.forEach((grid) => {
    grid.addEventListener("mousemove", () => {
      grid.style.cssText = "background-color: white";
    });
  });
};

// const rainbow = () => {
//   let randomR = Math.floor(Math.random() * 256);
//   let randomG = Math.floor(Math.random() * 256);
//   let randomB = Math.floor(Math.random() * 256);

//   grids.forEach((grid) => {
//     grid.addEventListener("mousemove", () => {
//       grid.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
//     });
//   });
// };

const rainbow = () => {
  grids.forEach((grid) => {
    grid.addEventListener("mousemove", (event) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;

      const hue = Math.atan2(y - 0.5, x - 0.5) + Math.PI * 2;
      const saturation = 1;
      const lightness = 0.5;

      const color = `hsl(${(hue * 180) / Math.PI}, ${saturation * 100}%, ${
        lightness * 100
      }%)`;

      grid.style.backgroundColor = color;
    });
  });
};



canvasBtn.addEventListener("click", canvasChange);
clearBtn.addEventListener("click", clearCanvas);
colorBtn.addEventListener("click", color);
eraser.addEventListener("click", erase);
rainbowBtn.addEventListener("click", rainbow);
