const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views','./views');

app.get('/about', function(req, res){
    res.render('about.pug', {
        name: "Sobre mí",
        url: "https://www.creativefabrica.com/wp-content/uploads/2022/12/22/Homer-Simpson-Portrait-53854221-1-1.png"
    });
});

app.get('/contact', function(req, res){
    res.render('contact.pug');
});
app.get('/', function(req, res){
    res.render('index.pug');
});
app.get('/mission', function(req, res){
    res.render('location.pug');
});
app.get('/first_template', function(req, res){
    res.render('mission.pug');
});

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
});