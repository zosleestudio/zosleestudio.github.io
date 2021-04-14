//contact map
$(window).resize(function(e){
    if($(window).width() <= 599) {
        // console.log($(window).width());
        $("#name1").each(function() {
            $(this).attr("src", "../img/press/award/320/award@3x.png");
        });
        $("#name2").each(function() {
            $(this).attr("src", "../img/press/covid/320/mcm@3x.png");
        });
    }
    else if($(window).width() > 599 && $(window).width() <= 1027) {
        $("#name1").each(function() {
            $(this).attr("src", "../img/press/award/600/award@3x.png");
        });
        $("#name2").each(function() {
            $(this).attr("src", "../img/press/covid/600/mcm@3x.png");
        });
    } else if ($(window).width() > 1028) {
        $("#name1").each(function() {
            $(this).attr("src", "../img/press/award/1028/award@3x.png");
        });
        $("#name2").each(function() {
            $(this).attr("src", "../img/press/covid/1028/mcm@3x.png");
        });                     
    }         
});
