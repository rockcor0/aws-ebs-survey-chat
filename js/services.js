document.querySelector("#dolar").addEventListener("click", function () {
  obtenerDatos("dolar");
});

//temp
let accessToken = '***';
let interactionId = '***';
let clientId = '***';
let clientSecret = '***';

var token = '';
var createdInteraction = false;

function login(){
  console.log('login')

  let url = 'https://surveyservitelauth.gns.com.co/api/public/login';

    fetch(url, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '***',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      },
      body: JSON.stringify({
        clientId: clientId,
        clientSecret: clientSecret,
      }),
    }).then(rawResponse => rawResponse.json())
    .then(json => { 
      token = json.access_token;
      console.log(token);
      console.log('fin login interno')  

      if(!createdInteraction){
        createInteraction(token);
      }
    });

    console.log('fin login');  

  /* (async () => {
    const rawResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization",
      },
      body: JSON.stringify({
        clientId: clientId,
        clientSecret: clientSecret,
      }),
    });
    const content = await rawResponse.json();

    token = content.access_token;
    console.log(token);

    return content.access_token;

  })(); */
}

/**
 * Consumir el servicio de Crear Respuesta de la encuesta
 * @param {*Este parámetro indica el número de la pregunta que se desea responder. Parámetro requerido en el sistema. } answerNumber 
 * @param {*Este parámetro hace referencia a la respuesta dada por el cliente. Parámetro requerido } answerName 
 * @param {*} questionId 
 * @param {*} interactionStatus 
 */
function createAnswer(answerNumber, answerName) {

  let url = "***";
  let questionId = '';
  let interactionStatus = '';
  let answerId = ''; //Enviar vacío siempre

  switch(answerNumber) {
    case 1:
      questionId = '10b5e814-d2db-4b1d-bf58-38874f60c65a';
      interactionStatus = 'ABANDONED';
      break;
    case 2:
      questionId = 'b1cc641f-f052-4af3-891a-552515580a30';
      interactionStatus = 'ABANDONED';
      break;
    case 3:
      questionId = '8d00b836-455f-40d7-bc1e-1c7be67852c3';
      interactionStatus = 'COMPLETED';
      break
    default:
      break;
  }

  console.log(`Responding question ${answerNumber}`);
  console.log(`Question id ${questionId}`);
  console.log(`Response ${answerName}`);
  console.log(`Access Token = ${token}`);

  (async () => {
    const rawResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization",
      },
      body: JSON.stringify({
        accessToken: token,
        clientId: clientId,
        clientSecret: clientSecret,
        answer: {
            answerId: answerId,
            answerName: answerName,
            answerNumber: answerNumber
        },
        question: {
            questionId: questionId,
        },
        interactionId: getConversationId(),
        interactionStatus
      }),
    });
    const content = await rawResponse.json();
    createdInteraction = true;
    console.log(content);
  })();
}

/**
 * Consume web service create interaction from Survey API
 */
function createInteraction(accessToken) {
  console.log("Interaction created");

  let url = '***';

  var interactionId = getConversationId();
  
  let clientId = "***";
  let clientSecret = "***";
 
  let interactionDate = "2020-10-07T15:55:00";
  let queueId = "a00867f1-b34a-4d90-9754-104797e939b2";
  let queueName = "ColaPruebaGNS";
  let personId = "cc7201b1-fe41-4655-9d59-30ea013367cb";
  let personName = "GNS";
  let numeroSolicitud = "xyz";
  let customerId = "4124214";
  let customerDni = "4124214";
  let customerName = "Juan Pérez";
  let esAltoValor = "true";
  let ani = "123";
  let dnis = "123";
  let custom1 = "";
  let custom2 = "";
  let custom3 = "";
  let custom4 = "";
  let custom5 = "";
  let origin = "";
  let mediaType = "CHAT";
  let createdDate = "2020-10-07T15:55:00";
  let updatedDate = "2020-10-07T15:55:00";

  //const api = new XMLHttpRequest();
  //api.open(method, url)

  (async () => {
    const rawResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization",
      },
      body: JSON.stringify({
        accessToken: accessToken,
        clientId: clientId,
        clientSecret: clientSecret,
        interaction: {
          interactionId: interactionId,
          interactionDate: interactionDate,
          queue: {
            queueId: queueId,
            queueName: queueName,
          },
          person: {
            personId: personId,
            personName: personName,
          },
          numeroSolicitud: numeroSolicitud,
          customerId: customerId,
          customerDni: customerDni,
          customerName: customerName,
          esAltoValor: esAltoValor,
          ani: ani,
          dnis: dnis,
          custom1: custom1,
          custom2: custom2,
          custom3: custom3,
          custom4: custom4,
          custom5: custom5,
          origin: origin,
          mediaType: mediaType,
          createdDate: createdDate,
          updatedDate: updatedDate,
        },
      }),
    });
    const content = await rawResponse.json();

    console.log(content);
  })();
}

/* function obtenerDatos(valor) {
  console.log("Hello World");

  let url = `https://mindicador.cl/api/${valor}`;

  const api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  api.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      let datos = JSON.parse(this.responseText);

      //TODO
      console.log(datos.serie);

      let resultado = document.querySelector("#resultado");
      resultado.innerHTML = "";

      for (let item of datos.serie) {
        resultado.innerHTML += `<li>${item.fecha} | ${item.valor}</li>`;
      }
    }
  };
} */
