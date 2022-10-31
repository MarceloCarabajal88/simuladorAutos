let victory = new Audio('./assets/sonidos/sfx-victory6.mp3');
let loss= new Audio('./assets/sonidos/sfx-defeat1.mp3');







let lstlocal = JSON.parse(localStorage.getItem("item")); 

if(lstlocal===null){
  swal({
    title: "ERROR!",
    text: "Debes volver a la pagina  Inicial (index) y agregar tus datos!",
    icon: "error",
    
    button: "volver al inicio!",
  })
  .then(() => {
    location.href="index.html";
  }
  );


  

}

let saldoaux=0;


console.log(lstlocal[lstlocal.length-1].usuario+' Este es el ultimo item del array');
console.log(lstlocal[lstlocal.length-1].saldo+' Este es el ultimo item del array');

console.table(lstlocal);
//OBTENGO NOMBRE DEL USUARIO DEL ULTIMO OBJETO DE LA LISTA
const nomuser= lstlocal[lstlocal.length-1].usuario;




  
 





//let saldo=2000;
let saldo=lstlocal[lstlocal.length-1].saldo;
document.getElementById('saldovisual').innerHTML=saldo;
document.getElementById('nombreusuario').innerHTML=nomuser;

$('.toggle-click').on('click',function(){
  $('.toggle-click').removeClass('show-red');
  $(this).addClass('show-red');
});

/*OBTENER EL AUTO SELECCIONADO POR EL USUARIO Y GUARDARLO EN UNA VARIABLE RESPECTIVAMENTE 
 EN EL CASO QUE LA VARIABLE GANADOR SEA TRUE, EL AUTO DEBERA LLEGAR PRIMERO*/

 $("#car1_select").click( function(){
  autousuario=1;

});

$("#car2_select").click( function(){
  autousuario=2;
 
});
 

//NUMEROS ALEATORIOS PARA VER EL AUTO GANADOR, del 0 al 6
  let minrandom = 0;
  let maxrandom = 6;
 

 
  
	

//CAR 1 VERDE CAR 2 AMARILLO
 

function myFunction() {

  let ganador= false;

  let random = Math.floor(Math.random()*(maxrandom-minrandom+1)+minrandom);
  //alert(random);
 
  //DETERMINO SI EL NUMERO RANDOM ES PAR
 //SI EL NUMERO ES PAR EL USUARIO GANA LA PARTIDA SIN IMPORTAT EL AUTO APOSTADO
 
 if(random %2==0){
   ganador= true;
 }
 
 
 let res=0;
 
 function TiempoGanador(boolean){
   
 if(boolean==true){
   res=-1500;
 
 }else{
   res=+1500;
 }
 }
 
 
 TiempoGanador(ganador);
 
  const velocidades=[{
   "curva":'cubicBezier(.1, .02, .1, .1)'
  }];
 
 function CurvasVelocidad(){
   for(x=0;x<5;x++){
 
 // valor random inicial
 let minrandomc = 0;
   let maxrandomc = 4;
 let random1 = Math.floor(Math.random()*(maxrandomc-minrandomc+1)+minrandomc);
 let random2= Math.floor(Math.random()*(maxrandomc-minrandomc+1)+minrandomc);
 
     let vel={
       "curva":'cubicBezier(.'+random1+', '+random2+', .1, .1)'
     }
     velocidades.push(vel);
   }
 }
 
 CurvasVelocidad();
 
 
 
 let curva= velocidades[2].curva;
 
   let iniciar=0;
 
   const btnrestart= document.getElementById("restart");
 btnrestart.disabled=true;
 






//OBTENGO NOMBRE DEL USUARIO
//const nomuser = document.getElementById("nomuser").value; 


//OBTENGO APUESTA DEL USUARIO
let apuesta = parseInt(document.getElementById("apuesta").value); 



  let finalmessage="";
  //let nomuser= prompt('INGRESE SU NOMBRE');
  if(ganador==true){
 finalmessage=' Felicidades !!! '+nomuser+' Ganaste la Carrera';
}
else 
{
  finalmessage=' Lo siento !!! '+nomuser+' Perdiste la carrera, vuelve a intentarlo';
}
 
const parrafo= document.querySelector(".mensajefinal");

parrafo.innerHTML;    // "<strong>Importante</strong>"
parrafo.textContent;  // "Importante"

parrafo.textContent = finalmessage;  // No interpreta el HTML

  


 let tiempocar1=0;
 let tiempocar2=0;


 if(autousuario==1){
tiempocar1=res;

 }
 else{
  tiempocar2=res;
 }


 
// Obtengo el valor del input html y lo asigno a la variable tiempo.
  let tiempo = document.getElementById("tiempo").value; 
let tiempo2= parseInt(tiempo) *1000; // Pasar los segundos a milisegundos
let cubic="cubicBezier(.5, .02, .1, .5)";
  




switch(ganador){
  case true:
    const audiowin= setTimeout(()=>{
      victory.play();
    },tiempo2 + 3000);


    saldoaux=saldo+apuesta;
    lstlocal[lstlocal.length-1].saldo=saldoaux;
    lstlocal[lstlocal.length-1].puntaje+=100;

    break;
    case false:
      const lossw= setTimeout(()=>{
        loss.play();
      },tiempo2+3000);
      
      saldoaux= saldo-apuesta;
      lstlocal[lstlocal.length-1].saldo=saldoaux;
      lstlocal[lstlocal.length-1].puntaje-=50;
    
      break;
}

localStorage.setItem("item", JSON.stringify(lstlocal));


  let jugadorHisto={
    "Nombre":nomuser,
    "apuesta":apuesta,
    "resultado":ganador
    };

console.log("historial")
   
const localStorHistorial= JSON.parse(localStorage.getItem("historico")); // CARGO HISTORICO
 
const URL='./script/data.json';

//FUNCION PARA CARGAR HISTORIAL DEL JSON EN CASO DE Q ESTE SEA NULL
const CargarHistorial= async(URL)=>{
  const respuesta= await fetch (URL);
  const datos= await respuesta.json();
  
  console.log(jugadorHisto);
  datos.push(jugadorHisto);
  localStorage.setItem("historico", JSON.stringify(datos));
}


switch (localStorHistorial) {
  case null:
   alert("entre el his");
    CargarHistorial(URL);
    console.log('ES NULO POR LO QUE LE AGREGON EL ARRAY DE JSON DATA CON LA FUNCION');

 

   
  

  


    break;


  default:


localStorHistorial.push(jugadorHisto);

localStorage.setItem("historico", JSON.stringify(localStorHistorial));

//let historialjugadorActual = historialjugadores.filter(jugadorAc => jugadorAc.Nombre == nomuser);
console.log("Debajo viene historial default");
console.table(localStorHistorial);
//console.log(historialjugadorActual);
  


  }
  

//ANIMACIONES AUTOS




let botonini = anime({
  targets: '#iniciar',
 opacity:0,
loop: false,
 
});



  let design1 = anime({
  targets: '#car1',
  keyframes: [
   
    {translateX: 1200},
   
  ],
  easing: cubic,
  duration: tiempo2+tiempocar1,
  delay:3000,

  loop: false,
 
});


//AUTO AMARILLO
var design = anime({
  targets: '#car2',
  keyframes: [
   
    {translateX: 1200},
   
  ],
  easing: 'cubicBezier(.1, .02, .1, .3)',
  duration: tiempo2+tiempocar2,
  delay:3000,
  loop: false, 
 
});

//ANIMAR PISTA
var design = anime({
  targets: '#track',
  keyframes: [
   
    {translateX: -800},
   
  ],
  easing: 'cubicBezier(.05, .05, .05, .05)',
  duration: tiempo2,
  delay:3000,
  loop: false
});

//ANIMAR META
var design = anime({
  targets: '#finish',
  keyframes: [
   
    {translateX: -400},
   
  ],
  easing: 'cubicBezier(.01, .01, .01, .01)',
  duration: tiempo2,
  delay:3000,
  loop: false
});
// ANIMAR MENSAJE FINAL

var design = anime({
  targets: '#windowfinish',
  opacity:1,

  
  delay:tiempo2+4000,
  loop: false
});


const t = anime.timeline({
  //each of the below animations will have a 1000ms duration
  //and easeInSine easing
  duration: 1000,
  easing: 'easeInSine'
});
t.add({
  targets: '#restart',
  delay: tiempo2+4000,
  opacity:1,
}).add({
  update: function() {
    let btnrestart= document.getElementById("restart");
    btnrestart.disabled=false;
  }

},'-=1000');




//ANIMAR LETRAS SALIDA 

const ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 400;
ml4.durationOut = 300;
ml4.delay = 200;


const letras =anime.timeline({loop: false})

letras.add({
  targets: '.ml4',
  opacity: 1,
  duration: 100,
  delay: 0});

  letras.add({
    targets: '.letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  });
  letras.add({
    targets: '.letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  });
  letras.add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  });
  letras.add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  });
  letras.add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  });
  letras.add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  });
  letras.add({
    targets: '.ml4',
    opacity: 0,
    duration: 400,
    delay: 400
  });

  
  
 

  


}





document.getElementById("iniciar").onclick = function() {myFunction()};




// BOTON CON FUNCION PARA RESETEAR ANIMACIONES
document.getElementById('restart').addEventListener('click', () => {



 //DESACTIVO BOTON UNA VEZ PRESIONADO
 let btnrestart= document.getElementById("restart");
    btnrestart.disabled=true;

    saldo=lstlocal[lstlocal.length-1].saldo;
document.getElementById('saldovisual').innerHTML=saldo;

let design1 = anime({
    targets: '#car1',
    keyframes: [
      {translateX: 0},
    ],
    loop: false,
  });
  
  
  var design = anime({
    targets: '#car2',
    keyframes: [  
      {translateX: 0},
     
    ],
    loop: false, 
  });

  var design = anime({
    targets: '#track',
    keyframes: [ 
      {translateX: 0},
     
    ],
    loop: false
  });


  var design = anime({
    targets: '#finish',
    keyframes: [  
      {translateX: 0},
     
    ],
    loop: false, 
  });

  var design = anime({
    targets: '#windowfinish',
    opacity:0,
    loop: false
  });

  var design = anime({
    targets: '#restart',
    opacity:0,
    loop: false
  });
  
  let botonini = anime({
    targets: '#iniciar',
   opacity:1,
  loop: false,
   
  });

});

 

const btnsalir = document.getElementById("btnsalir");


btnsalir .addEventListener("click", () => {
  location.href="index.html";
    
});
