const http = require('http')
const url = process.argv[2];

export const httpClient = (element: string) => {
    // console.log(url1)
    http.get(element, (response: any) => {
        response.on('data', function (data: string) {
            const result = data.toString()
            console.log(result)
            return result
        })
    })
}
httpClient(url)

//////////////////////
// const http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)

//http://localhost:50588