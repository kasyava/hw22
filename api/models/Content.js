const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const ContentSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },
    page:{
        type: String,
        required: true,
        unique: true
    }
});

const Content = mongoose.model("Content", ContentSchema);

module.exports = Content;