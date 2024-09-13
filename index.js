const btn = document.querySelector("#btn");
const randomBtn = document.querySelector("#randomBtn");
const blackBtn = document.querySelector("#blackBtn");

let gridSize = 16;
let randomCheck = false;
let color = "black";

/*when clicked, this button turns randomCheck value from false to true. because of this, 
  the if statement inside the pen function below will change ink value with randomRGB function. 
  read comments inside the pen function to make more sense.*/
randomBtn.addEventListener("click", () => {

  randomCheck = true;

});

blackBtn.addEventListener("click", () => {

  randomCheck = false;

  color = "black";

});

//button takes user input and makes grid with it.
btn.addEventListener("click", () => {

  //gets user input by a prompt.
  let input = prompt("add a number for grid size. input can't be less then 1 or greater then 100. input has to be a number.");

  //turns input to number.
  let btnPrompt = parseInt(input);

  /*if the input is invalid, throws an alert. else, runs the grid function using number from user input.
    btnPrompt > 100/< 1 checks if input is greater then 100 or less then 1.
    isNaN(btnPrompt) checks if input is not a number.*/
  if (btnPrompt > 100 || btnPrompt < 1 || isNaN(btnPrompt)) {

    alert("invalid input");

  } else {

    /*this will replace the default grid size(which is 16x16) with user input.
      then run the grid function. */
    gridSize = btnPrompt;
    return grid();

  };

});

//generates random number between 0 to 255.
function randomRGBNum() {
  return Math.floor(Math.random() * 256);
};

/*returns a template string that runs randomRGBnum 3 separate times,
  turning it into a string of  random RGB color codes. */
function randomRGB() {
  return `rgb(${randomRGBNum()},${randomRGBNum()},${randomRGBNum()})`
};

/*this function adds a grid made of divs i will call "helter/skelter", inside the div called "canvas".
  default grid size is 16.*/
function grid() {

  const canvas = document.querySelector("#canvas");

  const html = document.querySelector("html");

  /*if a grid already exists inside the canvas, this will remove it. 
    the grid that is about to be created, will take it's place.*/
  canvas.replaceChildren();

  /*say you need a 16x16 grid. the for loop below will run 16 times. 
    creating 16 long vertical divs, called "helters".
    and 16 divs, called "skelters", inside of each helter.*/
  for (let i = 0; i < gridSize; i++) {
    const helter = document.createElement("div");

    helter.className = "helter";

    //this will append each helter inside the canvas.
    canvas.appendChild(helter);

    /*this loop runs 16 times each time the helter loop runs once. 
      since it's inside of the helter loop. 
      it will create 16 skelters, inside each helter.*/
    for (let i = 0; i < gridSize; i++) {
      const skelter = document.createElement("div");

      skelter.className = "skelter";

      //this appends the skelters inside each helter.
      helter.appendChild(skelter);

      let opacity = 0;

      /*this function and eventListeners below it add color to a skelter, 
        when a mouse button is pressed and cursor moves onto it.
        acting as a pencil/marker or a "pen", on the whole canvas.
        more colors will be added later, and the whole setup will change.
        opacity of the colored skelter is 20%/0.2. going over it again increases it by 20%/0.2,
        until it gets to 100%/1.*/
      function pen() {

        /*the ink's value is the color variable.
          the color's value can be changed with different color buttons.
          right now, only random color and black color buttons exist. */
        let ink = color;

        /*if randomCheck is true, changes ink value with randomRGB function.
          which returns a string of random RGB codes.
          giving the skelters a random color, with each interaction. */
        if (randomCheck === true) {
          ink = randomRGB();
        };

        /*initial value of the opacity variable is 0.
          the if statement will add 0.2 to it, each time cursor moves over the skelter.
          when value reaches 1, it stops adding. */
        if (opacity < 1)  {
          opacity += 0.2;
        }
        skelter.style.opacity = opacity;
        skelter.style.background = ink;
      };

      /*when a mouse button is pressed anywhere on the body and the cursor moves onto a skelter, 
        pen function runs and color is added to that skelter. */
      html.addEventListener("mousedown", (e) => {
        skelter.addEventListener("mouseenter", pen);
        //stops cursor from turning into not-allowed symbol. because that happened sometimes.
        e.preventDefault();
      });

      /*when mouse button is lifted, pen function stops running.
        because this removes the event listeners from all the skelters. */
      html.addEventListener("mouseup", () => {

        skelter.removeEventListener("mouseenter", pen);

      })

    };

  };

};

/*when body loads, a grid of 16x16 is automatically built. like it was always there.*/
document.body.onload = grid();