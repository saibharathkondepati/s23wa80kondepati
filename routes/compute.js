var express = require('express');
var router = express.Router();
let x;
let y;

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.x == undefined){

    
    x=Math.floor(Math.random()*18)
    y=Math.floor(Math.cosh()*12)
    let xyz = Math.fround(x);
    let xyz1 = Math.random(x);
    let xyz2 = Math.round(x);
    let xyz3 = Math.sqrt(x);
    res.send('Math.fround() applied for '+x +'is' +xyz+'\n Math.random() applied for'+x +'is'+xyz1+'\n Math.sqrt() applied for'+x +'is'+xyz2)
}
else{
    x=req.query.x;
    let xyz = Math.fround(x);
    let xyz1 = Math.log1p(x);
    let xyz2 = Math.tan(x);
    let xyz3 = Math.sqrt(x);
    res.send('Math.fround() applied for '+x +'is' +xyz+'\n Math.random() applied for'+x +'is'+xyz1+'\n Math.sqrt() applied for'+x +'is'+xyz2)
}
});

module.exports = router;
