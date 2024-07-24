const btn = document.querySelector("#btn");

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

    return grid(btnPrompt);

  };

});

/*this function adds a grid made of divs i will call "helter/skelter", inside the div called "canvas".
  default grid size is 16.*/
function grid(num = 16) {

  let gridSize = num;

  const canvas = document.querySelector("#canvas");

  const body = document.querySelector("body");

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

      /*this function and eventListener below it adds color to a skelter, 
        when a mouse pointer moves onto it.
        acting as a pencil/marker or a "pen", on the whole canvas.
        more colors will be added later, and the whole setup will change.*/
      function pen () {
        skelter.style.background = "black";
      };

      /*when a mouse button is pressed anywhere on the body and the cursor moves onto a skelter, 
        pen function runs and color is added to that skelter. */
      body.addEventListener("mousedown", (e) => {
        skelter.addEventListener("mouseenter", pen);
        //stops cursor from turning into not-allowed symbol. because that happened sometimes.
        e.preventDefault();
      });

      /*when mouse button is lifted, pen function stops running.
        because this removes the event listeners from all the skelters. */
      body.addEventListener("mouseup", () => {

        skelter.removeEventListener("mouseenter", pen);

      })

    };

  };

};

/*when body loads, a grid of 16x16 is automatically built. like it was always there.*/
document.body.onload = grid();