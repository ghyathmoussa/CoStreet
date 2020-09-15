const express =require('express');

const app = express();

const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');

const userRouter = require('./routes/user');

// app.get('/',(res,req) => {
//     req.send('Hello World');

// });

// app.get('./api/products',(res,req) => {
//     req.send('prodcts have listed');
// })

app.use(bodyParser.urlencoded({extende:false}))

app.use(adminRouter);

app.use(userRouter);

app.use((req,res)=>{
    res.status(404).render('404')
});

app.set('view engine','pug');
app.set('views','./views')

app.listen(3000, ()=> console.log('done'));

