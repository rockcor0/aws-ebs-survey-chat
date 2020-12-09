window.addEventListener('load', iniciarEventoHand('h_g_r',true), false);
window.addEventListener('load', iniciarEventoHand('h_b_r',false), false);

function iniciarEventoHand(id, good) {

    var imagen1 = document.getElementById(`${id}1`);

    if(good){
        imagen1.addEventListener('mouseover', function (){imagenHandGoodIn(id, 2, './assets/icons/icon_hand_good_in.png')}, false);
        imagen1.addEventListener('mouseout', function (){imagenHandGoodOut(id, 2, './assets/icons/icon_hand_good_out.png')}, false);
    } else {
        imagen1.addEventListener('mouseover', function (){imagenHandGoodIn(id, 2, './assets/icons/icon_hand_bad_in.png')}, false);
        imagen1.addEventListener('mouseout', function (){imagenHandGoodOut(id, 2, './assets/icons/icon_hand_bad_out.png')}, false);
    }
}

function imagenHandGoodIn(id, n, img){
    document.getElementById(`${id}${1}`).src = img;
}

function imagenHandGoodOut(id, n, img){
    document.getElementById(`${id}${1}`).src = img;
}
