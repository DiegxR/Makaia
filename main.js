let pElement = [];
let total;
let totalPrice = document.getElementById('total');
for (let i = 1; i <= 7; i++) {
    pElement.push(document.getElementById(`day${i}`))
    console.log(pElement);
}
const button = document.getElementById('week');
button.addEventListener('click', (current)=> {
    console.log(current);
    if (current.path[0].nodeName === "DIV"){
        pElement[current.path[0].id].innerHTML = `$${parseFloat(prompt('Spending of day'))}`;
    } else {
        if (current.path[0].nodeName === "P"){
            current.path[0].id === "" ? alert('Select the spends of day') : current.path[0].innerHTML = `$${parseFloat(prompt('Spending of day'))}`;
        }
    }
   console.log(current.path[0].id);
   total = 0;
   pElement.forEach(element => {
     total += parseFloat(element.innerText.slice(1));
     console.log(parseFloat(total));
   });
   totalPrice.innerText = `$${total}`;
});



