$(document).ready(function(){
    $('#contact').click(function(){
        $('#papaki').css('transition-duration','1s').css('color','#ff7675');
        $('#mail').css('transition-duration','.5s').css('color','#81ecec').
        css('padding','0px 0px 15px 0px').css('border-bottom','1px #ff7675 solid');
        $(this).css('display','none');    

    });

    $('.project:eq( 0 )').click(function(){
        $('.folder:eq( 0 )').addClass('hide');
        $('.folder2:eq( 1 )').addClass('visible').css('display','block');


    });
}); 