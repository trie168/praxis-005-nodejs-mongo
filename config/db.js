let mongoose = require("mongoose");
var host = "mongodb://localhost:27017/test_mongo";

mongoose.connect(host, {
    useNewUrlParser: true
});
mongoose.set("useCreateIndex", true);
