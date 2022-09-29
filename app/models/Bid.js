import mongoose from 'mongoose';

const BidSchema = new mongoose.Schema({
  proposed_price: {
    type: Number,
    required: true,
    min: 0,
    message: 'cannot be negative',
  },
  timestamps: true,
});

export default mongoose.model('Bid', BidSchema);
