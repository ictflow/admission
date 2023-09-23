// digital clock 

setInterval(function () {

    var clock = new Date();

    var dateTime = clock.getDate();
    var hourTime = clock.getHours();
    var minuteTime = clock.getMinutes();
    var secondTime = clock.getSeconds();
    var monthNum = clock.getMonth();
    var fullYear = clock.getFullYear();
    var day = clock.getDay();
    var partTime = "0";

    if (dateTime < 10) {
        dateTime = "0" + dateTime;
    }
    if (hourTime < 10) {
        hourTime = "0" + hourTime;
    }
    if (minuteTime < 10) {
        minuteTime = "0" + minuteTime;
    }
    if (secondTime < 10) {
        secondTime = "0" + secondTime;
    }

    if (hourTime < 12) {
        partTime = "AM";
    } else {
        partTime = "PM";
    }

    if (hourTime > 12) {
        hourTime -= 12;
    } else if (hourTime == 0) {
        hourTime = 12;
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    // document.querySelector("#clock-call").innerHTML = months[monthNum] + " " + dateTime + " " + fullYear + "  , " + days[day] + " , " + hourTime + ":" + minuteTime + ":" + secondTime + " " + partTime;

    document.querySelector("#year-call").innerHTML = fullYear;

}, 1000)