import mongoose, { Schema } from 'mongoose';

/*
  type Character {
    id: ID!
    name: String!
    userId: String!
    user: User!
    traits: [Trait]
    stats: {
      str: [Trait]
      dex: [Trait]
      con: [Trait]
    }
    race: Feature
    class: Feature
  }
 */

const CharacterSchema = new Schema({
  name: String,
  userId: {
    type: mongoose.ObjectId,
    ref: 'user',
  },
  traits: [
    {
      type: mongoose.ObjectId,
      ref: 'trait',
    },
  ],
  race: {
    type: mongoose.ObjectId,
    ref: 'feature',
  },
  class: {
    type: mongoose.ObjectId,
    ref: 'feature',
  },
});

export const Character = mongoose.model('character', CharacterSchema);
