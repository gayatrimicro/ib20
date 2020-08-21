// Get the headers position from the top of the page, plus its own height
        var startY = 100;
        var tox = $(".fix_img1").offset();

        $(window).scroll(function(){

            checkY();
        });

        function checkY(){
            if( $(window).scrollTop() > tox.top ){
                $('.msli').toggleClass('fix_img1');
            }else{
                //$('#fix_img1').slideUp('slow');
            }
        }

        // Do this on load just in case the user starts half way down the page
        checkY();