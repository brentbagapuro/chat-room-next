import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGODB_URI: string = process.env.MONGODB_URI ?? '';
let connection: Number;

const dbConnect = async () => {
  if (connection) {
    return;
  }

  const db = await mongoose.connect(MONGODB_URI);

  connection = db.connections[0].readyState;
};

export default dbConnect;
