var pets = ["cat", "dog", "cow", "monkey"];

//shift Method remove the beginning of an array

pets.shift();

//shift Method add the beginning of an array

pets.unshift("tiger", "cat");

//splice Method add and remove both method apply around the array

pets.splice(1, 0, "rabbit");

//slice Method put old array in new array and takes the old array data with the help of index

var set = pets.slice(1, 3);

// console.log(set);

// Loop Practice

var obj = [
  (user = {
    name: "ubaid",
    age: "18",
    address: "karachi",
  }),
  (userData = {
    name: "shahid",
    age: "18",
    address: "karachi",
  }),
  (userDataset = {
    name: "shahid",
    age: "18",
    address: "karachi",
  }),
];

var div = document.querySelector(".div");

var set = obj.forEach(function (item, index) {
  div.innerHTML += `<span>${index}</span>`;
  div.innerHTML += `<p>${item.name}</p>`;
  div.innerHTML += `<p>${item.age}</p>`;
  div.innerHTML += `<p>${item.address}</p>`;
});

// console.log(obj)

for (var i = 0; i < obj.length; i++) {
  var abc = "key" + [i];

  // obj[0][abc] = "kuchbhi" + [i];
  // console.log(obj[i].name);

  // var keys= Object.keys(obj[i]);
  // console.log(keys);

  // obj.forEach(function(key,index){
  //   console.log(key.address);
  // })
}

// console.log(obj);

// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output:
// 276 + 351 = 627

var number2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
var number1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
var sum = 0;
var sum2 = 0;

for (var i = 0; i < number1.length; i++) {
  sum += number1[i];
}
for (var j = 0; j < number2.length; j++) {
  sum2 += number2[j];
}

// console.log(sum + sum2);
// console.log(sum2 );

var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) {
  for (var j = 0; j < lastNames.length; j++) {
    fullNames.push(firstNames[i] + lastNames[j]);
  }
}

console.log(fullNames)

