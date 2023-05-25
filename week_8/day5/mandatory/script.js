 const robots = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: 'https://robohash.org/1?200x200'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    image: 'https://robohash.org/2?200x200'
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    image: 'https://robohash.org/3?200x200'
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    image: 'https://robohash.org/4?200x200'
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    image: 'https://robohash.org/5?200x200'
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    image: 'https://robohash.org/6?200x200'
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    image: 'https://robohash.org/7?200x200'
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    image: 'https://robohash.org/8?200x200'
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    image:'https://robohash.org/9?200x200'
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    image:'https://robohash.org/10?200x200'
  }
];


function createP(text, classes) {
  const newP = document.createElement('p')
  const textNode = document.createTextNode(text)
  newP.appendChild(textNode)
  classes.forEach((className) => {
    newP.classList.add(className);
  });
  return newP
}

function createCard(description) {
  const cardDiv = document.createElement('div')
  cardDiv.classList.add("card")
  const photo = document.createElement('img')
  photo.classList.add("profile-photo")
  photo.src = description.image
  photo.title = ""
  const infoDiv = document.createElement("div")
  const pUsername = createP(description.username, ['username', 'card-text'])
  const pName = createP(description.name, ['name', 'card-text'])
  const pEmail = createP(description.email, ['email', 'card-text'])
  cardDiv.appendChild(photo)
  cardDiv.appendChild(pUsername)
  cardDiv.appendChild(pName)
  cardDiv.appendChild(pEmail)
  return cardDiv
}

function fillContainerWithCards(robotList) {
  const cards = []
  const container = document.getElementById("container")
  robotList.forEach(function(robotInfo) {
    const card = createCard(robotInfo)
    container.appendChild(card)
    cards.push(card)
  })
  return cards
}

const cards = fillContainerWithCards(robots)

function getText() {
  let inp = document.getElementById("search").value.toLowerCase()
  cards.forEach(function(card) {
    const username = card.getElementsByClassName("username")[0].innerText.toLowerCase()
    const name = card.getElementsByClassName("name")[0].innerText.toLowerCase()
    if (username.includes(inp) || name.includes(inp)) {
      card.classList.remove("invisible")
    } else {
      card.classList.add("invisible")
    }
  })

  console.log(inp)

}
