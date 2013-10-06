var run = require('./lib/runner').run,
    template = require('./templates/simple-block');

console.log(run(template, { block : 'b1' }));
