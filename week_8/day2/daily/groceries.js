let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => {groceries["fruits"].forEach(function(fruit) { console.log(fruit)})}
displayGroceries()
const cloneGroceries = () => {
    let user = client;
    let shopping = groceries
    shopping["totalPrice "] = 35
    console.log(groceries["totalPrice"], "another totalPrice")
    shopping["other"]["payed"] = false
    console.log(groceries["other"]["payed"], "another payed")
    return client
}
let user = cloneGroceries()
client = "Betty"
console.log(user)