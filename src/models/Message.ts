import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.message ||
  mongoose.model('message', MessageSchema);
