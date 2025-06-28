let arr1 = [
  { name: "sree", age: 20 },
  { name: "sai", age: 21 },
];
let arr2 = [
  { name: "sree", age: 20 },
  { name: "sai", age: 22 },
];
let result = [];

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i].name == arr2[i].name && arr1[i].age == arr2[i].age) {
    arr1[i].name = "true";
    result.push(arr1[i]);
  } else {
    arr1[i].name = "false";
    result.push(arr1[i]);
  }
}

console.log(result);
