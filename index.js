var run = require('./lib/runner').run,
    data = {},
    template = null;

// 1. simple-block

template = require('./templates/simple-block');
data = {block : 'b1'};

console.log(run(template, data));

// 2. simple-mods

template = require('./templates/simple-mods');
data = {block : 'b1', mods : {type : 'simple'}};

console.log(run(template, data));

// 3. simple-elem

template = require('./templates/simple-elem');
data = {block : 'b1', elem : 'e1', content : 'my-content'};

console.log(run(template, data));

