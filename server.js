const express = require('express');
const path = require('path');
const morgan = require('morgan');
const compression = require('compression');
const app = express();

// Gunakan middleware untuk logging dan kompresi
app.use(morgan('dev'));
app.use(compression());

// Gunakan template engine EJS
app.set('view engine', 'ejs');

// Tambahkan file statis di folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Tambahkan beberapa rute tambahan
app.get('/', (req, res) => {
    res.render('index', { message: 'Hallo Ini Adalah Customer FE Version 1.0.0' });
});

app.get('/about', (req, res) => {
    res.render('about');
});

// Jalankan server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
