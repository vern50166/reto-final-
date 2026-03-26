// Productos dinámicos
const productos = [
  {
    nombre: "TOP",
    precio: "$179.000",
    img: "img/25.jfif"
  },
  {
    nombre: "CORSSET",
    precio: "$199.000",
    img: "img/18.jfif"
  },
  {
    nombre: "BERMUDA",
    precio: "$189.000",
    img: "img/8.jfif"
  },
  {
    nombre: "ZAPATOS MARY JANE",
    precio: "$300.000",
    img: "img/13.jfif"
  }
];

// Renderizar productos
const container = document.getElementById("products");

productos.forEach(p => {
  const div = document.createElement("div");
  div.classList.add("product");

  div.innerHTML = `
    <img src="${p.img}">
    <h4>${p.nombre}</h4>
    <p>${p.precio}</p>
  `;

  container.appendChild(div);
});

// Eventos
document.getElementById("shopBtn").addEventListener("click", () => {
  alert("Ir a tienda 🔥");
});

document.getElementById("cart").addEventListener("click", () => {
  alert("Carrito próximamente 🛒");
});

document.getElementById("verTodo").addEventListener("click", () => {
  alert("Ver todos los productos");
});

