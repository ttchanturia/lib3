// Run using: node _country-convert.js
// When new countries available, update the _countries.json
// API: https://community-api-dev-1-2.nxt.uat.unifiedpost.com/api/frontend/v1/countries
// Icons remaining after conversion must be renamed/deleted manually
// Only icons in /iso directory will be exported !

var fs = require('fs');

fs.readFile('_countries.json', function(error, data) {
  if (error) {
    console.log(error);
    return;
  }

  var obj = JSON.parse(data);
  for(var p in obj) {
    fs.rename('' + obj[p].toLowerCase() + '.svg', 'iso/' + p + '.svg', function(err) {
      if ( err ) console.log('ERROR: ' + err);
    });
  }
});
