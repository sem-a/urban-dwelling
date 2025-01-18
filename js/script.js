const products = [
  {
    title: "Встраиваемый светильник Markt",
    image: "./img/cards/img1.png",
    price: "5 060",
    sale: {
      isSale: true,
      salePrice: "3 490",
    },
  },
  {
    title: "Линейный светильник ARG",
    image: "./img/cards/img2.png",
    price: "6 700",
    sale: {
      isSale: false,
      salePrice: "3 490",
    },
  },
  {
    title: "Сведодиодный светильник",
    image: "./img/cards/img3.png",
    price: "22 060",
    sale: {
      isSale: true,
      salePrice: "5 060",
    },
  },
  {
    title: "Встраиваемый светильник Markt",
    image: "./img/cards/img1.png",
    price: "3 490",
    sale: {
      isSale: false,
      salePrice: "3 490",
    },
  },
  {
    title: "Линейный светильник ARG",
    image: "./img/cards/img2.png",
    price: "7 060",
    sale: {
      isSale: true,
      salePrice: "6 700",
    },
  },
  {
    title: "Сведодиодный светильник",
    image: "./img/cards/img3.png",
    price: "5 060",
    sale: {
      isSale: false,
      salePrice: "3 490",
    },
  },
  {
    title: "Встраиваемый светильник Markt",
    image: "./img/cards/img1.png",
    price: "7 060",
    sale: {
      isSale: true,
      salePrice: "3 490",
    },
  },
  {
    title: "Линейный светильник ARG",
    image: "./img/cards/img2.png",
    price: "6 700",
    sale: {
      isSale: false,
      salePrice: "3 490",
    },
  },
];

const cardsGrid = document.querySelector("#cards");

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
  <div class="card__image">
    ${
      product.sale.isSale
        ? `<div class="card__image__sale-icon">
        Акция
      </div>`
        : ""
    }
    <img src="${product.image}" alt="card-image" />
    <div class="card__image__btn-details"><p>Подробнее</p></div>
  </div>
  <div class="card__title">
    <h3>${product.title}</h3>
  </div>
  ${
    product.sale.isSale
      ? `<div class="card__price __sale">
      <p>${product.sale.salePrice} ₽<span>${product.price}</span></p>
    </div>`
      : `<div class="card__price">
      <p>${product.price}</p>
    </div>`
  }
  `;

  cardsGrid.appendChild(card);
});
