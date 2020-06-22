import mongoose, { Schema } from 'mongoose';

// Note: Currently just a statTrait. Will need to generalize later.
const TraitSchema = new Schema({
  amount: Number,
  stat: String,
  parent: {
    type: mongoose.ObjectId,
    ref: 'feature',
  },
});

export const Trait = mongoose.model('trait', TraitSchema);
