
function moveMenu(){
        var leftDocument = document.getElementById("left_js");
        var rightDocument = document.getElementsByClassName("rightlist")[0];

        if (leftDocument.style.clientWidth == 0){
            // leftDocument.classList.add("show_leftlist");
            // leftDocument.classList.add
            //  rightDocument.style.width = "100px";
            // leftDocument.style.opacity = "1";
            leftDocument.classList.remove('hide_leftlist');
            leftDocument.classList.toggle("show_leftlist");
        }else {
            leftDocument.classList.add("hide_leftlist");
            // setTimeout(function () {
            //     leftDocument.classList.remove('hide_leftlist');
            // }, 2000)
        }
}


