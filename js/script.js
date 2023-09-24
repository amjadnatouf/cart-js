const buttons = document.querySelectorAll(".card #btn-add");
const cartItems = document.getElementById("cartItems");
const emptyCart = document.querySelector("#empty");
const checkout = document.querySelector("#checkout");
const total = document.querySelector("#total");
const cardImages = document.querySelectorAll(".card img");
const cartModal = document.getElementById("cartModal");
let totalPrice = 0;

function addToCart(productName, price, imgSrc) {
  if (cartItems.innerHTML != "") {
    emptyCart.style.display = "none";
  }
  // cartItems.innerHTML += `${productName} <br> Price: $${price.toFixed(2)} <br>`;
  cartItems.innerHTML += `
      <div class="row col-md-6 mb-4">
      <div class="mr-3">
        <img width="100" class="object-fit-scale-0.5 rounded" height="100" src="${imgSrc}" alt="${productName}">
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <p class="m-0"><strong>${productName}</strong></p>
        <p class="m-0">Price: $${price}</p>
      </div>
  `;
  totalPrice += price;
}

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const productName = btn.getAttribute("name");
    const productPrice = parseFloat(btn.getAttribute("price"));
    let imgSrc = "";

    cardImages.forEach((img) => {
      const alt = img.getAttribute("alt");
      if (alt == productName) {
        imgSrc = img.getAttribute("src");
      }
    });

    addToCart(productName, productPrice, imgSrc);
  });
});

checkout.onclick = function () {
  console.log("Total Price:", totalPrice);
  total.style.display = "block";
  total.innerHTML = `<hr><div class="mx-5 mb-3"><strong>Total Price : ${totalPrice} $</strong></div>`;
};

cartModal.onhide = function () {
  console.log("let's hide total");
  total.style.display = "none";
};
