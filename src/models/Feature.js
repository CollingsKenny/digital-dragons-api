import mongoose, { Schema } from 'mongoose';

const FeatureSchema = new Schema({
  name: String,
  description: String,
  parent: {
    type: mongoose.ObjectId,
    ref: 'feature',
  },
  // catagory
});

export const Feature = mongoose.model('feature', FeatureSchema);
