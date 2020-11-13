setInterval(function () {
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
     var clockTime = hours + ":" + minutes + ":" + seconds + " ";

    var clock = document.getElementById('clock');
    clock.innerText = clockTime;
}, 1000);


