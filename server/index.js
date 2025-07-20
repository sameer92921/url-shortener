const express = require("express");
const urlRoutes = require('./routes/url');
const cors = require('cors');
require('dotenv').config();
const mongoose = require("mongoose");

// DB Connection
async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Successfully connected to DB");
    } catch (err) {
        console.error("❌ DB connection failed:", err);
    }
}
main();

const server = express();
server.use(express.json());

server.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

server.use('/', urlRoutes);


const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`\n\n🚀 Server is running at http://localhost:${PORT}\n`);
});