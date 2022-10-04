import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      index: true,
      unique: true,
      required: true,
      match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    },
    password: {
      type: String,
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
      type: Date,
      min: new Date().getFullYear() - 21,
    },
  },
  { timestamps: true },
);

function birthDayValidator(date) {
  return !isNaN(Date.parse(date)) && new Date().getFullYear() - new Date(date).getFullYear() <= 22;
}

UserSchema.plugin(uniqueValidator);
UserSchema.pre(
  'save',
  async function (next) {
    const user = this;
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
    next();
  },
);

UserSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
};
export default mongoose.model('User', UserSchema);
