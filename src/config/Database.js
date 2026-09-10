const mongoose = require("mongoose");
require("dotenv").config();

const ConnectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
};

module.exports = ConnectDB;