module.exports = function(app, passport, db) {

  // normal routes ===============================================================

  // show the home page (will also have our login links)
  app.get('/', function(req, res) {
    res.render('index.ejs');
  });

  // Create a Team SECTION =========================
  app.get('/profile', isLoggedIn, function(req, res) {
    db.collection('user').find().toArray((err, result) => {
      if (err) return console.log(err)
      res.render('profile.ejs', {
        user : req.user,
        messages: result
      })
    })
  });

  // My teams section
  app.get('/myteam', isLoggedIn, function(req, res) {
    db.collection('Teams').find().toArray((err, result) => {
      console.log(req.user)
      if (err) return console.log(err)
      res.render('myTeams.ejs', {
        user : req.user,
        team: result
      })
    })
  });

  //Predict Point Spread

  app.get('/predict', function(req,res){
    const teamOne = req.query.teamOne
    const teamTwo = req.query.teamTwo
    //get player names from mongodb
    //find the player number from csv file
    db.collection('Teams').findOne({teamName: teamOne},(err, teamOnePlayers) => {
      db.collection('Teams').findOne({teamName: teamTwo},(err, teamTwoPlayers) => {
        const prediction =  Math.random() * 30 - 15
        res.render('prediction.ejs', {
          teamOnePlayers: teamOnePlayers,
          teamTwoPlayers: teamTwoPlayers,
          teamOne: teamOne,
          teamTwo: teamTwo,
          prediction: prediction
        })
      })
    })
  })

  // LOGOUT ==============================
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  // message board routes ===============================================================

  app.post('/team', (req, res) => {
    db.collection('Teams').save({teamName: req.body.teamName, playerOne: req.body.playerOne, playerOneImg: req.body.playerOneImg, playerTwo: req.body.playerTwo, playerTwoImg: req.body.playerTwoImg, playerThree: req.body.playerThree, playerThreeImg: req.body.playerThreeImg, playerFour: req.body.playerFour, playerFourImg: req.body.playerFourImg, playerFive: req.body.playerFive, playerFiveImg: req.body.playerFiveImg}, (err, result) => {
      if (err) return console.log(err)
      console.log('saved to database')
      res.redirect('/profile')
    })
  })

  app.put('/messages', (req, res) => {
    db.collection('messages')
    .findOneAndUpdate({name: req.body.name, msg: req.body.msg}, {
      $set: {
        thumbUp:req.body.thumbUp + 1
      }
    }, {
      sort: {_id: -1},
      upsert: true
    }, (err, result) => {
      if (err) return res.send(err)
      res.send(result)
    })
  })

  app.delete('/messages', (req, res) => {
    db.collection('messages').findOneAndDelete({name: req.body.name, msg: req.body.msg}, (err, result) => {
      if (err) return res.send(500, err)
      res.send('Message deleted!')
    })
  })

  // =============================================================================
  // AUTHENTICATE (FIRST LOGIN) ==================================================
  // =============================================================================

  // locally --------------------------------
  // LOGIN ===============================
  // show the login form
  app.get('/login', function(req, res) {
    res.render('index.ejs', { message: req.flash('loginMessage') });
  });

  // process the login form
  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  // SIGNUP =================================
  // show the signup form
  app.get('/signup', function(req, res) {
    res.render('signup.ejs', { message: req.flash('signupMessage') });
  });

  // process the signup form
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  // =============================================================================
  // UNLINK ACCOUNTS =============================================================
  // =============================================================================
  // used to unlink accounts. for social accounts, just remove the token
  // for local account, remove email and password
  // user account will stay active in case they want to reconnect in the future

  // local -----------------------------------
  app.get('/unlink/local', isLoggedIn, function(req, res) {
    var user            = req.user;
    user.local.email    = undefined;
    user.local.password = undefined;
    user.save(function(err) {
      res.redirect('/profile');
    });
  });

};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
  return next();

  res.redirect('/');
}
