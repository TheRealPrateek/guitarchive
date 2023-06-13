const mongoose = require('mongoose');
const {Schema} = mongoose;

const tabSchema = new Schema ({
    name: {
        type: String
    },
    artist: {
        type: String
    },
    file: {
        type: String
    },
    videoLink: {
        type: String
    }
});

const Tab = mongoose.model('Tab', tabSchema);
module.exports = Tab;