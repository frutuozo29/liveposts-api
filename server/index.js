const restify = require("restify")
const logger = require("morgan")
const routes = require("../routes/index")
const corsMiddleware = require("restify-cors-middleware")
const socketio = require('socket.io')

const server = restify.createServer()
const io = socketio.listen(server.server, { origins: '*:*' })

const cors = corsMiddleware({
  origins: ["*"],
  allowHeaders: ["*", "authorization"]
})

server.pre(cors.preflight)
server.use(cors.actual)

server.use(logger("dev"))
server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser())
server.use(restify.plugins.bodyParser())

routes.assignRoutes(server)

io.sockets.on('connection', function (socket) {
  console.log('Connected socket.io')
});

global.io = io

module.exports = server