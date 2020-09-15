const express = require('express');
const router = express.Router();


router.use('/add-product',(req,res,next) => {
    res.send(`
    <html>
        <head>
            <title>Document</title>
        </head>
        <body>
            <form action="/product" method="POST">
                <input type="text" name="product">
                <input type="submit" value = "Add Product">
            </form>
        </body>
    
    </html>`);
});


router.use('/product',(req,res,next) => {
    console.log(req.body);

    res.redirect('/');
});

module.exports = router;