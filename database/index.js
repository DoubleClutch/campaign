var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/campaign-info');

let campaignSchema = mongoose.Schema ({
    id: {
        type: Number,
        unique: true,
    },
    title: String,
    owner: String,
    location: String,
    videoURL: String,
    tagline: String,
    about: Array,
    category: String,
    previousCampaigns: Number,
});

let Campaign = mongoose.model('Campaign', campaignSchema);

const createCampaign = (campaign, callback) => {
    let theCamp = new Campaign(campaign);
    theCamp.save(function(err) {
        console.log(err);
    });
};

module.exports.createCampaign = createCampaign;