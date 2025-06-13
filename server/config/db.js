import mongoose from "mongoose";

// Function to connet with database
const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log('DataBase Connected'));

    await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`)
}

export default connectDB;