var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
'article-one': {
  title: 'Article One | Divya',
  heading:'Article One',
  date: '9 feb 2017',
  content:`<p>
        I absolutely don't have anything to write in this article so have just copy-pasted my sentences !!!!!!!!!!
        </p>
        <p>
        this is the content for first article> this is the content for first article
        this is the content for first article  this is the content for first article
        this is the content for first article> this is the content for first article
        this is the content for first article  this is the content for first article
        </p>
        
        <p>
        this is the content for first article> this is the content for first article
        this is the content for first article  this is the content for first article
        this is the content for first article> this is the content for first article
        this is the content for first article  this is the content for first article
        </p>
        
        <p>
        this is the content for first article> this is the content for first article
        this is the content for first article  this is the content for first article
        </p>`
},
'article-two': {
    title: 'Article two | Divya',
  heading:'Article two',
  date: '24 January 2017',
  content:`<p>
        You know my birthday is on January 24th .   :D
        </p>`
    
},
'article-three': {
  title: 'Article three | Divya',
  heading:'Article three',
  date: '24 feb 2017',
  content:`<p>
        Thank you for visiting all my pages. Keep smiling and be  happy always !!!!  :)
        </p>`  

    
}
};

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;

var htmlTemplate = `
   <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
         <link href="/ui/style.css" rel="stylesheet" />
       
    </head>
    <body>
        <div class="container">
            <div>
            <a href="/">Home</a>
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
</html>
`;
return htmlTemplate;
}




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var counter =0;

app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});  

var names=[];
app.get(`/submit-name/:name`, function (req, res) {
    
var name = req.params.name;

names.push(name);


res.send(JSON.stringify(names));

});



app.get('/:articleName',function(req, res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});  



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});