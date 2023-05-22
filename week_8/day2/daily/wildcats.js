const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];

let usernames = []
gameInfo.forEach(function(info) {
  usernames.push(info["username"] + "!")
})
console.log(usernames)

let winners = []
gameInfo.forEach(function(info) {
  if (parseFloat(info["score"]) > 5) {
    winners.push(info["username"] + "!")
  }
})
console.log(winners)

let total_score = 0
gameInfo.forEach(function(elem) {
  total_score += parseFloat(elem["score"])
})

console.log(total_score)