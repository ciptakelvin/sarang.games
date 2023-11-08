

$(document).ready(function(){
    
});

$(window).scroll(function(){
    var scroll_position = $(document).scrollTop();
    if (scroll_position > 500)
    {
        $("#title").text("Devlog");
    }else{
        $("#title").text("Sarang Games");
    }
})