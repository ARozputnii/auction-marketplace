import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    index: true,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  birth_day: {
    type: Number,
    min: [22, 'Too few age'],
  },
  timestamps: true,
});

UserSchema.plugin(uniqueValidator);

export default mongoose.model('User', UserSchema);
