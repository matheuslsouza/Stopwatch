window.onload = function () {

    var minute = 00;
    var seconds = 00;
    var tens = 00;
    var appendMinute = document.getElementById("minute");
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval = null;

    buttonStart.onclick = function () {

        clearInterval(Interval);
        Interval = setInterval(startTimer, -1);
    }

    buttonStop.onclick = function () {
        clearInterval(Interval);
    }


    buttonReset.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        minute = "00" ;
        appendMinute.innerHTML = minute ;
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }



    function startTimer() {
        tens++;

        if (tens <= 99) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens ;
        }
        

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds ;
            tens = 0;
      
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

        if (seconds > 59){
            console.log("minute");
            minute++
            appendMinute.innerHTML = "0" + minute;
            seconds = 0;
        }

        if(minute >9){
            appendMinute = minute;
        }
    }


}