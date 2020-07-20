var express = require('express');
var router = express.Router();
var firebase = require('../services/firebase');
require("firebase/firestore");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/scores', function(req, res, next) {
  var db = firebase.firestore();
  db.collection("TestCollection")
    .get()
    .then(function(querySnapshot) {
      var data = [];
      querySnapshot.forEach(function(doc) {
        data.push({ id: doc.id, data: doc.data() });
      });
      res.send(data);
    })
    .catch(function(error) {
        res.send(error);
    });
});

module.exports = router;