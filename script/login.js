
const lstlocal = JSON.parse(localStorage.getItem("item")); 


//console.table(lstlocal);






const btn = document.getElementById("ingresar");
const btnHistorial = document.getElementById("btn_historial");
const puntaje=0;

 
  let p = document.querySelector("p");


function guardar(valor) {

  const nomuser = document.getElementById("nomuser");
const saldousr = document.getElementById("saldo");
  
  let user = { usuario: nomuser.value, saldo: parseInt(saldousr.value), puntaje:puntaje };
  
  if (user.usuario === "" || isNaN(user.saldo) || user.saldo<1 ) {
   
    p.innerText = "Los campos no deben estar vacios y el saldo debe ser menor a 0";


    return;
    

  } 
  else {
   
    if (valor === "sessionStorage") {
      
      ListaUsuarios.push(user);
      sessionStorage.setItem("item", JSON.stringify(ListaUsuarios));
    }
    if (valor === "localStorage") {

      if  (lstlocal === null){
        const ListaUsuarios2= [
          {"usuario": "User Prueba 1" ,
          "saldo": 2000,
        "puntaje": 20
         },
          {"usuario": "User Prueba 2" ,
          "saldo": 3000,
          "puntaje": 40
           },
           {"usuario": "User Prueba 3" ,
           "saldo": 4000,
          "puntaje": 60
            },];
        
        ListaUsuarios2.push(user);
        localStorage.setItem("item", JSON.stringify(ListaUsuarios2));
      }
      
      
      if (lstlocal!== null){
        if (lstlocal.length > 0 ) { 
          
         lstlocal.push(user); //SI tiene datos el array le igualo al traido del JSON
         
          localStorage.setItem("item", JSON.stringify(lstlocal));
        
        }
        }

    
    

  }
  return true;
}

}

btn.addEventListener("click", () => {


    if(guardar("localStorage")){
    

    location.href="Inicio.html";
  }
});


let getlocal = localStorage.getItem("item"); //asignamos el elemento "precios" a una varible
let getlocal2 = sessionStorage.getItem("item"); //asignamos el elemento "precios" a una varible
console.log(getlocal2);


btnHistorial.addEventListener("click", () => {
  location.href="tabla.html";
});