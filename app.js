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

// var tableNo = 2 ;

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
  (userData = {
    name: "shahid",
    age: "18",
    address: "karachi",
  }),
];

var div= document.querySelector(".div");
// console.log(obj)

for (var i = 0; i < obj.length; i++) {
    // var abc = "key" + [i];

    // obj[0][abc][0]="kuchbhi";
//   console.log(obj[i]);

  var keys= Object.keys(obj[i]);
  console.log(keys);

//   obj[i].name.forEach(function(name,index){
//     console.log(name);
//   })
}

// for (var i = 1; i <= 10000; i++) {
//   console.log(`10  x  ${i} =  ${100 * [i]}`);
// }
