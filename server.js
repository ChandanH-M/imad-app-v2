var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
            'article-one': {
                title: 'Article 1 Chandan',
                heading: 'Article 1',
                date: '29 June',
                content: ` 
                       <p>
                             This is my first aritcle This is my first article  This is my first aritcle This is my first article
                             This is my first aritcle This is my first article  This is my first aritcle This is my first article
                             This is my first aritcle This is my first article  This is my first aritcle This is my first article
                             This is my first aritcle This is my first article
                        </p>
               
                        <p>
                             This is my first aritcle This is my first article  This is my first aritcle This is my first article
                             This is my first aritcle This is my first article  This is my first aritcle This is my first article
                             This is my first aritcle This is my first article  This is my first aritcle This is my first article
                             This is my first aritcle This is my first article
                        
                        </p>
               
                        <p>
                             This is my first aritcle This is my first article  This is my first aritcle This is my first article
                             This is my first aritcle This is my first article  This is my first aritcle This is my first article
                             This is my first aritcle This is my first article  This is my first aritcle This is my first article
                             This is my first aritcle This is my first article
                        </p>`
                     },
         'article-two': {
                title: 'Article 2 Chandan',
                heading: 'Article 2',
                date: '30 June',
                content: `
                        <p>
                             This is my first aritcle This is my first article  This is my first aritcle This is my first article
                             This is my first aritcle This is my first article  This is my first aritcle This is my first article
                             This is my first aritcle This is my first article  This is my first aritcle This is my first article
                             This is my first aritcle This is my first article
                        </p>
               
                        <p>
                             This is my first aritcle This is my first article  This is my first aritcle This is my first article
                             This is my first aritcle This is my first article  This is my first aritcle This is my first article
                             This is my first aritcle This is my first article  This is my first aritcle This is my first article
                             This is my first aritcle This is my first article
                        
                        </p>
               
                        <p>
                             This is my first aritcle This is my first article  This is my first aritcle This is my first article
                             This is my first aritcle This is my first article  This is my first aritcle This is my first article
                             This is my first aritcle This is my first article  This is my first aritcle This is my first article
                             This is my first aritcle This is my first article
                        </p>`
    },
     'article-three': {
          title: 'Article 3 Chandan',
          heading: 'Article 3',
          date: '31 June',
          content: `
                        <p>
                             This is my first aritcle This is my first article  This is my first aritcle This is my first article
                             This is my first aritcle This is my first article  This is my first aritcle This is my first article
                             This is my first aritcle This is my first article  This is my first aritcle This is my first article
                             This is my first aritcle This is my first article
                        </p>
               
                        <p>
                             This is my first aritcle This is my first article  This is my first aritcle This is my first article
                             This is my first aritcle This is my first article  This is my first aritcle This is my first article
                             This is my first aritcle This is my first article  This is my first aritcle This is my first article
                             This is my first aritcle This is my first article
                        
                        </p>
               
                        <p>
                             This is my first aritcle This is my first article  This is my first aritcle This is my first article
                             This is my first aritcle This is my first article  This is my first aritcle This is my first article
                             This is my first aritcle This is my first article  This is my first aritcle This is my first article
                             This is my first aritcle This is my first article
                        </p>`
                }
             
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
                    <title>
                        ${title}
                    </title>
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
var counter = 0;

app.get('/counter',function (req,res){
   counter = counter + 1;
   res.send(counter.toString());
});
//app.get('/', function (req, res) {
  //res.sendFile(path.join(__dirname, 'ui', 'index.html'));
//});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];
app.get('/submit-name',function (req,res) {
    
   var name = req.query.name;
   
   names.push(name);
   
   res.send(JSON.stringify(names));
});



app.get('/:articleName',function(req,res)
{
    var articleName = req.params.articleName;
     res.send(createTemplate(articles[articleName]));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});