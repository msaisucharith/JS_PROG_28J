function BesttimeforSrock(arr) {
  let min = Infinity;
  let maxprice = 0;
  let maxindex = 0;
  let minindex = 0;

  for (let price of arr) {
    if (price < min) {
      min = price;
    } else {
      maxprice = Math.max(maxprice, price - min);
    }
  }
  return `Best price to by ${min} and best price to sell ${maxprice} `;
}

let arr = [5, 3, 6, 4, 50];
console.log(BesttimeforSrock(arr));
