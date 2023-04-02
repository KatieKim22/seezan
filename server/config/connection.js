const mongoose = require("mongoose");

mongoose.connect(porcess.env.MONGODB_URI  
    // || add mongodb url
    ,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    );

    module.exports = mongoose.connection;
