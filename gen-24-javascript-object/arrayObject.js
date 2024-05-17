const readline = require('readline');

//untuk menerima input dari terminal
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let product = [
    {
        name: "Komputer",
        price: 20,
        category: "elektronik"
    },
    {
        name: "Laptop",
        price: 20,
        category: "elektronik"
    }
];

function display(){
    console.log("\nData Produck: ");
    product.forEach((obj, index)=>{
        console.log(`${index + 1}.`,obj);
    });
}
function addProduct() {
    rl.question('Enter name: ', (name) => {
      rl.question('Enter price: ', (price) => {
        rl.question('Enter category: ', (category) => {
          product.push({ name, price: parseInt(price), category });
          console.log("Penambahan Product Baru Berhasil.");
          display();
          rl.close();
        });
      });
    });
  }

  addProduct();
