const data = [
  {
    id: 1,
    name: "Seiko 5 Day-Date Automatic 7s26",
    img: "https://m.media-amazon.com/images/I/81N3QAwNtcL._AC_UY900_.jpg",
    price: 49900,
    cat: "Luxury",
  },
  {
    id: 2,
    name: "Casio Duro MDV-107",
    img: "https://www.tutuora.hu/img/products/mdv-107-1a1.jpg",
    price: 38490,
    cat: "Sport",
  },
  {
    id: 3,
    name: "Casio G-SHOCK G-100BB",
    img: "https://www.watchdepot.com.au/cdn/shop/products/30258193-a_1000x.jpg?v=1662128973",
    price: 24900,
    cat: "Sport",
  },
  {
    id: 4,
    name: "Fossil Machine FS5251SET",
    img: "https://img.eobuwie.cloud/eob_product_512w_512h(c/4/8/4/c484529d1132b92c7dd68895feaf4d624dd9b0f6_fs5251set_main_4053858738225.jpg,webp)/karora-fossil-machine-fs5251set-brown-black.webp",
    price: 60550,
    cat: "Casual",
  },
  {
    id: 5,
    name: "Casio Fishing Gear AMW-703",
    img: "https://cdn.creationwatches.com/products/images/ebayimages/AMW-703D-1AVDF.jpg",
    price: 28000,
    cat: "Sport",
  },
  {
    id: 6,
    name: "Casio MTP-1303PD",
    img: "https://www.tutuora.hu/img/products/mtp-1303pd-1a.jpg",
    price: 19900,
    cat: "Casual",
  },
  {
    id: 7,
    name: "Certina DS-4 Hi-Beat cal.854-1 Mechanical",
    img: "https://img.jofogas.hu/hdimages/Vintage_Certina_DS_4_Ferfi_Karora_Az_1970_Es_Evekbol_358862419534085.jpg",
    price: 74900,
    cat: "Casual",
  },
  {
    id: 8,
    name: "Raketa Vernissage Mechanical",
    img: "https://i.ebayimg.com/images/g/DnsAAOSwFaRkiwrn/s-l1200.webp",
    price: 94900,
    cat: "Dress",
  },

  {
    id: 9,
    name: "Vostok Komandirskie Submarine Mechanical",
    img: "https://ufa.kronostime.ru/upload/images.opt/resize_cache/iblock/d8e/99999_500_1/921289.webp",
    price: 34900,
    cat: "Casual",
  },

  {
    id: 10,
    name: "Casio AE-1200WH 'Casio Royale'",
    img: "https://timestore.vshcdn.net/images/w700/448627-1.jpg?v=1675078930",
    price: 15990,
    cat: "Sport",
  },
];

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts
    .map(
      (product) =>
        ` <div class="product">
        <img src=${product.img} alt="">
        <span class="name">${product.name}</span>
        <span class="priceText">${product.price} Ft</span>
    </div>
        `
    )
    .join("");
};

displayProducts(data);
searchInput.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();

  if (value) {
    displayProducts(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
    );
  } else {
    displayProducts(data);
  }
});

const setCategories = () => {
  const allCats = data.map((item) => item.cat);
  const categories = [
    "All",
    ...allCats.filter((item, i) => {
      return allCats.indexOf(item) === i;
    }),
  ];
  categoriesContainer.innerHTML = categories
    .map(
      (cat) =>
        `
    <span class="cat">${cat}</span>
    `
    )
    .join("");

  categoriesContainer.addEventListener("click", (e) => {
    const selectedCat = e.target.textContent;

    selectedCat === "All"
      ? displayProducts(data)
      : displayProducts(data.filter((item) => item.cat === selectedCat));
  });
};

const setPrices = () => {
  const priceList = data.map((item) => item.price);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);

  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value = maxPrice;
  priceValue.textContent = maxPrice + "Ft";

  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = e.target.value + "Ft";
    displayProducts(data.filter(item=>item.price <= e.target.value))
  });
};

setCategories();
setPrices();
