DomReady.ready(function() {

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {

        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            document.getElementsByTagName("body")[0].classList.add('fixed');
        } else {
            document.getElementsByTagName("body")[0].classList.remove('fixed');
        }

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("header").classList.add('smaller');
        } else {
            document.getElementById("header").classList.remove('smaller');
        }
    }


});