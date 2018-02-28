const SeedData = require('./seed_data.js');
const mongoose = require('mongoose');
const db = require('./database/index.js');

mongoose.connect('mongodb://localhost/campaign-info');

const seedCampaignDB = (data) => {
    for (let i = 0; i < data.length; i++ ) {
      db.createCampaign(data[i], (error, info) => {
        if (error) {
          console.log(error);
        }
        console.log(info, 'Data Saved!');
        });
    }
};

seedCampaignDB(SeedData.campaignInfo);