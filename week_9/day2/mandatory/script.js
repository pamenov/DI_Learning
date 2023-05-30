//  Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10.


// function compareToTen(num) {
//   const myPromise = new Promise((resolve, reject) => {
//     if (num <= 10) {
//       resolve('resolved');
//     }
//     else {
//       reject('rejected');
//     }
//   });
//   return myPromise;
// }

// //In the example, the promise should reject
// // compareToTen(15)
// //   .then(result => console.log(result))
// //   .catch(error => console.log(error))

// //In the example, the promise should resolve
// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))


// 🌟 Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success'); 
    }, 4000)
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log('Oops, shit happens')
    console.error(error);
  });


// 🌟 Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

const promiseResolved3 = Promise.resolve(3)
const promiseRejectedBoo = Promise.reject('Boo')

promiseResolved3.then(
    (result) => {
        console.log(result, "resolved")
    })
promiseRejectedBoo.catch(
    (error) => {
        console.log(error, "rejected")
    })