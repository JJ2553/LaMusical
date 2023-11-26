$(document).ready(function () {
    // Función para mostrar/ocultar el carrito
    $("#mostrarCarrito").click(function () {
      $("#carrito").css("right", ($("#carrito").css("right") === "0px" ? "-300px" : "0px"));
    });

    // Función para agregar productos al carrito
    $("#productos li").click(function () {
      let id = $(this).data("id");
      let nombre = $(this).data("nombre");
      let precio = parseFloat($(this).data("precio"));

      // Obtener el carrito almacenado en localStorage
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

      // Verificar si el producto ya está en el carrito
      let productoExistente = carrito.find(item => item.id === id);

      if (productoExistente) {
        // Incrementar la cantidad si el producto ya está en el carrito
        productoExistente.cantidad++;
      } else {
        // Agregar el producto al carrito
        carrito.push({ id, nombre, precio, cantidad: 1 });
      }

      // Guardar el carrito en localStorage
      localStorage.setItem("carrito", JSON.stringify(carrito));

      // Actualizar el carrito en la interfaz
      actualizarCarrito();
    });

    // Función para quitar un producto del carrito
    $("#listaCarrito").on("click", ".quitarProducto", function () {
      let id = $(this).data("id");

      // Obtener el carrito almacenado en localStorage
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

      // Filtrar el carrito para excluir el producto con el ID especificado
      carrito = carrito.filter(item => item.id !== id);

      // Guardar el carrito actualizado en localStorage
      localStorage.setItem("carrito", JSON.stringify(carrito));

      // Actualizar el carrito en la interfaz
      actualizarCarrito();
    });

    // Función para vaciar el carrito
    $("#vaciarCarrito").click(function () {
      // Limpiar el carrito en localStorage
      localStorage.removeItem("carrito");

      // Actualizar el carrito en la interfaz
      actualizarCarrito();
    });

    // Función para actualizar el contenido del carrito en la interfaz
    function actualizarCarrito() {
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      let total = 0;

      // Limpiar la lista del carrito
      $("#listaCarrito").empty();

      // Agregar productos al carrito en la interfaz
      carrito.forEach(function (producto) {
        total += producto.precio * producto.cantidad;

        // Botón para quitar un producto del carrito
        let botonQuitar = `<button class="quitarProducto" data-id="${producto.id}">Quitar</button>`;

        // Agregar el producto al carrito en la interfaz
        $("#listaCarrito").append(`<li>${producto.nombre} - Cantidad: ${producto.cantidad} - $${(producto.precio * producto.cantidad).toFixed(2)} ${botonQuitar}</li>`);
      });

      // Actualizar el total en la interfaz
      $("#total").text(total.toFixed(2));
    }

    // Cargar el carrito al cargar la página
    actualizarCarrito();
  });


  var cantidad = 1;

function incrementar() {
  cantidad += 1;
  document.getElementById("cantidad").value = cantidad;
  if (cantidad == 11) {
    cantidad -= 1;
    document.getElementById("cantidad").value = cantidad;
  }
}

function decrementar() {
  if (cantidad > 1) {
    cantidad -= 1;
    document.getElementById("cantidad").value = cantidad;
  }
}