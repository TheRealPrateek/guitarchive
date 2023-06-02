const mongoose = require('mongoose');
const {Schema} = mongoose;

const artistSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    // tabLinks: [
    //     // this will contain all the links to the tabs associated with the artist as soon as I figure out how to do that haha kill me
    // ]
})

const Artist = mongoose.model('Artist', artistSchema);
module.exports = Artist;