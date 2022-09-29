import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  arrival_location: {
    type: String,
  },
  arrival_type: {
    type: String,
    enum: {
      values: ['Royal Mail', 'United States Postal Service', ' DHL Express'],
      message: '{VALUE} is not supported',
    },
  },
  status: {
    type: String,
    enum: {
      values: ['pending', 'sent', 'delivered'],
      message: '{VALUE} is not supported',
    },
  },
  timestamps: true,
});

export default mongoose.model('Order', OrderSchema);
