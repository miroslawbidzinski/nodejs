// const importFunc = require("./../js/functions")
const importFunc1 = require("./js/func")

const express = require('express');
const path = require('path');

const app = express();

// port
const port = process.env.PORT || 3000;

// const port = 3000;

const sample = () => {
return "Nauka"
}

app.set("view engine", 'hbs');

app.use("/assets", express.static(path.join(__dirname, "./assets")))
app.use("/js", express.static(path.join(__dirname, "./js")))

app.get("/", function (req,res) {
    res.render("index",{
        pageTitle: "Lekcja NodeJS 25.04",
        subTitle: importFunc1.someTitle,
        newVar: sample()
    })
})

app.get("/mirek", function (req,res) {
    res.render("mirek")
})

app.listen(port, (err) => {
    console.log("serwer działa na porcie", port)

    if (err) { return console.log("Błąd serwera", err) }
})