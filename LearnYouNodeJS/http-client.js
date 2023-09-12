//perform an HTTP GET request to a URL provided
//Write the String content of each "data" event from the response to a new line on the console

const http = require('http')
const url = process.argv[2];

http.get(url, (response) => {
    response.on('data', function (data) {
        console.log(data.toString())
    })
})

// const http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)