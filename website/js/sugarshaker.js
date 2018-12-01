DomReady.ready(function() {

    var sugarShaker = {};

    sugarShaker.header = {

        scroll: function () {
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

        init: function () {

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

        el:  document.querySelector('#page-navigation'),

        init: function () {
            var trigger = document.querySelector('#trigger'),
                closeBtn = document.querySelector('#close');

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
            if(sugarShaker.navigation.el){
                sugarShaker.navigation.el.classList.add('show');
                setTimeout(function () {
                    sugarShaker.navigation.el.classList.add('on');
                }, 0);
                document.body.classList.add('no-scroll');
            }
        },

        hide: function () {
            if(sugarShaker.navigation.el){
                sugarShaker.navigation.el.classList.remove('on');
                setTimeout(function () {
                    sugarShaker.navigation.el.classList.remove('show');
                }, 250);
                document.body.classList.remove('no-scroll');
            }
        }
    };

    sugarShaker.navigation.init();

    sugarShaker.tabs.init();

    window.onscroll = function() {
        sugarShaker.header.scroll();
    };

});