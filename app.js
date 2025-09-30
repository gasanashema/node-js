const express = require('express');
const app = express();

//register view engine
app.set('view engine','ejs')

// listen to requests
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<h1>Hello express</h1>');
    res.render('index');
})
app.get('/about', (req, res) => {
    // res.send('<h1>Hello express</h1>');
    res.render('about');
})

app.get('/about-us', (req, res) => {
    // res.send('<h1>Hello express</h1>');
    res.redirect('/about');
})

app.use((req, res) => {
    res.status(404).render('404');
})