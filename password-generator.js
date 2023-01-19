var generator = require('generate-password');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('how many passwords do you need ?    ', number => {
    var passwords = generator.generateMultiple(number, {
        length: 15,
        numbers: true,
        uppercase: true
    });
    console.log(`here your passwords : `,passwords);
    readline.close();
  });
 
