function GetClock() {
    var d = new Date();
    var nhour = d.getHours(), nmin = d.getMinutes();
    if (nmin <= 9) nmin = "0" + nmin

    var clocktext = "" + nhour + ":" + nmin + " Eastern Time";
    document.getElementById('clockbox').innerHTML = clocktext;
}
GetClock();
setInterval(GetClock, 1000);