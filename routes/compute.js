var express = require('express');
var router = express.Router();
let x;
let y;

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.x == undefined){

    
    x=Math.floor(Math.random()*20)
    y=Math.floor(Math.cosh()*10)
    let ab = Math.acosh(x);
    let abc = Math.log1p(x);
    let abcd = Math.tan(x);
    let abcdef = Math.sqrt(x);
    res.send('Math.acosh() applied for'+x +'is' +ab+'\n Math.log1p() applied for'+x +'is'+abc+'\n Math.tan() applied for'+x +'is'+abcd+'\n Math.sqrt() applied for'+x +'is'+abcdef)
}
else{
    x=req.query.x;
    let ab = Math.acosh(x);
    let abc = Math.log1p(x);
    let abcd = Math.tan(x);
    let abcdef = Math.sqrt(x);
    res.send('Math.acosh() applied for'+x +'is' +ab+'\n Math.log1p() applied for'+x +'is'+abc+'\n Math.tan() applied for'+x +'is'+abcd+'\n Math.sqrt() applied for'+x +'is'+abcdef)
}
});

module.exports = router;
