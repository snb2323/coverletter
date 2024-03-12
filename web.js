const express = require("express");
const path = require("path");
const api = require("./api/api")

const app = express();


//postman localhost:8003/form
app.use("/form", api)

app.use(express.static(path.join(__dirname, "./coverletter/build")))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./coverletter/build/index.html"))
})


app.listen(8003, () => {
    console.log(8003 + " 서버 구동완료")
})