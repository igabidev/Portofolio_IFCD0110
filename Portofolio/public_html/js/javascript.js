document.getElementsByClassName("topnav")[0].style.background = "rgb(38,41,50)";
function navDrop() { // Mobile drop menu
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}
var c1 = [ // change background color
    "rgba(0, 200, 0, 0.8)",
    "rgba(200, 0, 0, 0.8)",
    "rgba(38, 41, 50, 0.8)",
    "rgba(0, 0, 200, 0.7)"
    ];
    var c2 = [ // change text color
    "rgba(0, 200, 0, 0.3)",
    "rgba(200, 0, 0, 0.3)",
    "rgba(38, 41, 50, 0.3)",
    "rgba(0, 0, 200, 0.2)"
    ];
function changeBg(a,b){
    var y = document.getElementsByClassName("copycolor");//para el color de texto
    var z = document.getElementsByClassName("copycolor2");// para background
    var i;
    for (i = 0; i <y.length; i++) {
      y[i].style.color = a;
    }
    for (i = 0; i <z.length; i++) {
      z[i].style.background = b;
    }
    
    //document.getElementById("copycolor").style.color = x;
}
// sticky header 

