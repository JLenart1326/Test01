var express = require("express")
var app = express()
var path = require("path")
var cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3000;

app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));



app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/static/index.html"))
})


app.use(express.static('static'))

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

