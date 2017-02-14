var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article1 = {
    title: 'Article 1 Chandan',
    headiing: 'Article 1',
    date: '29 June',
    content: `  <p>
            This is my first aritcle This is my first article  This is my first aritcle This is my first article
             This is my first aritcle This is my first article  This is my first aritcle This is my first article  This is my first aritcle This is my first article
              This is my first aritcle This is my first article This is my first aritcle This is my first article
             </p>
       
            <p>
            This is my first aritcle This is my first article  This is my first aritcle This is my first article
             This is my first aritcle This is my first article  This is my first aritcle This is my first article  This is my first aritcle This is my first article
              This is my first aritcle This is my first article This is my first aritcle This is my first article
             </p>
       
            <p>
            This is my first aritcle This is my first article  This is my first aritcle This is my first article
             This is my first aritcle This is my first article  This is my first aritcle This is my first article  This is my first aritcle This is my first article
              This is my first aritcle This is my first article This is my first aritcle This is my first article
             </p>`
             };
function createTemplate(data)
{
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
var template = 
    `<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
               <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
                <a href='/'>Home</a>
            </div>
            <hr/>
        <div>
            ${title}
        </div>
        <div>
           ${date}
        </div>
        <div>
          ${content}
       </div>
    </div>    
    </body>
</html>`;
return template;
    
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/article-1',function(req,res)
{
     res.send(createTemplate(article1));
});
app.get('/article-2',function(req,res)
{
     res.sendFile(path.join(__dirname, 'ui', 'article-2.html'));
});
app.get('/article-3',function(req,res)
{
    res.sendfile(path.join(__dirname,'ui','article-3.html'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});