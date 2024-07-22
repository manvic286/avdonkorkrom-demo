const express = require('express')

const app = express();
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.listen(3005)

// Routing
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/news', (req, res) => {
    res.render('news')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/title-1', (req, res) => {
    res.render('news1')
})

app.get('/title-2', (req, res) => {
    res.render('news2')
})

app.get('/title-3', (req, res) => {
    res.render('news3')
})

app.get('/title-4', (req, res) => {
    res.render('news4')
})

app.get('/title-5', (req, res) => {
    res.render('news5')
})

app.get('/title-6', (req, res) => {
    res.render('news6')
})

//404 page
app.use((req, res) => {
    res.status(404).render('404', { title : '404' });

})
