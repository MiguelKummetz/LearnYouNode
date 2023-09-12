const http = require('http');
let url = require('url');
const portNumber = process.argv[2];
const parsePath = '/api/parsetime'
const unixPath = '/api/unixtime'

const parseTime = (iso) => {
    return {
        hour: iso.getHours(),
        minute: iso.getMinutes(),
        second: iso.getSeconds()
    }
}

const unixTime = (iso) => {
    return {
        unixtime: iso.getTime()
    }
}

const mySwitch = (url) => {
    switch (url.pathname){
        case parsePath:
            return parseTime(new Date(url.query.iso))
        case unixPath:
            return unixTime(new Date(url.query.iso))
    }
}

const server = http.createServer(function (request, response) {
    if (request.method === 'GET'){
        response.writeHead(200, { 'Content-Type': 'application/json' })
        url = url.parse(request.url, true)
        response.end(JSON.stringify(mySwitch(url)))
    }
    response.end()
})

server.listen(portNumber)

////////////////

// var http = require('http')
// var url = require('url')

// var port = process.argv[2]

// var parseTime = function (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixTime (time) {
//   return {unixtime: time.getTime()}
// }

// var parseQuery = function (url) {
//   switch (url.pathname) {
//     case '/api/parsetime':
//       return parseTime(new Date(url.query.iso))
//     case '/api/unixtime':
//       return unixTime(new Date(url.query.iso))
//     default: return 'please enter a valid endpoint url'
//   }
// }

// http.createServer(function (request, response) {
//   if (request.method === 'GET') {
//     response.writeHead(200, {'Content-Type': 'application/json'})
//     url = url.parse(request.url, true)
//     response.end(JSON.stringify(parseQuery(url)))
//   } else {
//     response.writeHead(405)
//     response.end()
//   }
// }).listen(+port, function () {
//   console.log('Server listening on http://localhost:%s', port)
// })

//////////////////////////////

// const http = require('http')

// function parsetime (time) {
//     return {
//         hour: time.getHours(),
//         minute: time.getMinutes(),
//         second: time.getSeconds()
//     }
// }

// function unixtime (time) {
//     return { unixtime: time.getTime() }
// }

// const server = http.createServer(function (req, res) {
//     const parsedUrl = new URL(req.url, 'http://example.com')
//     const time = new Date(parsedUrl.searchParams.get('iso'))
//     let result

//     if (/^\/api\/parsetime/.test(req.url)) {
//         result = parsetime(time)
//     } else if (/^\/api\/unixtime/.test(req.url)) {
//         result = unixtime(time)
//     }

//     if (result) {
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(result))
//     } else {
//         res.writeHead(404)
//         res.end()
//     }
// })
// server.listen(Number(process.argv[2]))