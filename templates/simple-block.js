module.exports = function() {

    block('b1')(function() {
        var content = apply('content', { ctx : 'my-content' });
        return '<span class="b1">' + content + '</span>';
    });

    block('b1').content()(function() {
        return this.ctx.toUpperCase();
    });

};
