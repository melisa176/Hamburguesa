const contenedorTarjetas = document.getElementById("productos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista en bicicletas.js */
function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevaComida = document.createElement("div");
    nuevaComida.classList = "tarjeta-producto"
    nuevaComida.innerHTML = `
    <img src="./img/${producto.id}.png">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevaComida);
    nuevaComida.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(comida);