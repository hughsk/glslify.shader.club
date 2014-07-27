var api  = require('glslify-api')()
var http = require('http')

http.createServer(function(req, res) {
  if (req.url === '/') {
    res.statusCode = 302
    res.setHeader('location', 'http://github.com/hughsk/glslify.shader.club')
    res.end('http://github.com/hughsk/glslify.shader.club/')
    return
  }


  res.setHeader('access-control-allow-origin', '*')
  api(req, res, function(err) {
    if (err) {
      res.statusCode = 500
      res.end([err.message, err.stack].join('\n'))
    } else {
      res.statusCode = 404
      res.end('404')
    }
  })
}).listen(8080, function(err) {
  if (err) throw err
  console.log('http://localhost:8080/')
})
