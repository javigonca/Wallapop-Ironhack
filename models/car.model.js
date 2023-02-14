const mongoose = require("mongoose");

const schemaCar = new mongoose.Schema (
    {
        user: {
            type: String,
            required: [true, "user is required"],
        },
        image: { type: String },

        price: {
            type: String,
            required: [true, "price is required"],
        },

        title: {
            type: String,
            required: [true, "title is required"],
        },
        
    },

    { timestamps: true }
);

module.exports = mongoose.model("Car", schemaCar);