window.addEventListener('load', iniciarEventoBoton('s1_r'), false);
window.addEventListener('load', iniciarEventoBoton('s2_r'), false);

function iniciarEventoBoton(id) {

    var imagen1 = document.getElementById(`${id}1`);
    var imagen2 = document.getElementById(`${id}2`);
    var imagen3 = document.getElementById(`${id}3`);
    var imagen4 = document.getElementById(`${id}4`);
    var imagen5 = document.getElementById(`${id}5`);

    imagen1.addEventListener('mouseover', function(){imagenStarIn(id,2)}, false);
    imagen1.addEventListener('mouseout', function(){imagenStarOut(id,2)}, false);

    imagen2.addEventListener('mouseover', function(){imagenStarIn(id,3)}, false);
    imagen2.addEventListener('mouseout', function(){imagenStarOut(id,3)}, false);

    imagen3.addEventListener('mouseover', function(){imagenStarIn(id,4)}, false);
    imagen3.addEventListener('mouseout', function(){imagenStarOut(id,4)}, false);

    imagen4.addEventListener('mouseover', function(){imagenStarIn(id,5)}, false);
    imagen4.addEventListener('mouseout', function(){imagenStarOut(id,5)}, false);

    imagen5.addEventListener('mouseover', function(){imagenStarIn(id,6)}, false);
    imagen5.addEventListener('mouseout', function(){imagenStarOut(id,6)}, false);
}

function imagenStarIn(id, n){
    for(var i=1; i<n; i++ ){
        document.getElementById(`${id}${i}`).src = "./assets/icons/icon_star_in.png";
    }
}

function imagenStarOut(id, n){
    for(var i=1; i<n; i++ ){
        document.getElementById(`${id}${i}`).src = "./assets/icons/icon_star_out.png";
    }
}
