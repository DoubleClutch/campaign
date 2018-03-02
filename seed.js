const SeedData = require('./seed_data.js');
const mongoose = require('mongoose');
const db = require('./database/index.js');

mongoose.connect('mongodb://localhost/campaign-info');

const seedCampaignDB = (data) => {
let count = 1;
  
  for(var i = 0; i < 35; i++) {
    for (let i = 0; i < data.length; i++ ) {
      data[i].id = count;
      db.createCampaign(data[i], (error, info) => {
        if (error) {
          console.log(error);
        }
        console.log(info, 'Data Saved!');
      });
      count += 1;
    } 
  }
};

seedCampaignDB(SeedData.campaignInfo);