// vérifier si le fichier et bien relié
console.log("Bonjour tout le monde") 

// faire un +1 au nombre
function Increment(){
   let valueInput =document.getElementById("valueInput");
   let value = parseInt(valueInput.value,10);
   valueInput.value = value +1;
}

// faire un -1 au nombre
function Decrementer(){
   let valueInput = document.getElementById("valueInput");
   let value = parseInt(valueInput.value,10);
    // decrementer si la valeur et supérieur à 0 uniquement
   if(value > 0){
        valueInput.value = value -1;
   }
}




// autre possibiliter d'increment et decrement 

// let x = 0;
// let valueInput = document.getElementById("valueInput");
// const Increment = document.getElementById("increment");
// const Decrement = document.getElementById("decrement");

// Increment.addEventListener("click", function(){
//     valueInput.textContent = x++;
// })

// Decrement.addEventListener("click", function(){
//     valueInput.textContent = x--;
// })