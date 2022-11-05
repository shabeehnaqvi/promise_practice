// async function myfunction(a, b) {
//   return a + b;
// }

// a = 4
// b = 5
// var temp = myfunction(a, b);

// temp.then((a) => console.log(a))
// temp.then((a) => console.log(a * a))

// console.log(temp.then())

// console.log("what");
// setTimeout(function () {
//   console.log("I am late !!");
// }, 3000);

// for (var i = 0; i < 1000; i++) {
//   console.log("i am in loop");
// }


// 
var promise = new Promise(function myfun(resolve, reject) {
  a = 1;
  b = 2;
  if (a == b)  setTimeout(() => { resolve("I am in resolve"); }, 3000); 
  else setTimeout(() => { reject("I am in reject"); }, 3000); 
});

promise
  .then(function new_fun(res) {
    console.log(res);
  })
  .catch(function new_fun(err) {
    console.log(err);
  })
  .finally(function new_fun(err) {
    console.log("Finally i can do this");
  });

// finally will be executed everytime either if passes or fails

