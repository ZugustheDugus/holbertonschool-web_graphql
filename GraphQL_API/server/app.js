const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');





const app = express();
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));
app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});

mongoose.connect('mongodb+srv://MongoUser:MongoPassword@cluster0.ihnnjrm.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.on('error', (error) => console.error(error));
mongoose.connection.once('open', () => console.log('connected to database'));