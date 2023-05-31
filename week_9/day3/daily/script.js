const form = document.querySelector('form');
const invisibleItems = document.getElementsByClassName("invisible")
for (item of invisibleItems) {
  item.style.display = "none"
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const searchInput = document.getElementById('input');
  const searchData = searchInput.value;
  
  console.log(searchData);
  searchInput.value = '';
  getGif(searchData)
  .then((data) => {
    const gif = data[Math.floor(Math.random() * data.length)]
    const url = gif.images.original.url
    // console.log(url)
    addGifOnDOM(url)
    // console.log(gif.images.original.url)
  })
  .catch((error) => {
    console.log(error)
  })
});


async function getGif(category) {
  try {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('HTTP error, status = ' + response.status);
    }
    const jsonData = await response.json()
    temp = jsonData.data;
    return jsonData.data
  }
  catch (error) {
    console.log("error", error)
  }
}


function addGifOnDOM(url) {
  const deleteAllButton = document.getElementById("delete-all-button")
  deleteAllButton.style.removeProperty("display")
  const classPrefix = "class-which-will-be-used-for-delete"
  const classToIdentify = classPrefix + genRandomClass(4)
  const frame = document.createElement('div')
  frame.classList.add(classToIdentify)
  frame.classList.add("gif_frame")
  const gif = document.createElement('img')
  gif.src = url
  const deleteButton = document.createElement('button')
  deleteButton.appendChild(document.createTextNode("delete"))
  deleteButton.addEventListener('click', function() {
    const frameToDelete = document.getElementsByClassName(classToIdentify)[0]
    frameToDelete.remove()
    if (document.getElementsByClassName("gif_frame").length === 0) {
      const deleteAllButton = document.getElementById("delete-all-button")
      deleteAllButton.style.display = "none"
    }
  });
  frame.appendChild(gif)
  frame.appendChild(deleteButton)
  document.body.appendChild(frame)
}

function genRandomClass(length) {
  let symbs = []
  for (let i = 0; i < length; i++) {
    let numb = Math.floor(Math.random() * 26) + 97
    symbs.push(String.fromCharCode(numb))
  }
  return symbs.join("")
}


function deleteAllGifs(event) {
  const gifs = document.getElementsByClassName("gif_frame")
  const len = gifs.length
  for (let i = 0; i < len; i++) {
    console.log("deleting gif", i)
    gifs[0].remove()
  }
  const deleteAllButton = document.getElementById("delete-all-button")
  deleteAllButton.style.display = "none"  
}
