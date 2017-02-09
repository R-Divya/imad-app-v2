var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles ={
   'article-one':(
    title= 'Article one going',
   headind=  'Article one',
    date= '7 feb 2017',
    content=`  <p>
              This is the content of my first article.This is the content of my first articleThis is the content of my first article..This is the content of my first article.This is the content of my first article.This is the content of my first article.
          </p>
          <p>
              This is the content of my first article.This is the content of my first articleThis is the content of my first article..This is the content of my first article.This is the content of my first article.This is the content of my first article.
          </p>
          <p>
              This is the content of my first article.This is the content of my first articleThis is the content of my first article..This is the content of my first article.This is the content of my first article.This is the content of my first article.
          </p>`
     ),
   
   
   
   'article-two':(
       title= 'Article two going',
    headind=  'Article two',
    date= '7 feb 2017',
    content=`  <p>
              This is the content of my second article.
          </p>`
     
       ),
   'article-three':(
        title= 'Article three going',
    headind=  'Article three',
    date= '24 jan 2017',
    content=`  <p>
              This is the content of my thrid article.
          </p>`
       )
   };
    
function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;

var htmlTemplate = `
<html>
    <head>
        <title>
            ${title}
        </title>
        
     </head>
     <boby> 
        <div class="container">;
          <div>
              <o href="/">Home</o>
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
       </boby>
      
</html>
`;
return htmlTemplate;
    
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename',function(req,res){
    //articlename =article-one
  var  articlename = req.params.articlename;
     res.send(createTemplate(articles[articlename]));
   
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

