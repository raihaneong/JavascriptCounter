let countEl = document.getElementsByClassName('number')

let count = 0;

function increment() {
    count = count + 1;
    countEl.innerText = count
    console.log(countEl);
}

increment();