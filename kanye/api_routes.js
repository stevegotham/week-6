// =====START GLOBAL VAR DECLARATION=====
var
  ctrls     = require('./server_controllers.js'),
  apiRouter = require('express').Router()

  apiRouter.route('/kanye/track/:track')
  .get(ctrls.kanye.getTrack)

  apiRouter.route('/kanye/counter/')
  .get(ctrls.kanye.getCount)

  apiRouter.route('/kanye/:album')
    .get(ctrls.kanye.getAlbum)


module.exports = apiRouter
