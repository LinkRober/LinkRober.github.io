
function moveMenu(){
        var leftDocument = document.getElementsByClassName("leftlist")[0]
        var rightDocument = document.getElementsByClassName("rightlist")[0];
        console.log(leftDocument)
        console.log(rightDocument)
        // var dd = $('#left_js');
        console.log(leftDocument.style.left);
        // dd.hide(100);
        if (leftDocument.style.clientWidth == 0){
            console.log('111');
            leftDocument.classList.toggle("show_leftlist");
        }else {
            console.log('222')            
            leftDocument.classList.toggle("hide_leftlist");
        }
}


