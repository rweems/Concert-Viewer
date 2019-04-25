
const express = require('express');
const app = express();
const methodOverride = require('method-override');

app.set('view engine', 'hbs');

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));


app.use(express.static(__dirname + '/public'));



const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
{
    console.log('listening...');
} )