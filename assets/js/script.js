// copyright year auto update
setInterval(function () {
    var clock = new Date();
    var Year = clock.getFullYear();
    document.querySelector("#copyright").innerHTML = "&copy; " + Year + " - ICT Flow by Jahid";
}, 1000)