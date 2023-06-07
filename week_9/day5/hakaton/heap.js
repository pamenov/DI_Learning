let DATA = [1, 7, 3, 8, 10, 6, 5, 9, 11]
const NODE_RADIUS = 20
let ANIMATION_TIME = 2000
const ANIMATION_MODE = {
    "add": "sift_up",
    "remove": "sift_down"
}
const CHECKING = {
    "check": {
        "color": "#ff8000",
        "sign": "?"
    },
    "success": {
        "color": "#2c9e3b",
        "sign": "+"  
    },
    "unluck": {
        "color": "#cc0000",
        "sign": "-"
    }
}

const NODE_COLOR = "#999999"
const LINK_COLOR = "#cccccc"


const getParentIndex = (index) => Math.floor((index - 1) / 2)

function addChildren(node, array) {
    const limit = array.length
    if (2 * node + 1 >= limit) {
        return {
            name: `${array[node]}`,
            id: node
        }
    } else if (2 * node + 2 === limit) {
        return {
            name: `${array[node]}`,
            children: [{
                name: array[limit - 1],
                id: 2 * node + 1
            }],
            id: node
        }
    } else {
        return {
            name: `${array[node]}`,
            id: node,
            children: [
                addChildren(2 * node + 1, array),
                addChildren(2 * node + 2, array),
            ]
        }
    }
}


function getListOfPairs(curNode, listOfPairs) {
    if (curNode.children) {
        listOfPairs.push([curNode, curNode.children[0]])
        getListOfPairs(curNode.children[0], listOfPairs)
    }
    if (curNode.children && curNode.children.length === 2) {
        listOfPairs.push([curNode, curNode.children[1]])
        getListOfPairs(curNode.children[1], listOfPairs)
    }
}


function displayTree(DATA, radius, withText=true) {
    // Tree data
    const treeData = addChildren(0, DATA)

    // Create tree layout
    const treeLayout = d3.tree()
        .separation(() => 1)
        .size([600, 400]);

    // Generate tree nodes and links
    const rootNode = d3.hierarchy(treeData);
    const treeNodes = treeLayout(rootNode);

    const treeLinks = d3.linkVertical()
        .source(d => [d[0].x, d[0].y + radius])
        .target(d => [d[1].x, d[1].y - radius])

    let listOfPairs = []
    let curNode = treeNodes

    getListOfPairs(treeNodes, listOfPairs)

    // Append SVG element to the container
    const svg = d3.select('#tree-container')
        .append('svg')
        .attr('width', 800)
        .attr('height', 600)
        .append('g')
        .attr('transform', 'translate(50, 50)')
        .attr('id', 'svg-group')

    svg.selectAll('.node')
        .data(treeNodes.descendants())
        .enter()
        .append('g')
        .attr('class', 'node number-container')
        // .attr('class', 'number-container')

    svg.selectAll('.node')
        .append('circle')    
        .attr('r', radius)
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y)
        .attr('id', (d) => `node${d.data.id}`)

    if (withText) {
        svg.selectAll('.node')
            .append('text')
            .attr('dy', '0.35em')
            .attr('x', (d) => d.x)
            .attr('y', (d) => d.y)
            .attr("text-anchor", "middle")
            .text((d) => d.data.name)
            .attr('id', (d) => `text${d.data.id}`)
    }

    // Render links
    svg.selectAll('.link')
        .data(listOfPairs)
        .enter()
        .append('path')
        .attr('class', 'link')
        .attr('id', (dta) => dta[1].data.id)
        .attr('d', treeLinks);
}


function displayArray(array) {
    const svg = d3.select("svg");
    const boxWidth = 40;
    const boxHeight = 30;
    const boxPadding = 10;
    const totalWidth = array.length * (boxWidth + boxPadding) - boxPadding;
    const centerX = (800 - totalWidth) / 2;

    svg.selectAll('.box')
        .data(array)
        .enter()
        .append('g')
        .attr('class', 'box number-container')
        .attr("x", (d, i) => centerX + i * (boxWidth + boxPadding))
        .attr("y", 590 - boxHeight)
        .attr("width", boxWidth)
        .attr("height", boxHeight)

    const boxes = svg.selectAll(".box")
        .data(array)
        .append("rect")
        .attr('x', (d) => d.x)
        .attr('y', (d) => d.y)
        .attr("text-anchor", "middle")

    const numbers = svg.selectAll(".box")
        .data(array)
        .append("text")
        .text(d => d)
        .attr("x", (d, i) => centerX + i * (boxWidth + boxPadding) + boxWidth / 2)
        .attr("y", 600 - boxHeight / 2)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("fill", "white")
        .attr("id", (d, i) => `array-number${i}`)
}

function addNode(event) {
    const newNode = parseFloat(prompt('Enter value'))
    DATA.push(newNode)
    const toDelete = document.getElementsByTagName('svg')[0]
    toDelete.remove()
    displayTree(DATA, NODE_RADIUS)
    let last = DATA.length - 1
    siftUp(last, DATA)
}

function animateNode(index, color) {
    const circle =  document.getElementById(`node${index}`)
    circle.style["stroke"] = color
    const text = document.getElementById(`text${index}`)
    text.style["stroke"] = color
}


function checkLink(childIndex, result) {
    return new Promise((resolve, reject) => {
        const color = CHECKING[result]["color"]
        const parent = getParentIndex(childIndex)
        let link = document.getElementById(`${childIndex}`)
        link.style["stroke"] = color
        addSignToLink(childIndex, CHECKING[result]["sign"], color)
        animateNode(childIndex, color)
        animateNode(getParentIndex(childIndex), color)
        if (result === "unluck") {
            swapElements(childIndex)
        }
        setTimeout(() => {
            const mark = document.getElementsByClassName("mark-on-link")[0]
            mark.remove()
            animateNode(childIndex, NODE_COLOR)
            animateNode(getParentIndex(childIndex), NODE_COLOR)
            link.style["stroke"] = LINK_COLOR         
            resolve()
        }, ANIMATION_TIME)
    })
}

function calculateMidOfLink(linkId) {
    const parent = d3.select(`#node${getParentIndex(linkId)}`)
    const child = d3.select(`#node${linkId}`)

    const pX = parent.attr("cx")
    const pY = parent.attr("cy")
    const cX = child.attr("cx")
    const cY = child.attr("cy")
    return [
        (parseFloat(pX) + parseFloat(cX)) / 2,
        (parseFloat(pY) + parseFloat(cY)) / 2,
    ]
}

function addSignToLink(pathId, sign, color) {
    const [x, y] = calculateMidOfLink(pathId)
    const text = d3.select('#svg-group')
        .append("text")
        .attr("class", "mark-on-link")
        .text(`${sign}`)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("font-size", "24px")
        .attr("fill", color)
        .attr("x", x + 25)
        .attr("y", y)
    calculateMidOfLink(pathId)
}


async function swapElements(childIndex) {
    const promise = new Promise((resolve, request) => {
        const circle1 = d3.select(`#node${childIndex}`)
        const x1 = circle1.attr("cx")
        const y1 = circle1.attr("cy")
        const circle2 = d3.select(`#node${getParentIndex(childIndex)}`)
        const x2 = circle2.attr("cx")
        const y2 = circle2.attr("cy")
        const text1 = d3.select(`#text${childIndex}`)
        const text2 = d3.select(`#text${getParentIndex(childIndex)}`)
        // const text2 = document.getElementById(`text${getParentIndex(childIndex)}`)
        circle1.transition()
            .duration(ANIMATION_TIME)
            .attr("cx", x2)
            .attr("cy", y2);

        text1.transition()
            .duration(ANIMATION_TIME)
            .attr("x", x2)
            .attr("y", y2);

        circle2.transition()
            .duration(ANIMATION_TIME)
            .attr("cx", x1)
            .attr("cy", y1);

        text2.transition()
            .duration(ANIMATION_TIME)
            .attr("x", x1)
            .attr("y", y1);
        swapIds(`node${childIndex}`, `node${getParentIndex(childIndex)}`)
        swapIds(`text${childIndex}`, `text${getParentIndex(childIndex)}`)
        resolve()
    })
}

function swapIds(id1, id2) {
    const obj1 = d3.select(`#${id1}`)
    const obj2 = d3.select(`#${id2}`)
    obj1.attr("id", `${id2}`)
    obj2.attr("id", `${id1}`)
}

async function proceedSiftUpStepAnimation(index, array) {
    await checkLink(index, "check")
    if (array[index] < array[getParentIndex(index)]) {
        await checkLink(index, "unluck")
    } else {
        await checkLink(index, "success")
    }
}


async function siftUp(nodeIndex, heap) {
    while (nodeIndex > 0) {
        console.log(nodeIndex)
        await proceedSiftUpStepAnimation(nodeIndex, heap)
        const parentIndex = getParentIndex(nodeIndex)
        if (heap[parentIndex] > heap[nodeIndex]) {
            const tmp = heap[nodeIndex]
            heap[nodeIndex] = heap[parentIndex]
            heap[parentIndex] = tmp
            nodeIndex = parentIndex
        } else {
            return
        }
    }
}


async function removeRoot(event) {
    const root = d3.select(`#node0`)
    const xRoot = root.attr("cx")
    const yRoot = root.attr("cy")
    await moveNode(0, 0, 0, CHECKING["unluck"]["color"])
    await deleteNode(0)
    await moveNode(DATA.length - 1, xRoot, yRoot, CHECKING["success"]["color"])
    DATA[0] = DATA[DATA.length - 1]
    DATA.pop()
    const toDelete = document.getElementsByTagName('svg')[0]
    toDelete.remove()
    displayTree(DATA, NODE_RADIUS)
    await siftDown(0, DATA)
}

function moveNode(index, newX, newY, color) {
    return new Promise((resolve, request) => {
        animateNode(index, color)
        const circle1 = d3.select(`#node${index}`)
        const x1 = circle1.attr("cx")
        const y1 = circle1.attr("cy")
        const text1 = d3.select(`#text${index}`)
        circle1.transition()
            .duration(ANIMATION_TIME)
            .attr("cx", newX)
            .attr("cy", newY);

        text1.transition()
            .duration(ANIMATION_TIME)
            .attr("x", newX)
            .attr("y", newY);
        setTimeout(() => {
            resolve();
        }, ANIMATION_TIME);
    })
}

async function deleteNode(index) {
    return new Promise((resolve) => {
        console.log("in deleteNode")
        const circle =  document.getElementById(`node${index}`)
        circle.remove()
        const text = document.getElementById(`text${index}`)
        text.remove()
        resolve()
    })
}

async function chooseSmaller(index1, index2, array) {
    return new Promise((resolve) => {
        animateNode(index1, CHECKING["check"]["color"])
        animateNode(index2, CHECKING["check"]["color"])
        setTimeout(() => {
            resolve()
        }, ANIMATION_TIME / 2)
    })
    .then(() => {
        return new Promise((resolve) => {
            const min_index = array[index1] < array[index2] ? index1 : index2
            animateNode(index1, NODE_COLOR)
            animateNode(index2, NODE_COLOR)
            animateNode(min_index, CHECKING["success"]["color"])
            setTimeout(() => {
            resolve()
            }, ANIMATION_TIME / 2)

        })
    })
}


async function siftDown(index, array) {
    let leftChild = 2 * index + 1
    let rightChild = 2 * index + 2
    while (rightChild < array.length) {
        animateNode(index, CHECKING["check"]["color"])
        await chooseSmaller(leftChild, rightChild, array)
        const min_index = array[leftChild] < array[rightChild] ? leftChild : rightChild
        await proceedSiftUpStepAnimation(min_index, array)
        if (array[index] > array[min_index]) {
            const tmp = array[min_index]
            array[min_index] = array[index]
            array[index] = tmp
            index = min_index
        } else {
            break
        }
        leftChild = 2 * index + 1
        rightChild = 2 * index + 2
    }
    if (rightChild === array.length) {
        await proceedSiftUpStepAnimation(leftChild, array)
        if (array[index] > array[leftChild]) {
            const tmp = array[leftChild]
            array[leftChild] = array[index]
            array[index] = tmp
        }
    }
}


async function heapify(array) {
    let toDelete = document.getElementsByTagName('svg')[0]
    toDelete.remove()
    displayTree(array, NODE_RADIUS, false)
    displayArray(array)
    await fillTreeWithArray(array)
    toDelete = document.getElementsByTagName('svg')[0]
    toDelete.remove()
    displayTree(array, NODE_RADIUS)
    for (let i = Math.floor((array.length - 1) / 2); i > -1 ; i--) {
        await siftDown(i, array)
    }
}


async function fillTreeWithArray(array) {
    let begin = 0, end = 1
    while (begin < array.length) {
        await fillTreeLevel(array, begin, end)
        end = Math.min(array.length, (end + 1) * 2 - 1 )
        begin = (begin + 1) * 2 - 1
    }

}

async function fillTreeLevel(array, begin, end) {
    return new Promise((resolve, reject) => {
        let levelTexts = []
        let newCoords = []
        for (let i = begin; i < end; i++) {
            const numberText = d3.select(`#array-number${i}`)
            numberText.attr("stroke", CHECKING['success']['color'])
            const text = d3.select('#svg-group')
                .append("text")
                .attr("id", `text${i}`)
                .text(`${array[i]}`)
                .attr("text-anchor", "middle")
                .attr("alignment-baseline", "middle")
                .attr("x", numberText.attr("x"))
                .attr("y", numberText.attr("y"))
            levelTexts.push(text)
            const circle = d3.select(`#node${i}`)
            newCoords.push([circle.attr("cx"), circle.attr("cy")])
            text.transition()
                .duration(ANIMATION_TIME)
                .attr("x", circle.attr("cx"))
                .attr("y", circle.attr("cy"));

        }
        setTimeout(() => {
            resolve();
        }, ANIMATION_TIME);
    })
}

function createHeapFromArray(event) {
    const array = prompt("Enter data separeted by whitespaces").split(" ")
    console.log(array)
    DATA = array.map(parseFloat)
    heapify(DATA)
}

// fillTreeLevel(DATA, 0, 10).then()
// heapify([3, 2, 4, 23, 3, 6, 4, 21, -3])
displayTree(DATA, NODE_RADIUS)

