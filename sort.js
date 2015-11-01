var artists = require('./artists.json');
var fs    = require('fs'),
  path    = require('path');
// create new file
function write(path, str, mode) {
  fs.writeFileSync(path, str, { mode: mode || 0666 });
  return '   \x1b[36mupdate\x1b[0m : ' + path;
}
var d = new Date();
var year = d.getFullYear();
var block = '';
block += '# Artists at Bay Area Tattoo Convention ' + year + '\n\n';
block += '| Artist        | Shop          | Instagram                                              |' + '\n';
block += '| ------------- |:-------------:| :-----------------------------------------------------:|' + '\n';

artists.map(function(artist){
  block += '| ' + artist.name + ' |' + '\n';
  block += '| ' + artist.shop + ' |' + '\n';
  block += '| [@' + artist.instagram + '](' + artist.instagram_url + ') |' + '\n';
});
write('./README.md', block);
console.log('New README created');

