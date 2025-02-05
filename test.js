console.log("Bonjour tout le monde")


// faire un +1 au nombre
function Increment(){
   const i = 0
   document.getElementById("valueInput").value = i++;
}

// faire un -1 au nombre
function Decrementer(){
    const i = 0
    document.getElementById("valueInput").value = i--;
}

// arréter de decrementer une fois à 0 
function stopDecrement(){
    // obtenir l'element
    const valueInput = document.getElementById("valueInput")
    // definir la valeur 
    let value = parseInt(valueInput.value,10)
    // si la valeur et égal à 0 alors arréter de décrementer sinon continuer
    if(valueInput <= 0){
       clearInterval(Decrementer());
    } else{
        value--;
        valueInput.value = value;
    }
}

// autre possibiliter d'increment et decrement 

// const x = 0;
// const valueInput = document.getElementById("valueInput");
// const Increment = document.getElementById("increment");
// const Decrement = document.getElementById("decrement");

// Increment.addEventListener("click", function(){
//     valueInput.textContent = x++;
// })

// Decrement.addEventListener("click", function(){
//     valueInput.textContent = x--;
// })