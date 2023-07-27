const path = require('path')
const express = require('express')
const morgan = require('morgan')
const expressHandlebars = require('express-handlebars')
const app = express()
const port = 3000

// http logger
app.use(morgan('combined'))

// template engine
// re-define short expand from handlebars to hbs
const hbs = expressHandlebars.create({
  extname:'.hbs'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'))

// console.log('PATH: ', path.join(__dirname, 'resource/views'));

//config static image (locahost:3000/img/logo.png)
app.use(express.static(path.join(__dirname, 'public')));

// route definition => return browser
app.get('/', (req, res) => {
  res.render(`home`)
})

// create news page
app.get('/news', (req, res) => {
  res.render(`news`)
})

// 127.0.0.0 - mapping to brow (localhost)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
