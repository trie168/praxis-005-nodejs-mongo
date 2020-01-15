const express = require("express");
const app = express();
const http = require("http").Server(app);
require("./config/db"); // database connection
/**
 * Import routes files
 */

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * Set routes imported
 */
require("./routes/main")(app);

app.listen(3300, () => {
    console.log(`Server running on port 3300`);
});
