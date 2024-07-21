// this function adds a grid made of divs i will call "helter/skelter", inside the div called "canvas".
function grid() {

    const canvas = document.querySelector("#canvas");

    /*lets say you need a 16x16 grid. the for loop below will run 16 times. 
      creating 16 long vertical divs, called "helters".
      and 16 divs, called "skelters", inside of each helter.*/
    for (let i = 0; i < 16; i++) {
        const helter = document.createElement("div");

        helter.className = "helter";

        //this will append each helter inside the canvas.
        canvas.appendChild(helter);

        /*this loop runs 16 times each time the helter loop runs once. 
          since it's inside of the helter loop. 
          it will create 16 skelters, inside each helter.*/
        for (let i = 0; i < 16; i++) {
            const skelter = document.createElement("div");

            skelter.className = "skelter";

            //this appends the skelters inside each helter.
            helter.appendChild(skelter);

            /*this function and eventListener below it adds color to a skelter, 
              when a mouse pointer moves onto it.
              acting as a pencil/marker or a "pen", on the whole canvas.
              more colors will be added later, and the whole setup will change.*/
            function pen () {
              skelter.style.background = "blue";
              skelter.style.color = "blue";
            };
            skelter.addEventListener("mouseenter", pen);

        };

    };

};

/*this console.logs the grid function. so whenever the page is loaded,
  a grid of 16x16 is automatically built. like it was always there.
  i'll try to figure out a better way to do this. later.*/
console.log(grid());