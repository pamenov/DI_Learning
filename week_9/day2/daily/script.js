// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of 
// words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. 
// The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.


function makeAllCaps(arrayOfWords) {
    const promise = new Promise((resolve, reject) => {
        if (arrayOfWords.every(str => typeof str == 'string')) {
            resolve(arrayOfWords.map(str => str.toUpperCase()))
        }
        else {
            reject('not a string')
        }
    })
    return promise
}

// makeAllCaps(['a', 'b', '3_#', 45]).then((upper) => {
//     console.log(upper);
//     }
//     ).catch((error) => {
//         console.log(error)
//     });

function sortWords(array) {
    const upperPromise = makeAllCaps(array)
    const promise = new Promise((resolve, reject) => {
        if (array.length <= 4) {
            reject('too small')
        } else {
            upperPromise.
            then((result) => {
                // console.log(result)
                resolve(result.sort())
            }).
            catch(error => {
                reject(error)
            })

        }

    })
    return promise
}

sortWords(["f", "d", "a", "w"]).then((result) => {
    console.log(result);
    }
    ).catch((error) => {
        console.log(error)
    });
