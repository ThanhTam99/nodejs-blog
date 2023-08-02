const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/learn_mongodb_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connection successfully!');
    } catch (error) {
        console.log(error);
        console.log('Connection fail!');
    }
}

module.exports = { connect };
