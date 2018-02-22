var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/campaign-info');

let campaignSchema = mongoose.Schema ({
    title: String,
    owner: String,
    location: String,
    videoURL: String,
    tagline: String,
    about: String 
    
});

let Campaign = mongoose.model('Campaign', campaignSchema);


let camp = new Campaign({title: 'my title', owner: 'the owner', location: 'Los Angeles', videoURL: 'www.youtube.com', tagline:'double, double clutch', about: 'double clutch needs no introduction'});

camp.save(function(err) {
    console.log(err);
});