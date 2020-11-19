
const result = document.getElementById('output');
const input = document.getElementById('userInput');

//on add btn click, take input, add to output
const plusBtn = document.getElementById('addBtn');
plusBtn.addEventListener('click',()=>{
    result.value = Number(input.value) + Number(result.value);
});

//on minus btn click, take input, subtract from output
const minusBtn = document.getElementById('minusBtn');

minusBtn.addEventListener('click',()=>{
    result.value = Number(result.value) - Number(input.value);
});