var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/campaign-info');

let campaignSchema = mongoose.Schema ({
    title: String,
    owner: String,
    location: String,
    videoURL: String,
    tagline: String,
    about: String,
    previousCampaigns: Number,
});

let Campaign = mongoose.model('Campaign', campaignSchema);


let camp = new Campaign({
    title: 'Ledr: the tool roll for everyone!', 
    owner: 'Dave & Calvin Laituri', 
    location: 'Saxonville, Framingham, MA', 
    videoURL: 'https://ksr-video.imgix.net/projects/3260803/video-857213-h264_high.mp4', 
    tagline:'From pens & cables to wrenches & screwdrivers, bring order to your every day tools!', 
    about: 'double clutch needs no introduction',
    previousCampaigns: 3,
    category: 'A tool roll is one of the most versatile packing accessories for organizing a large amount of items in a very small space. It\'s super compact when rolled up for travel, yet perfectly organized when opened for use. Most are designed with the kitchen or workshop in mind, but Ledr tool rolls are designed for everyone, to use anywhere to carry anything!'
});

camp.save(function(err) {
    console.log(err);
});