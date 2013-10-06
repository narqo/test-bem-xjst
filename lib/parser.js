var bemxjst = require('bem-xjst'),
    FN_RE = /^function(?:\s+\w+)?\s*\([^\)]*\)\s*\{|\}$/g;

function noop() {
    return '[sorry]';
}

function parse(fn) {
    var body = fn.toString().replace(FN_RE, '').trim();

    if(!body) {
        return noop;
    }

    return bemxjst.compile(body, { optimize : false });
}

exports.parse = parse;
