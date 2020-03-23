document.addEventListener('scroll', function (event) {

var footer = $('footer').offset().top;

myVar = parseInt(footer, 10);
    var l = Math.pow(10, Math.floor(Math.log(myVar)/Math.log(10)));
    var b = Math.floor(myVar/l);
    var digit = b-Math.floor(b/10)*10;
    //console.log(digit);

        if (digit <= 5) {
            $('.shd_img').css('height','0%');
        }

   if (digit <= 3){
    $('.shd_img2').css('height','0%');
   }
    }, true);

