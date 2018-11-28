DomReady.ready(function() {

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("header").classList.add('smaller');
        } else {
            document.getElementById("header").classList.remove('smaller');
        }
    }


});