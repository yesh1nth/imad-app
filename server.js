var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
  
});
var articles = {

 'article-one': {
   title: 'article-one| yeshwanth digavinti',
    heading :'article-one',
    date:  'Feb 14 2018',
    content: `'<div>
        
             content for artilce 1
             </div>'
             `
},
  'article-two': {title: 'article-two| yeshwanth digavinti',
    heading :'article-two',
    date:  'Feb 24 2018',
    content: `<div>
        
             content for artilce 2
             </div>
             `
     
 },
  'article-three':{
     title: 'article-three| yeshwanth digavinti',
    heading :'article-three',
    date:  'Feb 25 2018',
    content: `'<div>
        
             content for 3
             </div>'
             `
 },
};
function createTemplate (data) {
var title = data.title;
var heading = data.heading;
var date = data.date;
var content = data.content;
var HtmlTemplate = 
    `
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width-device-width" , intial-scale="1"/>
        <link href="/ui/style.css" rel="stylesheet" />
       
       
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">home</a>
            
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
        ${date}
        </div>
        <div>
        
             ${content}
             </div>
        </div>
    </body>
</html>`;
return HtmlTemplate;
}

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
