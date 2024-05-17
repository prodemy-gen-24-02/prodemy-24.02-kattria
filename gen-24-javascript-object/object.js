const readline = require('readline');

//untuk menerima input dari terminal
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

//object
let data = {
    name: "lala lulu",
    umur: 24,
    asal: "Padang"
};

//add property
 function add (key, value){
     if(data.hasOwnProperty(key)){
         console.log(`Data dengan ${key} tersebut sudah ada`);
     } else {
         console.log(`Menambahkan ${key} dengan nilai ${value}`);
         data[key]=value;
     }
 }



//update property
function updateData(key, value){
    if (data.hasOwnProperty(key)) {
        data[key] = value;
        console.log(`Updated ${key} menjadi ${value}`);
      } else {
        console.log(`Key "${key}" tidak ada pada data.`);
      }
}

//delete
function deleteKey(key) {
    if (data.hasOwnProperty(key)) {
      delete data[key];
      console.log(`Deleted key "${key}" dari data.`);
    } else {
      console.log(`Key "${key}" tidak ditemukan.`);
    }
  }

 //menambahkan banyak properti
 function addMultiple(){
    rl.question('Masukkan key (atau ketik "done" untuk selesaikan): ',(key) =>{
        if (key.toLowerCase()=== 'done'){
            console.log("Selesai\n");
            rl.close();
        } else{
            rl.question('Masukkan nilai: ',(value)=>{
                add(key,value);
                addMultiple();
            });
        }  
    });
 } 

//print
console.log("\nData: ", data);

//menerima input user
// rl.question('Masukkan key yang ingin di update: ',(key)=>{
//     rl.question('Masukkan value baru: ', (value)=>{
//         add(key, value);
//         console.log("\nUpdate data: ", data);
//         rl.close();
//     })
// })

//input untuk multiplay
console.log(addMultiple);