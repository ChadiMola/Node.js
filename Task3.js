var fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) {
        return console.err(err)
    };
    console.log('File created and written to successfully.');
    
});
fs.readFile('welcome.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
 });
