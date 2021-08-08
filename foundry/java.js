$(function(){ // eslint-disable-line
    // See if this is a touch device
    if ('ontouchstart' in window){
        // Set the correct body class
        $('body').removeClass('no-touch').addClass('touch'); // eslint-disable-line

        // Add the touch toggle to show text
        $('div.boxInner img').click(function(){ // eslint-disable-line
            $(this).closest('.boxInner').toggleClass('touchFocus'); // eslint-disable-line
        });
    }
});