var figlet = require('figlet');
var greet = require('./greet');
var chalk = require('chalk');
 
figlet(greet('Sir Steezus'), function(err, data){
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    var styleMsg = chalk.bgGreen.black(data)
    console.log(styleMsg);
});
