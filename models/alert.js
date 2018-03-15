const mongoose = require('mongoose');


const AlertSchema = mongoose.Schema({
    display_name: {},
    network: {
        type: String,
    },
    link_to_post: {
        type: String,
    },
    confidence: {
        type: String
    },
    post_content: {
        type: String
    },
    img_url: {
        type: String
    },
    time_created: {
        type: String
    },
    time_posted_by_user: {
        type: String
    }
});

const Alert = module.exports = mongoose.model('Alert', AlertSchema);

module.exports.addAlert = (alert, callback) => {
    alert.save(callback);
};