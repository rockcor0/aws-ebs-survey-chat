window.onload = pageReloaded

/**
 * Función inicial al cargar o recargar la página
 */
function pageReloaded(){

    login();

    if(checkOpenedOnce){
        document.getElementById('p1').style.display = 'none';
        document.getElementById('p2').style.display = 'none';
        document.getElementById('p3').style.display = 'none';
        document.getElementById('end').style.display = 'block';
    } 
}

/**
 * Iniciar el proceso de responder una pregunta.
 * @param {Identificador de el div} id 
 * @param {*Identificador del siguiente div} nextId 
 */
function iniciar(responseId, id, nextId){

    saveLocal();
    let answerNumber = getAnswerNumber(responseId.id);
    let answerName = getAnswerName(responseId.id);
    
    if( answerNumber > 0 && answerName > 0){
        createAnswer(answerNumber, answerName);
    }

    //console.log(responseId.id)
    //console.log(`AnswerName = ${answerName}`);
    //console.log(`AnswerNumber = ${answerNumber}`)

    document.getElementById(id).style.display = 'none';
    document.getElementById(nextId).style.display = 'block';

    //percentiles[0] -> Percentil
    //percentiles[1] -> Starts in
    let percentiles = getPercentile(id);
    move(percentiles[0], percentiles[1]); 
}

/**
 * Obtener el percentil a donde debe ubicarse la barra de progreso. 
 * @param {string} id Identificador del div de la pregunta 
 */
function getPercentile(id){
    let percentile = [];

    if(id == 'p1'){
        percentile.push(33);
        percentile.push(1);
    }
    else if(id == 'p2'){
        percentile.push(66);
        percentile.push(33);
    }
    else if(id == 'p3'){
        percentile.push(100);
        percentile.push(66);
    }
    else{
        percentile.push(0);
        percentile.push(0);
    }
    
    return percentile;
}

/**
 * Obtener el valor de la respuesta que calificó el usuario
 * @param {string} id identificador del botón
 */
function getAnswerName(id){
    if(id == 's1_r1' || id == 's2_r1' || id == 'h_g_r1'){
        return 1;
    }
    else if(id == 's1_r2' || id == 's2_r2' || id == 'h_b_r1'){
        return 2;
    }
    else if(id == 's1_r3' || id == 's2_r3'){
        return 3;
    }
    else if(id == 's1_r4' || id == 's2_r4'){
        return 4;
    }
    else if(id == 's1_r5' || id == 's2_r5'){
        return 5;
    }
    else{
        return 0;
    }
}

/**
 * Obtener el número de la pregunta respondida
 * @param {string} id identificador del botón.
 */
function getAnswerNumber(id){
    if(id.includes('1_r')){
        return 1;
    } 
    else if(id.includes('2_r')){
        return 2;
    }
    else if(id.includes('h_')){
        return 3;
    }
    else {
        return 0;
    }
}

/**
 * Obtener los parámetros de la URL. 
 */
function getUrlParams(){
    var UrlActual = window.location;
    var params = UrlActual.href.split('?')[1].split('&');
    
    return params;
}

/**
 * Obtener el conversationId de los parámetros de la URL.
 */
function getConversationId(){
    let urlParams = getUrlParams();
    var interactionId = '';

    for(i in urlParams){
        if(urlParams[i].includes('interactionId')){
            interactionId = urlParams[i].split('=')[1];
            break;
        }
    }
    return interactionId;
}