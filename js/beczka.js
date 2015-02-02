var zrobBeczke = function () {
    var obroc = function (x) {
        document.body.setAttribute(
            'style',
            '-moz-transform: rotate('+x+'deg); \
            -moz-transform-origin: 50% 50%; \
            -webkit-transform: rotate('+x+'deg); \
            -webkit-transform-origin: 50% 50%; \
            -o-transform: rotate('+x+'deg); \
            -o-transform-origin:50% 50%; \
            -ms-transform: rotate('+x+'deg); \
            -ms-transform-origin: 50% 50%; \
            transform: rotate('+x+'deg); \
            transform-origin: 50% 50%;'
        );
    },
    i;

    for(i=0; i<=360; i++){
        (function () {
            var iInner = i;
            setTimeout(function () {
                obroc(iInner);
            }, i*25);
        })();
    };
};
