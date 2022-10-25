const btn_index = document.getElementById("btn_index");
const btn_borrar = document.getElementById("btn_borrar");

btn_index.addEventListener("click", () => {
    location.href="index.html";
  });

  btn_borrar.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
  });

  

let historialJug = JSON.parse(localStorage.getItem("historico")); 

if(historialJug!==null){
  creartabla();
}

console.table(historialJug);

function creartabla(){

let tbody= document.getElementById("tbody");


for (var j = 0; j < historialJug.length; j++) {
    // Crea un elemento <td> y un nodo de texto, haz que el nodo de
    // texto sea el contenido de <td>, ubica el elemento <td> al final
    // de la hilera de la tabla
    var hilera = document.createElement("tr");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");
    let textoCelda = document.createTextNode(historialJug[j].Nombre);
    let textoCelda2 = document.createTextNode(historialJug[j].apuesta);
    

    let resultado = ((historialJug[j].resultado) == true) ? "Gano" : "Perdio";
    let textoCelda3 = document.createTextNode(resultado);

    col1.appendChild(textoCelda);
    col2.appendChild(textoCelda2);
    col3.appendChild(textoCelda3);

    hilera.appendChild(col1);
    hilera.appendChild(col2);
    hilera.appendChild(col3);

    tbody.appendChild(hilera);

    
}

}
