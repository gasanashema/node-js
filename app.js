const express = require('express');
const app = express();

//register view engine
app.set('view engine','ejs')

// listen to requests
app.listen(3000);

app.use((req,res,next)=>{
    console.log(req.url);
    console.log(req.method);
    console.log(req.host);
    next();
})

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'}
    ]
    res.render('index', {title: 'Home',blogs});
})
app.get('/about', (req, res) => {
    res.render('about',{title:"About"});
})

app.get('/blog/create', (req, res) => {
    res.render('create',{title:"Create Blog"});
})

app.use((req, res) => {
    res.status(404).render('404',{title:"404"});
})