
var http = require('http');
var fs = require('fs');
var url = require('url');

function ReadFileSync(_fs, _path){
  try { return _fs.readFileSync(_path, 'utf8'); }
  catch(exception) { return exception; }
}

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title =  queryData.id;

    console.log(queryData.id);

    if(_url == '/'){
      title = 'WEB';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);

    var style = ReadFileSync(fs, './data/theme/style.css');
    var color = ReadFileSync(fs, './data/theme/color.js');
    var description = ReadFileSync(fs, `./data/description/${title}`);

    var template = `
    <!doctype html>
    <html>
    <head>
      <title>WEB - ${title}</title>
      <meta charset="utf-8">
      <style>${style}</style>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script>${color}</script>
    </head>

    <body>
      <input type="button" value="night" onclick="nightdayHandler(this)">
      <h1><a href="/">WEB</a></h1>

      <div id="grid">
        <ol>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ol>

        <div id="article">
          <h2>${title}</h2>
          <p>${description}</p>
        </div>
      </div>
    </body>
    `;
    response.end(template);
});
app.listen(3000);
