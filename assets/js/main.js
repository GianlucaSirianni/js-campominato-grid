const griglia = document.getElementById('griglia');
console.log(griglia);


function createSquare(){
    const div = document.createElement('div');
    div.classList.add('square');
    return div;
}

console.log(createSquare());



for(let i = 0; i<64; i++){
    let currentElement = createSquare();
    console.log(currentElement);

    currentElement.addEventListener('click', function(){
        console.log(this);
        this.classList.toggle('active');
    })

    griglia.append(currentElement);

}

