const myArray = [
    {   service: "Wash Car",
        price: "10"
    },
    { service: "Mow Lawn",
        price: "20"
    },
    { service: "Pull Weeds",
        price: "30"
    }
]
let result = []

const grid = document.querySelector(".grid")
const grid2 = document.querySelector(".grid2")
const grid3 = document.querySelector(".grid3")

function cart(id) {
    const li = document.createElement("li")
    const left = document.createElement("div")
    const right = document.createElement("div")
    left.textContent = `${myArray[id].service}`
    right.textContent = `$${parseFloat(myArray[id].price).toFixed(2)}`
    li.appendChild(left)
    li.appendChild(right)
    grid.appendChild(li)
    myArray.map((v, k)=>{
        if (k === id) {
            result.push(v.price)
        }
    })
    const sum = result.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
    document.getElementById("sum").textContent = `$${sum}`
    document.getElementById(`btn${id}`).disabled = true
}