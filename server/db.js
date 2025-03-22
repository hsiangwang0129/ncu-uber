// const mongoose = require('mongoose')

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(
//             'mongodb+srv://hsiangyu0129:O57NDcEC9YHAxXhd@cluster0.1qzn8.mongodb.net/ncuber?retryWrites=true&w=majority&appName=Cluster0'
//         );
//         console.log(`MongoDB Connected: ${conn.connection.host}`)
//     } catch (error) {
//         console.error(error);
//         console.log('MongoBB error connect')
//         process.exit(1);
//     }
// }

// module.exports = connectDB;

const mongoose = require('mongoose');
require('dotenv').config();  // 引入 dotenv 並加載 .env 文件

const connectDB = async () => {
    console.log(process.env.MONGO_URI);
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);  // 使用環境變數
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
        console.log('MongoDB connection error');
        process.exit(1);
    }
};

module.exports = connectDB;
