import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import config from 'config';

import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  // Set up database
  var mongoDB = config.get('mongoURI');
  await mongoose
    .connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));

  // Launch the webserver
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

startServer();
