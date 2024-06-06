const products = [
    {
        id: 1,
        name: "Bose BT Earphones",
        description: "Table with purifier",
        price: 500.0,
        image: "scr/assets/2.png",
        thumbnail: [
            "src/assets/2.png",
            "src/assets/3.png",
            "src/assets/4.png",
            "src/assets/6.png",
            "src/assets/7.png",
        ],
        color: [
            "green : #",
            "red : src/assets/3.png",
            " pink : src/assets/4.png",
            "black : src/assets/6.png",
            "white : src/assets/7.png",
        ],
    },
    {
        id: 2,
        name: "Bose BT Earphones",
        description: "Table with purifier",
        price: 500.0,
        image: "scr/assets/2.png",
        thumbnail: [
            "src/assets/2.png",
            "src/assets/3.png",
            "src/assets/4.png",
            "src/assets/6.png",
            "src/assets/7.png",
        ],
        color: [
            "green : #",
            "red : src/assets/3.png",
            " pink : src/assets/4.png",
            "black : src/assets/6.png",
            "white : src/assets/7.png",
        ],
    },
    {
        id: 3,
        name: "Bose BT Earphones",
        description: "Table with purifier",
        price: 500.0,
        image: "scr/assets/2.png",
        thumbnail: [
            "src/assets/2.png",
            "src/assets/3.png",
            "src/assets/4.png",
            "src/assets/6.png",
            "src/assets/7.png",
        ],
        color: [
            "green : #",
            "red : src/assets/3.png",
            " pink : src/assets/4.png",
            "black : src/assets/6.png",
            "white : src/assets/7.png",
        ],
    },
];

function addProduct(newProduct) {
    const cekProduct = products.find((product) => product.id === newProduct.id);
    if (cekProduct) {
        console.log("Produk dengan id tersebut sudah ada");
    } else {
        products.push(newProduct);
        console.log("Product berhasil ditambahkan", "\n", newProduct);
    }
}

function deleteProduct(id) {
    const productIndex = products.findIndex((product) => product.id === id);
    if (productIndex !== -1) {
        products.splice(productIndex, 1);
        console.log("Product berhasil di hapus");
    } else {
        console.log("Produk tidak ditemukan");
    }
}
console.log(deleteProduct(6));

function editProduct(id, newName) {
    const product = products.find((product) => product.id === id);
    if (product) {
        product.name = newName;
        console.log("Name berhasil di update");
    } else {
        console.log("Product tidak ditemukan");
    }
}
editProduct(2, "Update Name");
console.log("Product setelah di update", products);

// console.log(products);
// addProduct({
//     id:1,
//     name: "Sony Headphone",
//     description : "Table with purifier",
//     price : 500.00,
//     image: "scr/assets/2.png",
//     thumbnail: [
//         "src/assets/2.png",
//         "src/assets/3.png",
//         "src/assets/4.png",
//         "src/assets/6.png",
//         "src/assets/7.png"
//     ],
//     color : [
//         "green : #",
//         "red : src/assets/3.png",
//        " pink : src/assets/4.png",
//         "black : src/assets/6.png",
//         "white : src/assets/7.png"
//     ]
// });
//console.log("Setelah porduct di tambahkan: \n",products);
