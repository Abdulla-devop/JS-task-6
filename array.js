let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
  const data = JSON.parse(xhr.response);
  console.log(data);
 console.log(xhr.status)


const asia = data.filter ((value) => value.region === "Asia");
console.log(asia);
 
const population = data.filter ((value) => value.population < 200000);
console.log(population);

data.forEach((value) => {
    console.log(`
    Name ${value.name.common} 
    `)
});
data.forEach((value) => {
    console.log(`
    Capital : ${value.capital} 
    `)
});
data.forEach((value) => {
    console.log(`
    Flag ${value.flag} 
    `)
});
const totalPopulation = data.reduce ((acc,value) => {
    return acc + value.population
},0);
console.log(totalPopulation);

const usdDollar = data.map((value) =>{
    return value.currencies
});
console.log(usdDollar[17]);

};


