let count = 0;

function increaseCounter() {
    count++;
    console.log(count);
}

setInterval(increaseCounter,1000);