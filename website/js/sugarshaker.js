DomReady.ready(function() {

    var sugarShaker = {};

    sugarShaker.header = {

        scrollFunction: function () {
            if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
                document.getElementsByTagName("body")[0].classList.add('fixed');
            } else {
                document.getElementsByTagName("body")[0].classList.remove('fixed');
            }

            if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25 ) {
                document.getElementById("header").classList.add('smaller');
            } else {
                document.getElementById("header").classList.remove('smaller');
            }
        }
    };

    sugarShaker.tabs = {

        setUpEvents: function () {
            var links = document.querySelectorAll('#tabs .tab');
            if(links){
                for(var l=0; l < links.length; l++){
                    links[l].onclick = function (e) {
                        e.preventDefault();
                        if(!e.target.classList.contains('active')){

                            document.querySelectorAll('#tabs .active')[0].classList.remove('active');
                            e.target.classList.add('active');

                            document.querySelectorAll('#tabs-content .active')[0].classList.remove('active');
                            var index = [].slice.call(document.querySelectorAll('#tabs .tab')).indexOf(e.target);

                            document.querySelectorAll('#tabs-content .tab-content')[index].classList.add('active');
                        }
                    };
                }
            }
        }
    };

    sugarShaker.navigation = {

        init: function () {
            var trigger = document.querySelector('#trigger');
            var closeBtn = document.querySelector('#close');
            if(trigger){
                trigger.addEventListener('click', function (e) {
                    e.preventDefault();
                    sugarShaker.navigation.show();
                });
            }
            if(closeBtn){
                closeBtn.addEventListener('click', function (e) {
                    e.preventDefault();
                    sugarShaker.navigation.hide();
                });
            }
        },

        show: function () {
            var navigation = document.querySelector('#page-navigation');
            if(navigation){
                navigation.classList.add('show');
                document.body.classList.add('no-scroll');
            }
        },

        hide: function () {
            var navigation = document.querySelector('#page-navigation');
            if(navigation){
                navigation.classList.remove('show');
                document.body.classList.remove('no-scroll');
            }
        },

        scroll: function () {


        }
    };

    sugarShaker.navigation.init();

    sugarShaker.tabs.setUpEvents();

    window.onscroll = function() {
        sugarShaker.header.scrollFunction();
    };

});