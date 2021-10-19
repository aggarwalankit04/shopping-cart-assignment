
getFromAPI("http://localhost:5000/categories", getData);
getFromAPI("http://localhost:5000/banners", getbannerData);

function getData(objs) {
  objs.forEach((x, ind) => {
    if (x.order !== -1) {
      let classNames = ind % 2 === 0 ? "right" : "";
      prodList.innerHTML += ` <div class="product-card ${classNames}">
        <div class="product-info">
          <h5>${x.name}</h5>         
          <p>${x.description}</p>       
          <a href="product.html#${x.id}"> <button id="cart-button" >Explore ${x.name}</button></a>
        </div>
        <div class="product-image">
        <img src=../${x.imageUrl} alt=${x.name}>
        </div>
      </div>`;
    }
  });
}

function getbannerData(arrOfObjs){
  let crouselStart = `
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>`,
     crouselEnd = `<a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>`, crouselMiddle=``,finalCrousel=``;
  arrOfObjs.forEach((item,index) => {
    crouselMiddle += `<div class="carousel-item ${item.isActive != false ? 'active' : '' }">
        <img
          class="d-block w-100"
          src="..${item.bannerImageUrl}"
          alt="../${item.bannerImageAlt}"
        />
      </div>`
  })
  finalCrousel = `${crouselStart}<div class="carousel-inner" style="max-height: 250px">${crouselMiddle}</div>${crouselEnd}`;

  document.querySelector(".slider-content").innerHTML = finalCrousel;
}