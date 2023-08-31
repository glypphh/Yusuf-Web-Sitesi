var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  console.log(req.body)
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'joseff1544@gmail.com',
      pass: 'drvfqifgoxefwkoj'
    }
  });
  transporter.verify(function (error, success) {
  
    if (error) throw error;
  
    console.log('Bağlantı başarıyla sağlandı');
  
  });
  let bilgiler = {
    from: 'joseff1544@gmail.com',
    to: 'joseff1544@gmail.com',
    subject: `${req.body.name} - ${req.body.phone} - ${req.body.email}`,
    text: req.body.message,
  };
  transporter.sendMail(bilgiler, function (error, info) {
  
    if (error) throw error;
  
    console.log('Eposta gönderildi ' + info.response);
    res.send();
  
  });
});



module.exports = router;
