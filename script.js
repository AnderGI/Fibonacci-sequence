// ;  :

let text = document.getElementById('sequence')
let inputEl = document.getElementById('userInput')
let buttonEl = document.getElementById('send')
let fibonacci = [0]

buttonEl.addEventListener('click',()=>{ 

fibonacci.reduce(function(previousValue, currentValue, index, array){
    if(inputEl.value >= 0){
    fibonacci.push(previousValue-currentValue)
    for(let i =0; i<Number(inputEl.value)-2; i++){
        fibonacci.push(fibonacci[fibonacci.length-1]+fibonacci[fibonacci.length-2])
        
    }
    console.log(fibonacci)
    text.textContent += fibonacci
    } else{
        alert('Please introduce a positive number')
    }
    
},1)
})

//console.log( typeof Number(inputEl.value)