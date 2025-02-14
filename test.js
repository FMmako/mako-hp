$(function() {
    $(".hdr-menu-button").click(function() {
        $(".hdr-sub").toggleClass("hdr-sub_visible");
        var click =  $(this).data('id');
        $('#selected').text(click);
    });
});