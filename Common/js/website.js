/**
 * Created by Alfie on 2016/04/17.
 */
$(document).ready(function () {

    $('.right-nav ').click(function () {

        $(' nav a').removeClass('active');
        
        if($('nav a').hasClass('active')){
            $('nav a').removeClass('active');
        }
            
        $(this).addClass('active')
    });

});