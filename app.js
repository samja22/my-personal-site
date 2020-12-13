//INTRO move to about page on click//
$('#enter-btn').click(function() {
    $(this).css('transform', 'rotate(180deg)');
    window.location.assign('about.html');
})



//WORK: reveal div on click//
$('button').click(function() {
    //get id of button click//
    var id = $(this).attr('id');
    if (id === 'writeBtn') {
        $('#writing').toggle();
    } else if (id === 'webBtn') {
        $('#webdev').toggle();
    }
});







