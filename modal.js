$(document).ready(function() {
    $('.openModal').click( function(event){
        event.preventDefault();
        $('#serchValue').val('');
        $('#overlay').fadeIn(400,
            function(){
                $('#search')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '25%'}, 200);
            });
    });
    $('.openModal').click( function(event){
        event.preventDefault();
        $('#serchValue').val('');
        $('#overlay').fadeIn(400,
            function(){
                $('#search')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '25%'}, 200);
            });
    });

    /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
    $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
        $('#search').animate({opacity: 0, top: '25%'}, 200,

                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // делaем ему display: none;
                    $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                }
            );
    });
});