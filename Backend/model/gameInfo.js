const mongoose = require ("mongoose");

const Schema = mongoose.Schema;
const gameSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    developer: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    availability: {
        type: Boolean,
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Game", gameSchema);
