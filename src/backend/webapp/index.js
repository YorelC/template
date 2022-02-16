const fastify = require('fastify')()
const path = require('path');

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, './build')
})

fastify.setNotFoundHandler((req, res) => {
  res.sendFile('index.html')
})


// Run the WebApp!
const start = async () => {
  try {
    // port myproject to setup, default 3000
    await fastify.listen(3000, '0.0.0.0', function (err, address) {
        if (err) {
          fastify.log.error(err)
          process.exit(1)
        }
        fastify.log.info(`server listening on ${address}`)
      })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()