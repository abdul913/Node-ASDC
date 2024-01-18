const express = require('express')
const app = express()
const port = 3000

let todos = []

// json middleware
app.use(express.json())

// Cus-Middleware
function checklistMiddleware(req, res, next) {
    if (todos[0].length < 1) {
        // console.log('no data')
        res.status(404).send("wrong req")
        return
    }
    next()
}

app.get('/todo', checklistMiddleware, (req, res) => {
    // let num = req.query.num
    // let val = num * 2
    res.status(200)
    res.json(todos)
})

app.post('/todo', (req, res) => {
    let input = req.body
    todos.push(input)
    res.json({ message: 'data has been posted' })
})

app.put('/todo', (req, res) => {
    let input = req.body
    todos[0] = input
    res.json({ message: 'data has been posted' })
})

app.delete('/todo', (req, res) => {
    let input = req.body
    let todoItem = req.query.num
    todos.splice(todoItem, 1)
    res.json({ message: 'data has been deleted' })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})