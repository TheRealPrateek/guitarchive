const mongoose = require('mongoose');
const  {Schema} = mongoose;

const tabSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true
        // this will be a filename and will point to a PDF stored in the front end since we don't have time to figure out how to break down and store that PDF in the actual database
    },
    videoLink: {
        type: String
    }
});

const Tab = mongoose.model('tab', tabSchema);
module.exports = Tab;