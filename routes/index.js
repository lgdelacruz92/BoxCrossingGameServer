var express = require('express');
var router = express.Router();
var firebase = require('../services/firebase');
require("firebase/firestore");

var db = firebase.firestore();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/scores', function(req, res, next) {
  db.collection("scores")
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

router.post('/setscore', function(req, res, next){
  var name = req.body.name;
  var score = req.body.score;

  db.collection("scores")
    .doc()
    .set({ name, score })
    .then(resp => {
      res.send(`Successfully added { name: ${name}, score: ${score} } to score collection`);
    })
    .catch(err => {
      res.send(`Error in adding { name: ${name}, score: ${score} } to score collection`);
    });
});


module.exports = router;