module.exports = function() {

    block('b1')(function() {
        var content = apply('content', { content : 'my-content' });
        return '<span class="b1">' + content + '</span>';
    });

    block('b1').content()(function() {
        return this.content.toUpperCase();
    });

};
