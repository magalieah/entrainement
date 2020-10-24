/*
Create a basic app with three routes:
    / explains how /hello works
    /hello takes a name query parameter and
        random names replies hello [name]
        your own name replies with a short intro of yourself
    any other replies a 404 code with a not found message
*/

// TYPE.parse() analyse une chaîne de caractères TYPE et construit la valeur JavaScript ou l'objet
// décrit par cette chaîne
const http = require('http')
const url = require('url')
const qs = require('querystring')

const serverHandle = function(req, res){
  const route = url.parse(req.url) //parse url to jS in route
  const path = route.pathname //avoir le chemin de l'url
  const params = qs.parse(route) //avoir les parametres du chemin en jS

  res.writeHead(200, {'Content-Type' : 'text/html'});

  if (path==='/'){
    res.write('please hello in your url and a name if you want as http://localhost:8080/hello(?name=magalie)\n');
  }else if (path==='/hello' and name in params){
    if (name==='magalie'){
      res.write('hello i am magalie\n');
    }
    else{
      res.write('hello '+name+' welcome on this page!\n');
    }
 }else {
   res.status(404).send({
      status: 404,
      error: ‘Not found’
  });
  res.end();
 }

}

const server = http.createServer(serverHandle);
server.listen(8080)
