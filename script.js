// ;  :

let text = document.getElementById('sequence')
let inputEl = document.getElementById('userInput')
let sendEl = document.getElementById('send')
let resetEl = document.getElementById('reset')
let fibonacci = [0]

sendEl.addEventListener('click',()=>{ 

fibonacci.reduce(function(previousValue, currentValue, index, array){
    if(inputEl.value >= 0){
    fibonacci.push(previousValue-currentValue)
    for(let i =0; i<Number(inputEl.value)-2; i++){
        fibonacci.push(fibonacci[fibonacci.length-1]+fibonacci[fibonacci.length-2])
        
    }
    console.log(fibonacci)
    text.textContent = fibonacci
    } else{
        alert('Please introduce a positive number')
    }
    
},1)
})

resetEl.addEventListener('click', ()=>{
    fibonacci = [0]
    text.textContent = ""
    console.log(fibonacci)
})
