let count = 0;

function increaseCounter() {
    count++;
    console.log(count);

    setTimeout(increaseCounter,1000);
}

increaseCounter();