import mongoose from 'mongoose';

const LotSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: {
      values: ['pending', 'inProcess', 'closed'],
      message: '{VALUE} is not supported',
    },
  },
  current_price: {
    type: Number,
    required: true,
    min: 0,
    message: 'cannot be negative',
  },
  estimated_price: {
    type: Number,
    required: true,
    min: 0,
    message: 'cannot be negative',
  },
  lot_start_time: {
    type: Date,
    required: true,
  },
  lot_end_time: {
    type: Date,
    required: true,
    validate: [endTimeValidator(input), 'lot end time must be more than lot start time'],
  },
  timestamps: true,
});

function endTimeValidator(value) {
  return typeof new Date(value) === 'date' && new Date(value) >= new Date(this.lotStartTime);
}

export default mongoose.model('Lot', LotSchema);
