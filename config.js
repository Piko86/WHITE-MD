const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "DQcmXZSK#r4iyFqCwXKF9NONQxDv-5IOujVzRSk877P4MO8l36ls",
ALIVE_IMG: process.env.ALIVE_IMG || "Enter The Image URL",
ALIVE_MSG: process.env.ALIVE_MSG || "HELLO IM HASHAN MD CREATED BY HASHAN <NOW ALIVE> ",
};
