/* Está definiendo variables, lo cual no es recomendable
formulario no está siendo referenciado correctamente */
var formulario = document.querySelector("form");
console.log(formulario);

formulario.onsubmit = function (e) {
  //Estaba mal escrito la llamada al metodo que ocurre al enviar el formulario
  e.preventDefault();

  //Se esta reasignando el valor de la variable e y los nombres de las
  // variables no son claras
  var name = formulario.elements[0];
  var age = formulario.elements[1];
  var nationality = formulario.elements[2];

  var nameValue = name.value;
  var ageValue = age.value;

  var i = nationality.selectedIndex;
  console.log(i);

  var nationValue = nationality.options[i].value;
  console.log(nameValue, ageValue);
  console.log(nationality);

  if (nameValue.length === 0) {
    name.classList.add("error");
  }
  if (ageValue < 18 || ageValue > 120) {
    age.classList.add("error");
  }

  if (nameValue.length > 0 && ageValue > 18 && ageValue < 120) {
    agregarInvitado(nameValue, ageValue, nationValue);
  }
};

var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === 0) {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  var lista = document.getElementById("lista-de-invitados");

  var elementoLista = document.createElement("div");
  // Aquí estaba mal escrito el método add()
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  var spanNombre = document.createElement("span");
  var inputNombre = document.createElement("input");
  var espacio = document.createElement("br");
  spanNombre.textContent = "Nombre: ";
  inputNombre.value = nombre;
  elementoLista.appendChild(spanNombre);
  elementoLista.appendChild(inputNombre);
  elementoLista.appendChild(espacio);

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove();
  };
}

//La funcion crearElemento estaba declarada dentro de agregarInvitado()

function crearElemento(descripcion, valor) {
  var spanNombre = document.createElement("span");
  var inputNombre = document.createElement("input");
  var espacio = document.createElement("br");
  spanNombre.textContent = descripcion + ": ";
  inputNombre.value = valor;
  elementoLista.appendChild(spanNombre);
  elementoLista.appendChild(inputNombre);
  elementoLista.appendChild(espacio);
}