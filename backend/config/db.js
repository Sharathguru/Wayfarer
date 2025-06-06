import mongoose from "mongoose";


async function db(){
try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");
} catch (error) {
    console.log('❌ MongoDB connection error:',error);
    process.exit(1);
}
}

export default db;