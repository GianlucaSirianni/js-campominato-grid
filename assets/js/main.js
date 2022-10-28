let level = document.getElementById("level").value;

function play() {
    console.log('play');

  if (level == "easy") {



    console.log('easy');
    
    console.log("play2");
    const griglia = document.getElementById("griglia");
    console.log(griglia);

    function createSquare() {
      const div = document.createElement("div");
      div.classList.add("square");
      return div;
    }

    console.log(createSquare());

    for (let i = 0; i < 100; i++) {
      let currentElement = createSquare();
      console.log(currentElement);

      currentElement.addEventListener("click", function () {
        // console.log(this);
        this.classList.toggle("active");
      });

      griglia.append(currentElement);
    }




  } else if (level == "medium") {
    console.log('medium');
  } else if (level == "hard"){
    console.log('hard');
  } else {
    console.log('uccidimi')
  }
}
