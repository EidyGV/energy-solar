// Creamos función para la imagen en el caso1

function img(){
    Swal.fire({
        title: "Animate al Cambio!🍃✨",
        icon: "success",
        draggable: true
      });
  }

// Creamos función para la imagen en el caso2

function img2(){
    Swal.fire({
        title: "Imagenate todos estos beneficios en tu hogar!🍃🏡✨",
        icon: "success",
        draggable: true
      });
  }

 
function img3(){
    Swal.fire({
        title: "Está cerca de ti, dá el primer paso!😁👌",
        icon: "success",
        draggable: true
      });
  }

  
// Creamos función para la imagen en el caso2

function img4(){
    Swal.fire({
        title: "¿Qué te parece este uso?🏊‍♀️🌴🌴",
        icon: "success",
        draggable: true
      });
  }

  function img5(){
    Swal.fire({
        title: "Que tal más parques así para nuestra ciudad!🌷🎈🎉",
        icon: "success",
        draggable: true
      });
  }



// Creamos la función para visualizar el formulario

function abrir(id){
    // Aplíquemos metodos
    document.getElementById(id).style.display = "block"
}

// Creamos la función de ocultar formualrio

function ocultar(id){
    // Aplíquemos metodos
    document.getElementById(id).style.display = "none"
}

// Creamos la función para visualizar el boton Up

// Guardamos la ubicación exacta del boton

let up = document.querySelector('#up')

window.addEventListener('scroll',btn_up)

function btn_up(){
    if(window.scrollY > 200){
    console.log('%c 😮 Estas ubicado por encima de los 200px','background-color: acqua; color:blue');

        up.classList.add('activar');
    }else{
        up.classList.remove('activar');
    }

}
