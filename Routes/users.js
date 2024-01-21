const express = require('express');
const router = express.Router()
const User = require('../Model/User');
const setUserHandler = require('../Controller/setUserhandler');
var jwt = require('jsonwebtoken');
const UserAuth = require('../Model/UserAuth');

router.post('/setuser', setUserHandler)



router.delete('/users', async (req, res) => {
    let id = req.query.id
    console.log(id)
    await User.deleteOne({ id: id })
    res.send("deleted")
});

router.put('/users', async (req, res) => {
    await User.updateOne({ id: 1 }, { name: "abc" })
    res.send('updated')
})

router.get('/', async (req, res) => {
    let users = await User.find()
    res.json({ 'user': users })
})

router.post('/login', async (req, res) => {
    let id = req.header('id')
    let password = req.header('password')
    let email = req.header('email')
    console.log(id, email, password)
    let userExists = await UserAuth.findOne({ email: email })
    if (userExists) {
        return res.json({ 'res': "user already exists" })
    }
    await UserAuth.create({ id: id, email: email, password: password })
    var token = jwt.sign({ email: email, password: password }, 'abc123'); //axasxasxas
    res.cookie('uid', token)
    // res.send('success')
    res.redirect('/users')
})

router.get('/users', async (req, res) => {
    let cookie = req.cookies.uid
    let token = jwt.verify(cookie, 'abc123');
    console.log(cookie)
    if (!token) {
        return res.redirect('/login');
    }
    try {
        let userData = await User.find()
        // res.json({ users: userData })
        let users = `
    <ul>
        ${userData.map((user) => { return `<li>${user.name}</li>` }).join('')}
    </ul>
    `
        res.send(users)
    }
    catch (err) {
        console.log(err)
    }
})

module.exports = router