function updateClock(){
   var date = new Date();
   var seconds = date.getSeconds() * 6;
   var minutes = date.getMinutes() * 6 + (seconds/60);
   var hours = date.getHours()*30 + (minutes/12);;

   document.getElementById("sec").style.transform = "rotate(" + seconds + "deg)";

   document.getElementById("min").style.transform = "rotate(" + minutes + "deg)";

   document.getElementById("hr").style.transform = "rotate(" + hours + "deg)";

   setTimeout(updateClock, 1000);
}

updateClock();
