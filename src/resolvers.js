import { User } from './models/User';
import { Character } from './models/Character';
import { Feature } from './models/Feature';

// Resolvers
// Defines how the data will be fetched and defined in the schema.
export const resolvers = {
  Query: {
    user: async (_, { id }) => {
      return await User.findById(id);
    },
    characters: async () => {
      return await Character.find();
    },
    features: async () => {
      return await Feature.find();
    },
  },
  Mutation: {
    createUser: async (_, { name }) => {
      const user = new User({ name });
      return await user.save();
    },
    createCharacter: async (_, { name, userId }) => {
      const character = new Character({ name, userId });
      return await character.save();
    },
    createFeature: async (_, { name, description }) => {
      const feature = new Feature({ name, description });
      return await feature.save();
    },
  },
  User: {
    characters: async (user) => {
      return await Character.find({ userId: user.id });
    },
  },
};
