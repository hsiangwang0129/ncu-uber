const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            'mongodb+srv://hsiangyu0129:O57NDcEC9YHAxXhd@cluster0.1qzn8.mongodb.net/ncuber?retryWrites=true&w=majority&appName=Cluster0'
        );
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(error);
        console.log('MongoBB error connect')
        process.exit(1);
    }
}

module.exports = connectDB;