module.exports = function (server) {

  var router = server.loopback.Router();


  router.get('/ping', function(req, res) {
    res.send('pong');
  });

  router.get('/login|status|register|forgotpasword', function (req, res) {
  	// res.sendfile(app.get('indexFile'));
  	 res.sendFile('client/index.html', { root: '../' });
  });

  server.use(router);

};
