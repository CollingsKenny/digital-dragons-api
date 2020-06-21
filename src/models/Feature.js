import mongoose, { Schema } from 'mongoose';

/*
  type Feature {
   id: ID!
   name: String!
   description: String
   traits: [Trait]
   parent: Feature
  }
 */

const FeatureSchema = new Schema({
  name: String,
  description: String,
  traits: [{ amount: Number, stat: String }],
  parent: {
    type: mongoose.ObjectId,
    ref: 'feature',
  },
});

export const Feature = mongoose.model('feature', FeatureSchema);
