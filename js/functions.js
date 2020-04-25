
// const helloWorld = () => {
//     console.log("Hello World 2")
// }

// const sum = (a, b) => {
// console.log("suma wynosi:", a + b)
// }

// module.exports = {
//     helloWorld,
//     sum
// }

// console.log("File functions.js loaded correctly")


const example = () => {
   const fromInput = document.getElementById("example").value;
   document.getElementById("tekst").innerText = fromInput;
}

document.getElementById("btn").addEventListener("click", example)

const sum = (a,b) => {
    let c = a +b;
    return c;
}