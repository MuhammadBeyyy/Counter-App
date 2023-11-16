//Counter

let counter = 0
const counterDisplay = document.getElementById('counter')

document.getElementById('increment-button').addEventListener('click', function() {
    counter++
    counterDisplay.textContent = counter
})

document.getElementById('decrement-button').addEventListener('click', function(){
    counter--
    counterDisplay.textContent = counter
})

document.getElementById('reset-button').addEventListener('click', function() {
    counter = 0
    counterDisplay.textContent = counter
})




