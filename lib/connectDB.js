import mongoose from 'mongoose';

const mongodb_uri =
  'mongodb+srv://rashedinislam06:i1daGHFkhDW9Tj6q@cluster0.4qgkjzt.mongodb.net/ticketDB';

const connection = {};
console.log(mongodb_uri);
console.log('hello world')


async function connectDB() {
  if (connection.isConnected) {
    console.log('Already connected');   
    return;
  }

  try {
    const db = await mongoose.connect(mongodb_uri || '');
    //  const db = await mongoose.connect(process.env.MONGODB_URI || '');

    connection.isConnected = db.connections[0].readyState;
    console.log('hello');
    console.log('DB connected successfully');
  } catch (error) {
    console.error('Db connection error', error);
    // process.exit(1);
  }
}

connectDB();

export default connectDB;