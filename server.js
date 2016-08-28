var requestProxy = require('express-request-proxy'),
  express = require('express'),
  port = process.env.PORT || 3000,
  app = express();


//client is directed to /github/* from /repos. Then, the server receives a GET request from the client. Then, the server calls proxyGitHub which makes a GET request to github API which requires authentication.
var proxyGitHub = function(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: 'https://api.github.com/' + request.params[0],
    headers: { Authorization: 'token ' + process.env.GITHUB_TOKEN }
  }))(request, response);
};
//Once the client-side/client clicks on /repos in index.html, it performs a GET request to the server we built. Afterwards, the server performs a GET request, which is received and executes proxyGitHub.
app.get('/github/*', proxyGitHub);

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
