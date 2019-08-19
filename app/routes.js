module.exports = function (app, passport, db, ObjectId,fetch) {

  // normal routes ===============================================================

  // show the home page (will also have our login links)
  app.get('/', function(req, res) {
    console.log(req);
    res.render('index.ejs');
  });

  // Create a Team SECTION =========================
  app.get('/profile', isLoggedIn, function(req, res) {

    let uId = ObjectId(req.session.passport.user)
    let userEmail = req.user.local.email
    console.log("this is the request", req.user.local.email)
    db.collection('user').find({'_id':userEmail}).toArray((err, result) => {
      console.log("this is the response",result)
      if (err) return console.log(err)

      res.render('profile.ejs', {
        user : req.user,
        messages: result
      })
    })
  });

  // My teams section
  app.get('/myteam', isLoggedIn, function(req, res) {
    const userId = req.session.passport.user
    db.collection('Teams').find({userId:userId}).toArray((err, result) => {
      console.log(req.user)
      if (err) return console.log(err)
      res.render('myTeams.ejs', {
        user : req.user,
        team: result
      })
    })
  });

// ======================== UPDATE TEAM NAME

app.put('/userteams', (req, res) => {
  console.log(req.body.oldTeamName);
  db.collection('Teams')
  .findOneAndUpdate({teamName: req.body.oldTeamName}, {
    $set: {
      teamName:req.body.newTeamName
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})



  //Predict Point Spread
  //function for getting player id
  // function getPlayerId(names){
  //
  // }

  const getPlayerId = {};
  getPlayerId['Ray Allen'] = 66;
  getPlayerId['Kyrie Irving'] = 41;
  getPlayerId['Paul George'] = 1;
  getPlayerId['Al Horford'] = 36;
  getPlayerId['Dwight Howard'] = 12;
  getPlayerId['Lebron James'] = 1;
  getPlayerId['Stephen Curry'] = 10;
  getPlayerId['Russell Westbrook'] = 4;
  getPlayerId['Damian Lillard'] = 35;
  getPlayerId['Kawhi Leonard'] = 98;
  getPlayerId['CJ Mccollum'] = 151;
  getPlayerId['Kobe Bryant'] = 9;
  getPlayerId['Giannis Antetokounmpo'] = 120;
  getPlayerId['Danny Green'] = 173;
  getPlayerId['Blake Griffin'] = 24;
  getPlayerId['James Harden'] = 6;
  getPlayerId['Derrick Rose'] = 51;
  getPlayerId['John Wall'] = 45;
  getPlayerId['Kyle Lowry'] = 29;
  getPlayerId['Anthony Davis'] = 56;
  getPlayerId['Marc Gasol'] = 33;
  getPlayerId['Serge Ibaka'] = 65;
  getPlayerId['Kevin Love'] = 27;
  getPlayerId['Kevin Garnett'] = 83;
  getPlayerId['Andre Iguodala'] = 42;
  getPlayerId['Pau Gasol'] = 15;
  getPlayerId['Nate Robinson'] = 163;
  getPlayerId['Klay Thompson'] = 30;
  getPlayerId['Kevin Durant'] = 2;
  getPlayerId['Jeff Green'] = 44;


  const bodyTemplate =
  {
    "Inputs": {
      "input1": {
        "ColumnNames": [
          "game_id",
          "team1",
          "team2",
          "spread",
          "t1p1_min",
          "t1p2_min",
          "t1p3_min",
          "t1p4_min",
          "t1p5_min",
          "t1p6_min",
          "t1p7_min",
          "t1p8_min",
          "t1p9_min",
          "t1p10_min",
          "t1p11_min",
          "t1p12_min",
          "t1p13_min",
          "t1p14_min",
          "t1p15_min",
          "t1p16_min",
          "t1p17_min",
          "t1p18_min",
          "t1p19_min",
          "t1p20_min",
          "t1p21_min",
          "t1p22_min",
          "t1p23_min",
          "t1p24_min",
          "t1p25_min",
          "t1p26_min",
          "t1p27_min",
          "t1p28_min",
          "t1p29_min",
          "t1p30_min",
          "t1p31_min",
          "t1p32_min",
          "t1p33_min",
          "t1p34_min",
          "t1p35_min",
          "t1p36_min",
          "t1p37_min",
          "t1p38_min",
          "t1p39_min",
          "t1p40_min",
          "t1p41_min",
          "t1p42_min",
          "t1p43_min",
          "t1p44_min",
          "t1p45_min",
          "t1p46_min",
          "t1p47_min",
          "t1p48_min",
          "t1p49_min",
          "t1p50_min",
          "t1p51_min",
          "t1p52_min",
          "t1p53_min",
          "t1p54_min",
          "t1p55_min",
          "t1p56_min",
          "t1p57_min",
          "t1p58_min",
          "t1p59_min",
          "t1p60_min",
          "t1p61_min",
          "t1p62_min",
          "t1p63_min",
          "t1p64_min",
          "t1p65_min",
          "t1p66_min",
          "t1p67_min",
          "t1p68_min",
          "t1p69_min",
          "t1p70_min",
          "t1p71_min",
          "t1p72_min",
          "t1p73_min",
          "t1p74_min",
          "t1p75_min",
          "t1p76_min",
          "t1p77_min",
          "t1p78_min",
          "t1p79_min",
          "t1p80_min",
          "t1p81_min",
          "t1p82_min",
          "t1p83_min",
          "t1p84_min",
          "t1p85_min",
          "t1p86_min",
          "t1p87_min",
          "t1p88_min",
          "t1p89_min",
          "t1p90_min",
          "t1p91_min",
          "t1p92_min",
          "t1p93_min",
          "t1p94_min",
          "t1p95_min",
          "t1p96_min",
          "t1p97_min",
          "t1p98_min",
          "t1p99_min",
          "t1p100_min",
          "t1p101_min",
          "t1p102_min",
          "t1p103_min",
          "t1p104_min",
          "t1p105_min",
          "t1p106_min",
          "t1p107_min",
          "t1p108_min",
          "t1p109_min",
          "t1p110_min",
          "t1p111_min",
          "t1p112_min",
          "t1p113_min",
          "t1p114_min",
          "t1p115_min",
          "t1p116_min",
          "t1p117_min",
          "t1p118_min",
          "t1p119_min",
          "t1p120_min",
          "t1p121_min",
          "t1p122_min",
          "t1p123_min",
          "t1p124_min",
          "t1p125_min",
          "t1p126_min",
          "t1p127_min",
          "t1p128_min",
          "t1p129_min",
          "t1p130_min",
          "t1p131_min",
          "t1p132_min",
          "t1p133_min",
          "t1p134_min",
          "t1p135_min",
          "t1p136_min",
          "t1p137_min",
          "t1p138_min",
          "t1p139_min",
          "t1p140_min",
          "t1p141_min",
          "t1p142_min",
          "t1p143_min",
          "t1p144_min",
          "t1p145_min",
          "t1p146_min",
          "t1p147_min",
          "t1p148_min",
          "t1p149_min",
          "t1p150_min",
          "t1p151_min",
          "t1p152_min",
          "t1p153_min",
          "t1p154_min",
          "t1p155_min",
          "t1p156_min",
          "t1p157_min",
          "t1p158_min",
          "t1p159_min",
          "t1p160_min",
          "t1p161_min",
          "t1p162_min",
          "t1p163_min",
          "t1p164_min",
          "t1p165_min",
          "t1p166_min",
          "t1p167_min",
          "t1p168_min",
          "t1p169_min",
          "t1p170_min",
          "t1p171_min",
          "t1p172_min",
          "t1p173_min",
          "t1p174_min",
          "t1p175_min",
          "t1p176_min",
          "t1p177_min",
          "t1p178_min",
          "t1p179_min",
          "t1p180_min",
          "t1p181_min",
          "t1p182_min",
          "t1p183_min",
          "t1p184_min",
          "t1p185_min",
          "t1p186_min",
          "t1p187_min",
          "t1p188_min",
          "t1p189_min",
          "t1p190_min",
          "t1p191_min",
          "t1p192_min",
          "t1p193_min",
          "t1p194_min",
          "t1p195_min",
          "t1p196_min",
          "t1p197_min",
          "t1p198_min",
          "t1p199_min",
          "t1p200_min",
          "t2p1_min",
          "t2p2_min",
          "t2p3_min",
          "t2p4_min",
          "t2p5_min",
          "t2p6_min",
          "t2p7_min",
          "t2p8_min",
          "t2p9_min",
          "t2p10_min",
          "t2p11_min",
          "t2p12_min",
          "t2p13_min",
          "t2p14_min",
          "t2p15_min",
          "t2p16_min",
          "t2p17_min",
          "t2p18_min",
          "t2p19_min",
          "t2p20_min",
          "t2p21_min",
          "t2p22_min",
          "t2p23_min",
          "t2p24_min",
          "t2p25_min",
          "t2p26_min",
          "t2p27_min",
          "t2p28_min",
          "t2p29_min",
          "t2p30_min",
          "t2p31_min",
          "t2p32_min",
          "t2p33_min",
          "t2p34_min",
          "t2p35_min",
          "t2p36_min",
          "t2p37_min",
          "t2p38_min",
          "t2p39_min",
          "t2p40_min",
          "t2p41_min",
          "t2p42_min",
          "t2p43_min",
          "t2p44_min",
          "t2p45_min",
          "t2p46_min",
          "t2p47_min",
          "t2p48_min",
          "t2p49_min",
          "t2p50_min",
          "t2p51_min",
          "t2p52_min",
          "t2p53_min",
          "t2p54_min",
          "t2p55_min",
          "t2p56_min",
          "t2p57_min",
          "t2p58_min",
          "t2p59_min",
          "t2p60_min",
          "t2p61_min",
          "t2p62_min",
          "t2p63_min",
          "t2p64_min",
          "t2p65_min",
          "t2p66_min",
          "t2p67_min",
          "t2p68_min",
          "t2p69_min",
          "t2p70_min",
          "t2p71_min",
          "t2p72_min",
          "t2p73_min",
          "t2p74_min",
          "t2p75_min",
          "t2p76_min",
          "t2p77_min",
          "t2p78_min",
          "t2p79_min",
          "t2p80_min",
          "t2p81_min",
          "t2p82_min",
          "t2p83_min",
          "t2p84_min",
          "t2p85_min",
          "t2p86_min",
          "t2p87_min",
          "t2p88_min",
          "t2p89_min",
          "t2p90_min",
          "t2p91_min",
          "t2p92_min",
          "t2p93_min",
          "t2p94_min",
          "t2p95_min",
          "t2p96_min",
          "t2p97_min",
          "t2p98_min",
          "t2p99_min",
          "t2p100_min",
          "t2p101_min",
          "t2p102_min",
          "t2p103_min",
          "t2p104_min",
          "t2p105_min",
          "t2p106_min",
          "t2p107_min",
          "t2p108_min",
          "t2p109_min",
          "t2p110_min",
          "t2p111_min",
          "t2p112_min",
          "t2p113_min",
          "t2p114_min",
          "t2p115_min",
          "t2p116_min",
          "t2p117_min",
          "t2p118_min",
          "t2p119_min",
          "t2p120_min",
          "t2p121_min",
          "t2p122_min",
          "t2p123_min",
          "t2p124_min",
          "t2p125_min",
          "t2p126_min",
          "t2p127_min",
          "t2p128_min",
          "t2p129_min",
          "t2p130_min",
          "t2p131_min",
          "t2p132_min",
          "t2p133_min",
          "t2p134_min",
          "t2p135_min",
          "t2p136_min",
          "t2p137_min",
          "t2p138_min",
          "t2p139_min",
          "t2p140_min",
          "t2p141_min",
          "t2p142_min",
          "t2p143_min",
          "t2p144_min",
          "t2p145_min",
          "t2p146_min",
          "t2p147_min",
          "t2p148_min",
          "t2p149_min",
          "t2p150_min",
          "t2p151_min",
          "t2p152_min",
          "t2p153_min",
          "t2p154_min",
          "t2p155_min",
          "t2p156_min",
          "t2p157_min",
          "t2p158_min",
          "t2p159_min",
          "t2p160_min",
          "t2p161_min",
          "t2p162_min",
          "t2p163_min",
          "t2p164_min",
          "t2p165_min",
          "t2p166_min",
          "t2p167_min",
          "t2p168_min",
          "t2p169_min",
          "t2p170_min",
          "t2p171_min",
          "t2p172_min",
          "t2p173_min",
          "t2p174_min",
          "t2p175_min",
          "t2p176_min",
          "t2p177_min",
          "t2p178_min",
          "t2p179_min",
          "t2p180_min",
          "t2p181_min",
          "t2p182_min",
          "t2p183_min",
          "t2p184_min",
          "t2p185_min",
          "t2p186_min",
          "t2p187_min",
          "t2p188_min",
          "t2p189_min",
          "t2p190_min",
          "t2p191_min",
          "t2p192_min",
          "t2p193_min",
          "t2p194_min",
          "t2p195_min",
          "t2p196_min",
          "t2p197_min",
          "t2p198_min",
          "t2p199_min",
          "t2p200_min"
        ],
        "Values": [
          [
            "0",
            "value",
            "value",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
          ]
        ]
      }
    },
    "GlobalParameters": {}
  }

  app.get("/prediction", function(req,res){
    const teamOne = req.query.teamOne
    const teamTwo = req.query.teamTwo
    const teamOnePlayers = []
    const teamTwoPlayers = []
    console.log(teamOne,teamTwo);
    //get player names from mongodb
    //find the player number from csv file
    db.collection('Teams').findOne({teamName: teamOne},(err, teamOneResult) => {
      db.collection('Teams').findOne({teamName: teamTwo},(err, teamTwoResult) => {
        const values = bodyTemplate.Inputs.input1.Values[0]
        values.fill(0)
        const prediction =  Math.random() * 30 - 15
        //team one players pushed to an array
        teamOnePlayers.push(teamOneResult.playerOne)
        teamOnePlayers.push(teamOneResult.playerTwo)
        teamOnePlayers.push(teamOneResult.playerThree)
        teamOnePlayers.push(teamOneResult.playerFour)
        teamOnePlayers.push(teamOneResult.playerFive)

        //team two players pushed to an array
        teamTwoPlayers.push(teamTwoResult.playerOne)
        teamTwoPlayers.push(teamTwoResult.playerTwo)
        teamTwoPlayers.push(teamTwoResult.playerThree)
        teamTwoPlayers.push(teamTwoResult.playerFour)
        teamTwoPlayers.push(teamTwoResult.playerFive)

        teamOnePlayers.forEach(function(name){
          let playerId = getPlayerId[name];
          console.log("the Id for", name, "is", playerId)
          values[playerId + 3] = 30;
        })
        teamTwoPlayers.forEach(function(name){
          let playerId = getPlayerId[name];
          console.log("the Id for", name, "is", playerId)
          values[playerId + 3 + 200] = 30;
        })
        fetch('https://ussouthcentral.services.azureml.net/workspaces/0c9abdb29d054db49d70577568da4823/services/d876d3f3734b4bc5a76c6a286ab09178/execute?api-version=2.0&details=true', {
           method: 'post',
           headers:{
             'Authorization': 'Bearer 5FyF8X3eOhJ5HN6wm+v/fLCIo8CrEOD/h2u71z/Ayl6iI2r20sMUQJz90PwMJIYRYgoDUVfeCdrRCvDR0bTyng==',
             'Content-Type': 'application/json',
             'Content-Length': bodyTemplate.length
           },
           body: JSON.stringify(bodyTemplate)
         }).then(res => res.json())
         .then(response => {
           const result = response.Results.output1.value.Values[0]
           res.render('prediction.ejs', {
             teamOne: teamOneResult,
             teamTwo: teamTwoResult,
             prediction:result[result.length-1],
             azurePrdiction: result,
           })
        console.log("team one result",teamOneResult)
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
    console.log();
    const userId = req.session.passport.user
    console.log('USERID',userId)
    db.collection('Teams').save({userId:userId,teamIcon:req.body.teamIcon, teamName: req.body.teamName, playerOne: req.body.playerOne, playerOneImg: req.body.playerOneImg, playerTwo: req.body.playerTwo, playerTwoImg: req.body.playerTwoImg, playerThree: req.body.playerThree, playerThreeImg: req.body.playerThreeImg, playerFour: req.body.playerFour, playerFourImg: req.body.playerFourImg, playerFive: req.body.playerFive, playerFiveImg: req.body.playerFiveImg}, (err, result) => {
      if (err) return console.log(err)
      console.log('saved to database')
      res.redirect('/profile')
    })
  })

  app.delete('/teams', (req, res) => {
    console.log(req.body.teamName)
    db.collection('Teams').findOneAndDelete({teamName:req.body.teamName}, (err, result) => {
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
