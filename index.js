const express = require('express');
const pug = require('pug');
const app = express();

app.set('view engine', 'pug');

// home page
app.get('/', (req, res) => {
    res.render('home.pug', {
        title: 'Home',
        page: 'home'
    });
})

// contact page
app.get('/contact', (req, res) => {
    res.render('contact.pug', {
        title: 'Contact',
        page: 'contact'
    });
})

// about page
app.get('/about', (req, res) => {
    res.render('about.pug', {
        title: 'About',
        page: 'about'
    });
})

try {
    const PORT = process.env.PORT || 5000

    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`)
    });
} catch (error) {
    console.log(error)
}