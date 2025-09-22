const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "nc9VVaxJ#yWXW1-YB_LSj7Xgrx6bZJCkEhErob5qGWZ0o0XhGGxQ",
ALIVE_IMG: process.env.ALIVE_IMG || "Enter The Image URL",
ALIVE_MSG: process.env.ALIVE_MSG || "HELLO IM HASHAN MD CREATED BY HASHAN <NOW ALIVE> ",
};
