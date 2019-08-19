
module.exports = {

    'url' : `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0-u1ysz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, // looks like mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot
    'dbName': 'userTeams'
};


// module.exports = {
//
//     'url' : "mongodb+srv://Rodriguez:HXEBxh5uL5824lND@cluster0-u1ysz.mongodb.net/userTeams?retryWrites=true&w=majority", // looks like mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot
//     'dbName': 'userTeams'
// };
