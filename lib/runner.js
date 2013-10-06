var parser = require('./parser');

function run(fn, data) {
    return parser.parse(fn).apply(data);
}

exports.run = run;
