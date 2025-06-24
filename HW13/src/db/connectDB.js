import mongoose from "mongoose";

const { DATABASE_URI } = process.env

const connectDatabase = async () => {
    try {
        await mongoose.connect(DATABASE_URI)
        console.log('Successfully connected to the database');
    } catch (error) {
        console.error(error);
        throw error;
    }
}
export default connectDatabase