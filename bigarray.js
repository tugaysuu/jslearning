const users = [
  {
    id: 1,
    name: "Tugay",
    products: [
      {
        Brand: "Ford",
        Model: "Falcon",
        Year: 1960,
      },
      {
        Brand: "Renault",
        Model: "Clio",
        Year: 1990,
      },
    ],
  },
  {
    id: 2,
    name: "Ayşe",
    products: [
      {
        Brand: "Opel",
        Model: "Astra",
        Year: 2023,
      },
      {
        Brand: "BMW",
        Model: "D502",
        Year: 2011,
      },
    ],
  },
  {
    id: 3,
    name: "Ali",
    products: [
      {
        Brand: "Tesla",
        Model: "Model X",
        Year: 2020,
      },
      {
        Brand: "",
        Model: "Civic",
        Year: 2010,
      },
    ],
  },
];

function filterByYear(ide, year) {
  users.forEach((user) => {
    
    user.products.forEach((product) => {
      if ((user.id == ide) & (product.Year > year)) {
        console.log(
          `ID: ${user.id}, Brand: ${product.Brand}, Model: ${product.Model}, Year: ${product.Year}`
        );
      }
    });
  });
}

filterByYear(3, 2009);
