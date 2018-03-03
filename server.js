const http = require('http')
const url = require('url')

const _parsetime = (time) => {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

const _unixtime = (time) => {
  return { unixtime: time.getTime() }
}

const _server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true)
  let time = new Date(parsedUrl.query.iso)
  if ( time ==  "Invalid Date" ) {
    time = new Date()
  }
  
  let result

  if (/^\/api\/parsetime/.test(req.url)) {
    result = _parsetime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = _unixtime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})

const createServer = (port) => {
  _server.listen(Number(port), () => {
    console.log(`*** listen port : "${port}" ***`)
  })
}

const closeServer = () => {
  _server.close(() => {
    console.log('*** close server ***')
  })
}

exports.create = createServer
exports.close = closeServer
