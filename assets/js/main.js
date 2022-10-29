function play() {
  let lvl = document.getElementById("level").value;
  console.log("play");

  if (lvl == "easy") {
    console.log("easy");

    // console.log("play2");
    const griglia = document.getElementById("griglia");
    // console.log(griglia);

    function createSquare(counter) {
      const div = document.createElement("div");
      div.classList.add("square100");
      div.innerHTML = counter;
      return div;
    }

    // console.log(createSquare());

    for (let i = 1; i <= 100; i++) {
      let currentElement = createSquare(i);
      //   console.log(currentElement);

      currentElement.addEventListener("click", function () {
        // console.log(this);
        this.classList.toggle("active");
      });

      griglia.append(currentElement);
    }
  } else if (lvl == "medium") {
    console.log("medium");
    // console.log("play2");
    const griglia = document.getElementById("griglia");
    // console.log(griglia);

    function createSquare(counter) {
      const div = document.createElement("div");
      div.classList.add("square81");
      div.innerHTML = counter;
      return div;
    }

    // console.log(createSquare());

    for (let i = 1; i <= 81; i++) {
      let currentElement = createSquare(i);
      //   console.log(currentElement);

      currentElement.addEventListener("click", function () {
        // console.log(this);
        this.classList.toggle("active");
      });

      griglia.append(currentElement);
    }
  } else if (lvl == "hard") {
    console.log("hard");
    // console.log("play2");
    const griglia = document.getElementById("griglia");
    // console.log(griglia);

    function createSquare(counter) {
      const div = document.createElement("div");
      div.classList.add("square49");
      div.innerHTML = counter;
      return div;
    }

    // console.log(createSquare());

    for (let i = 1; i <= 49; i++) {
      let currentElement = createSquare(i);
      //   console.log(currentElement);

      currentElement.addEventListener("click", function () {
        // console.log(this);
        this.classList.toggle("active");
      });

      griglia.append(currentElement);
    }
  } else {
    console.log("uccidimi");
    document.getElementById("sadMessage").innerHTML =
      "Don't you wanna have fun?";
  }
}
