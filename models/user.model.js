const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const schemaUser = new mongoose.Schema (
    {
        name: {
            type: String,
            required: [true, "name is required"],
        },       

        price: {
            type: String,
            required: [true, "email is required"],
            unique: true,
            match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        },

        password: {
            type: String,
            required: [true, "password is required"],
            minLength: [8, "min length: 8"],
        },
        
    },

    { timestamps: true }
);

module.exports = mongoose.model("User", schemaUser);