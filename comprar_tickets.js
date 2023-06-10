
// valor de entrada fijo
const precioEntrada = 200;

// Elementos a utilizar
let formulario = document.querySelector("#form");
let cantidadInput = document.querySelector("#cantidad");
let categoria = document.querySelector("#menuDesplegable");
let totalAPagar = document.querySelector("#importe_total");

// botones
let btnResumen = document.querySelector("#resumen");
let btnBorrar = document.querySelector("#borrar");

// Se calcula el precio segun la cantidad de tickets y el descuento aplicado
function calcularPrecio(){
    let total = cantidadInput.value * precioEntrada;
    // calcular descuento según la categoría que se elija
    if (categoria.value == "estudiante"){
        descuento = total * 80 / 100;
        total = total - descuento;
        totalAPagar.innerText = `Total a Pagar: $ ${total}`;
        return
    }
    else if(categoria.value == "trainee"){
        descuento = total * 50 / 100;
        total = total - descuento;
        totalAPagar.innerText = `Total a Pagar: $ ${total}`;
        return
    }
    else if(categoria.value == "junior"){
        descuento = total * 15 / 100;
        total = total - descuento;
        totalAPagar.innerText = `Total a Pagar: $ ${total}`;
        return
    }
    totalAPagar.innerText =`Total a Pagar: $ ${total}`;
}
//se comprueba que no hayan datos incompletos mediante alertas
function mostrarAlertas(){
    let nombreInput = document.querySelector("#nombre").value;
    let apellidoInput = document.querySelector("#apellido").value;
    let correoInput = document.querySelector("#correoElectronico").value;
    
        if (nombreInput == '' && apellidoInput == '' && correoInput == ''){
            alert ('COMPLETA LOS CAMPOS REQUERIDOS');
            return
        }
        else if (nombreInput == ''){
            alert('INGRESA TU NOMBRE');
            return
        }
        else if(apellidoInput == ''){
            alert('INGRESA TU APELLIDO');
            return
        }
        else if(correoInput == ''){
            alert('INGRESA TU CORREO');
            return
        }
        else if (cantidadInput.value < 1 || cantidadInput.value > 100){
            alert('NUMERO INVALIDO');
        }
    } 

// ejecucion de las funciones mediante eventos desde los botones
btnResumen.addEventListener('click',(event)=>{
    event.preventDefault();
    mostrarAlertas();
    calcularPrecio();
})
//se resetean los campos
btnBorrar.addEventListener('click',()=>formulario.reset(totalAPagar.innerText=`Total a Pagar: $ 0`));

