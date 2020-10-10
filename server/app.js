const express = require('express');
const schema = require('./schema/schema');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//alow cors-origin request
app.use(cors());

mongoose.connect('mongodb+srv://Kerem:krmcnyns@gql-db.7ov7l.mongodb.net/<dbname>?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true }).
then(() => console.log("Connected to MongoDB Atlas")).
catch(err => console.log("Error: ", err.message));

mongoose.connection.once('open',()=> {
  console.log('connected to database');
});

app.use('/graphql',graphqlHTTP({
   schema,
   graphiql:true
}));

app.listen(4000,() => {
  console.log('now listening request on port 4000');
});
