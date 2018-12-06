DomReady.ready(function() {

    var sugarShaker = {};

    var utils = {

        show: function (el) {
            el.classList.add('enter');
            var timer = setTimeout(function () {
                el.classList.add('active');
                el.classList.remove('enter');
                clearTimeout(timer)
            }, 250)
        },

        hide: function (el) {
            el.classList.add('leave');
            var timer = setTimeout(function () {
                el.classList.remove('active');
                el.classList.remove('leave');
                clearTimeout(timer)
            }, 250)
        }
    };

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

            // pre-loading
            var backgrounds = ['bg-design', 'bg-engineering', 'bg-consultancy'],
                imgArr = [];
            for(var b=0; b < backgrounds.length; b++){
                imgArr[b] = new Image();
                imgArr[b].src = 'images/' + backgrounds[b] + '.png';
            }

            // attach events
            if(links){

                for(var l=0; l < links.length; l++){

                    links[l].onclick = function (e) {

                        e.preventDefault();

                        if(!e.target.classList.contains('active')){

                            // swap active class on tabs
                            document.querySelectorAll('#tabs .active')[0].classList.remove('active');
                            e.target.classList.add('active');

                            // get content reference
                            var contentID = e.target.getAttribute('data-tab-content');

                            // swap active class on tab content
                            utils.hide(document.querySelectorAll('#tabs-content .active')[0]);
                            utils.show(document.getElementById(contentID));
                        }

                        if(sugarShaker.navigation.el.classList.contains('show')){
                            sugarShaker.navigation.hide();
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
            }
        },

        hide: function () {
            if(sugarShaker.navigation.el){
                sugarShaker.navigation.el.classList.remove('on');
                setTimeout(function () {
                    sugarShaker.navigation.el.classList.remove('show');
                }, 250);
            }
        }
    };

    sugarShaker.gallery = {

        el: document.querySelector('.gallery-images a'),

        init: function () {
            if(sugarShaker.gallery.el){

                var thumbs = document.querySelectorAll('.gallery-images a'),
                    imagesArr = [];

                for(var t=0; t<thumbs.length; t++){
                    thumbs[t].addEventListener('click', function (e) {
                        e.preventDefault();
                        var link = e.target['parentNode'];
                        if(!link.classList.contains('active')){
                            document.querySelectorAll('.gallery-images .active')[0].classList.remove('active');
                            link.classList.add('active');
                            document.querySelector('#main-image').src = link.href;
                            document.querySelector('#main-image').alt = link.title;
                        }
                    });
                    // pre-loading images
                    imagesArr[t] = new Image();
                    imagesArr[t].src = thumbs[t].href;
                }
            }
        }
    };

    sugarShaker.gallery.init();

    sugarShaker.navigation.init();

    sugarShaker.tabs.init();

    window.onscroll = function() {
        sugarShaker.header.scroll();
    };

});