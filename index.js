window.onload = function(){
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
  const navbarLinks = document.getElementsByClassName('navbar-links')[0]

  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
  })
  }

const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");


// cart 
let cart = [];
//buttons
let buttonsDOM =[];

// getting the products
class Products{
}
//display product
class UI{
}
//local storage 
class Storage{
}
document.addEventListener("DOMContentLoaded",()=>{
 const ui= new UI();
 const products = new Products();
 //setup app
    ui.setupApp();
 //get all products
 products.getProducts().then(products => {ui.displayProducts(products)
 Storage.saveProducts(products);
 }).then(()=>{
     ui.getBagButtons();
     ui.cartLogic();
 });
});

