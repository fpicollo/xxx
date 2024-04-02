
  let mensaje = "Ingrese una opción: 1- Agragar producto al carrito ; 2- Consultar Total; 3- Finalizar compra; 0- Salir"
  let opcion 
  let total = 0

  do {
    opcion = Number(prompt(mensaje))
    if (opcion === 1){
      total = agregarProd(total)
    } else if (opcion === 2){
      alert("Lleva gastado : $" + total)
    } else if (opcion === 3){
        if (total > 0){ 
        alert("Debe abonar : $" + total)
        }
        else{
        alert("Debe agregar al carrito para finalizar compra")
        }
      }
    } while (opcion !== 0 && opcion !== 3 )
    


function agregarProd(total) {
  let productos = "Seleccione una golosina: 1- Chupetines $150; 2- Caramelos $50; 3- Chicles $700"
  let opcionCara = Number(prompt(productos))
  if (opcionCara === 1){
    let cantidad = Number(prompt("Cuantos quiere?"))
    total = total + cantidad * 150
  } else if (opcionCara === 2){
     let cantidad = Number(prompt("Cuantos quiere?"))
     total = total + cantidad * 50
  } else if (opcionCara === 3){
    let cantidad = Number(prompt("Cuantos quiere?"))
    total = total + cantidad * 700
  } 
  return total
}