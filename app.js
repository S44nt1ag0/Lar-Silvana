const express = require("express");
const app = express();
const port = 3030;
const rotas = require("./server/controller")

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/public', express.static('public'));

app.use("/", rotas)

app.listen(port, () => {
    console.log("Website aberta porta -> " + port)
})