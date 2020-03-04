let express = require ('express');
let app = express();

//set public folder
app.use(express.static(__dirname +'/public'));

//use view engine
let expressHbs = require('express-handlebars');
let hbs=expressHbs.create({
    extname:'hbs',
    defaultLayout:'layout',
    layoutsDir:__dirname +'/views/layouts/',
    partialsDir:__dirname + '/views/partials/'
});
app.engine('hbs',hbs.engine);
app.set('view engine','hbs');

//define your root here
app.get('/',(req,res) => {
    res.render('index');
});


app.get('/:page',(req,res) => {
    let banners= {
        blog:'Our Blog',
        category:'Shop Category',
        cart:'Shopping Cart'
    };
    let page =req.params.page;
    res.render(page,{banner:banners[page]});
  });

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'),() => {
  console.log(`Server is running at port ${app.get('port')}`);
});