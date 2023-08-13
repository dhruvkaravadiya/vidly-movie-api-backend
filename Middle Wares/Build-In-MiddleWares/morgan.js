// Morgan Middle Ware
// logs the requests along with some other information
// depending upon its configuration and the preset used. 
// It proves to be very helpful while debugging and also 
// if you want to create Log files.

const express = require('express');
const app = express();


const morgan = require('morgan');

//now we can log output in three 3 ways: 
// 1. predefined fomat string
// 2. Formatting the string of predefined tokens
// 3. custom format function

// predefined format string
app.use(morgan('dev'));
app.use(morgan('short'));
app.use(morgan('tiny'));
app.use(morgan('common'));
app.use(morgan('combined'));

// OR
// format the string of predefined tokens
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

//  OR
// custom format function
// example log : GET / 200 16 - 2.3456 ms
app.use(morgan((tokens,req,res)=>{
    return [
        tokens.method(req,res),
        tokens.url(req,res),
        tokens.status(req,res),
        tokens.res(req,res , 'content-length'), 
        '-',
        tokens['response-time'](req,res),
        'ms' 
    ].join(' ');
}));

app.get('/',(req,res)=>{res.send('Response send !!')});

app.listen(3000, ()=>{
    console.log(`Server started @port 3000`);
});