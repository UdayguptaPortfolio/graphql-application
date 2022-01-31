const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

//Database Connection
const URL ="mongodb+srv://Udaygupta12:Udaygupta123@cluster0.2nekh.mongodb.net/operation_graphQL?retryWrites=true&w=majority"
mongoose.connect(
  URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => console.log("DB CONNECTED")
);


const startServer = async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app });
  app.listen(4000, () => console.log("Server UP & RUnning *4000"));
};
startServer();

