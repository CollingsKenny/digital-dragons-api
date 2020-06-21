import { User } from './models/User';
import { GraphQLScalarType, Kind } from 'graphql';

// Resolvers
// Defines how the data will be fetched and defined in the schema.
export const resolvers = {
  Query: {
    user: async (_, { id }) => {
      return User.findById(id);
    },
  },
  Mutation: {
    createUser: async (_, { name }) => {
      const user = new User({ name });
      return user.save();
    },
  },
};
