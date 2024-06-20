const mongoose = require('mongoose');
const dotenv = require("dotenv")
dotenv.config() 
const MONGO_URI = `mongodb+srv://rohitrandy002:On4sy5VqJiXaaFhW@cluster0.rxqndfv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
module.exports = connectDB;
