// Feteching data in javascript by using promises

let data = [];

fetch("https://catfact.ninja/fact")
  .then((res) => res.json())
  .then((fact) => data.push(fact));

console.log(data);
