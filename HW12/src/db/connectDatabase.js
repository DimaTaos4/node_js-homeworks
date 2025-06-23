import mongoose from "mongoose";


const { DATABASE_URI } = process.env

const connectDatabase = async () => {
    try {
        await mongoose.connect(DATABASE_URI)
        console.log('Successfully connected to the database');
    } catch (error) {
        console.error("Unable connect to the database");
        console.log(error);
        throw error;
    }
}

export default connectDatabase