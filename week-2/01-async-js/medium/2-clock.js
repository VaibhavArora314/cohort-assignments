// To get initial values
const currentDate = new Date();
let hours = currentDate.getHours(),
    minutes = currentDate.getMinutes(),
    seconds = currentDate.getSeconds();

let count = 0;

function increaseCounter() {
    count++;
    seconds++;
    
    if (seconds == 60) {seconds = 0;minutes++;}
    if (minutes == 60) {minutes = 0;hours++;}
    if (hours == 24) {hours = 0;}

    // console.log("Counter value:", count);
    
    // Format 1
    // console.log(`${hours}:${minutes}:${seconds}`);
    
    // Format 2
    console.log(`${hours%12}:${minutes}:${seconds} ${hours < 12 ? "AM" : "PM"}`)
}

setInterval(increaseCounter,1000);