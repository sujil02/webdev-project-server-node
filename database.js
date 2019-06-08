
module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'webdev-project-summer1';
    var   connectionString =
        'mongodb://localhost/';
    connectionString += databaseName;
    mongoose.connect(connectionString);
};