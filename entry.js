var request = require('request');

$(function () {
    var res = request('http://localhost:8001/count');
    
    res.on('data', function (buf) {
        $('<div>')
            .text(buf)
            .appendTo($('#count'))
        ;
    });
        
    res.on('end', function () {
        $('<div>')
            .text('__END__')
            .appendTo($('#count'))
        ;
    });
});
