let countEl = document.getElementsById('number')

let count = 0;

function increment() {
    count = count + 1;
    countEl.innerText = count
}