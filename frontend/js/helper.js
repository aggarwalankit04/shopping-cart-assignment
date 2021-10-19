
let prodList = document.getElementById("prod");

function onLoadCartNumbers() {
    let productCartCounter = localStorage.getItem("cartCounter");
    if (productCartCounter) {
        document.querySelector(".cart-count").textContent = productCartCounter;
    }
}

function Header(){
    let header = ` <div class="container d-flex">
    <div class="left d-flex">
      <img
        src="../static/images/logo.png"
        alt=""
        height="80%"
        width="65%"
      />
      <ul class="main-nav d-flex">
        <li>
          <a href="home.html" class="nav-links">Home</a>
        </li>
        <li>
          <a href="product.html" class="nav-links">Products</a>
        </li>
      </ul>
    </div>
    <div class="right">
      <div class="login-links">
        <a href="login.html">SignIn</a> |
        <a href="register.html">Register</a>
      </div>
      <ul>
        <li>
          <a href="cart.html" class="nav-links">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            <span class="cart-count">0</span> Items
          </a>
        </li>
      </ul>
    </div>
  </div>`;
  document.querySelector(".header-content").innerHTML = header;
}

function footer(){
    let footerContent = `<div class="footer-content">
    <div class="container">
      <p>
        Copyright &#169; 2011-2018 Sabka Bazar Grovery Supllies Pvt. Ltd.
      </p>
    </div>
  </div>`;
  document.querySelector(".footer-content") != null ? document.querySelector(".footer-content").innerHTML = footerContent : "";
}

Header();
footer();
onLoadCartNumbers();


function getFromAPI(url, callback, filterCat = false) {
    var obj;
    fetch(url)
        .then((res) => res.json())
        .then((data) => (obj = data))
        .then(() => callback(obj, filterCat));
}
