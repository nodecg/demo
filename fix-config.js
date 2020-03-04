'use strict';

const fs = require('fs');
const path = require('path');
const cfg = {
	host: process.env.PROJECT_DOMAIN,
	port: process.env.PORT
};
const cfgPath = path.join(__dirname, 'nodecg/cfg/nodecg.json');
fs.writeFileSync(cfgPath, JSON.stringify(cfg, null, 2));
