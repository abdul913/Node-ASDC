const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const users = require("./Routes/users")
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')

mongoose.connect('mongodb+srv://abdul:abc1234@cluster0.7aw0lly.mongodb.net/user')
    .then(() => console.log('Connected!'));



// json middleware
app.use(express.json())
app.use(cookieParser())
// Cus-Middleware
function checklistMiddleware(req, res, next) {
    if (todos[0].length < 1) {
        // console.log('no data')
        res.status(404).send("wrong req")
        return
    }
    next()
}

app.use('/', users)

app.use('/', users)

app.use('/', users);

app.use('/', users)

app.use('/', users)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})