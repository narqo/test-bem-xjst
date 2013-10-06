module.exports = function() {

    block('b1').elem('e1')(function() {
        return '<span class="b1__e1">' + this.content + '</span>';
    });

};
