import mongoose from 'mongoose';

const uri = 'mongodb+srv://mordo1309:ZOcnM6imsfir7OEa@cluster0.i9pms.mongodb.net/dbname?retryWrites=true&w=majority&tls=true';

export const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Database connected');
    } catch (error) {
        console.log('Error connecting to the database');
        console.log(error);
    }
}