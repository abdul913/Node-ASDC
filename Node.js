const http = require('http');
const fs = require('fs');
let prodData = [{ id: 1, name: "iphone" }, { id: 2, name: "samsung" }, { id: 3, name: "google" }]

let htmlFile = fs.readFileSync('index.html')

function handler(req, res) {
    // if(req.url == '/home'){
    //     res.write("Hello World")
    //     res.end()
    // }
    // if(req.url == '/products'){
    //     res.write("products")
    //     res.end()
    // }
    switch (req.url) {
        case '/':
            res.write(htmlFile)
            res.end()
            break;
        case '/products':
            res.write(JSON.stringify(prodData))
            res.end()
            break;

        default:
            res.write("no route defined")
            res.end()

            break;
    }

}

const server = http.createServer(handler)

const port = 2000

server.listen(port, () => { console.log('server running on port', port) })

