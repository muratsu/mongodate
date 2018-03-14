#!/usr/bin/env node
const ncp = require("copy-paste");

let date = (new Date()).toISOString();

ncp.copy(date, function () {
  console.log(`copied "${date}" to clipboard`);
});
