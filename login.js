$(document).ready(function() {
    $('#logInJoin').click( function(event){
        event.preventDefault(); // выключaем стaндaртную рoль элементa
        $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
            function(){ // пoсле выпoлнения предъидущей aнимaции
                $('#email')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '10%'}, 200);
            });
    });
    $('#socialNetworks').click( function(event){
        event.preventDefault();
                $('#socnetw').css('display', 'block');
                $('#email').css('display', 'none');
    });
    $('#forEmail').click( function(event){
        event.preventDefault();
        $('#email').css('display', 'block');
        $('#socnetw').css('display', 'none');
    });
    $('.registrationOn').click( function(event){
        event.preventDefault();
        $('#email').css('display', 'none');
        $('#socnetw').css('display', 'none');
        $('#registr').css('display', 'block');
    });
    $('.singInOn').click( function(event){
        event.preventDefault();
        $('#email').css('display', 'block');
        $('#socnetw').css('display', 'none');
        $('#registr').css('display', 'none');
    });


    $('.closeLogin, #overlay').click( function(){
                    $('#email').css('display', 'none');
                    $('#socnetw').css('display', 'none');
                    $('#registr').css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
});