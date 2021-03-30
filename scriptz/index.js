
var CreatePM = document.getElementsByClassName("creat_post_modal")[0];

var CreatePB=document.getElementById("create_post");

var CreatePCB=document.getElementsByClassName("creat_post_close")[0];

CreatePB.onclick = function() {

    CreatePM.style.display = "flex";

}

CreatePCB.onclick=function () {
    CreatePM.style.display="none";
}


window.onclick = function(event) {
    if (event.target === CreatePM) {
        CreatePM.style.display = "none";
    }
}