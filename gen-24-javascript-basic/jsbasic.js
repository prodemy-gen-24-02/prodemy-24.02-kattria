function persegi (s){
    return s*s;
}

function segitiga(a, t){
    return 1/2*(a*t);
}

function persegiPanjang (p,l){
    return p*l ;
}

function lingkaran (r){
    return Math.PI*r*r;
}

function jajargenjang(a,t){
    return a*t;
}

const s = 5;
const a = 10;
const p = 6;
const l = 2;
const r = 7;
const t = 2;

console.log ("Luas Persegi = "+ persegi(s));
console.log ("Luas Segitiga = "+ segitiga(a,t));
console.log ("Luas Persegi Panjang = "+ persegiPanjang(p,l));
console.log ("Luas Lingkaran = "+ lingkaran(r));
console.log ("Luas Jajargenjang = "+ jajargenjang(a,t));

