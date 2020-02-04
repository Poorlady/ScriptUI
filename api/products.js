exports.getProducts = (req, res) => {
  const products = [
    {
      id: 1,
      name: "Nike Stefan Janoski",
      img:
        "https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Nike-SB-Janoski-Black-%26-White-Canvas-Skate-Shoes-_217330.jpg",
      desc: "Sepatu nike stefan janoski exemplar 2017",
      size: [39, 40, 41, 42],
      colour: ["red", "green"],
      stock: 5,
      price: 900000
    },
    {
      id: 2,
      name: "Puma Thunder Electra",
      img:
        "https://resources.mandmdirect.com/Images/_default/p/u/4/pu4747_1_cloudzoom.jpg",
      desc: "Sepatu Puma Thunder Electra exemplar 2017",
      size: [39, 40, 41, 42],
      colour: ["red", "green"],
      stock: 5,
      price: 1700000
    }
  ];
  res.json(products);
};
