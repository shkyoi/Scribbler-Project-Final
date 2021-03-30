
var configModel=document.getElementsByClassName("Confirmation_box_model")[0];

var configButton=document.querySelectorAll(".trash");

var configNumber=document.getElementById("no");



var j;
for (j = 0; j < configButton.length; j++) {
    let btn=configButton[j];
    btn.onclick=function() {
        configModel.style.display="flex";
    }
}

configNumber.onclick=function () {
    configModel.style.display="none";
}