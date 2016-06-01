$(document).ready(function() {
    $('.openCreate').click( function(event){
        console.log()
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#createModal')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '25%'}, 200);
            });
    });

    $('.closeModal, #overlay').click( function(){
        $('#createModal').animate({opacity: 0, top: '25%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });
});