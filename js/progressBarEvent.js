function move(percentile, startsIn) {
    var elem = document.getElementById("myBar");
    var width = startsIn;
    var id = setInterval(frame, 10);
    
    function frame() {
        if (width >= percentile) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}