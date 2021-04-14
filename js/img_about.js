
$(window).resize(function(e){
    if($(window).width() <= 599) {
        // console.log($(window).width());
        //zosface
        $("#zosface").each(function() {
            $(this).attr("src", "../img/about/320/zosface.png");
        });
        //zosless studio
        $("#zosleestudio").each(function() {
            $(this).attr("src", "../img/about/320/placeholder.svg");
        });
    }
    else if($(window).width() > 599 && $(window).width() <= 1027) {
        //zosface
        $("#zosface").each(function() {
            $(this).attr("src", "../img/about/600/zosface.png");
        });
        //zosless studio
        $("#zosleestudio").each(function() {
            $(this).attr("src", "../img/about/600/placeholder.svg");
        });
    } else if ($(window).width() > 1028) {
        //zosface
        $("#zosface").each(function() {
            $(this).attr("src","../img/about/1028/zosface.png");
        });   
        //zosless studio
        $("#zosleestudio").each(function() {
            $(this).attr("src","../img/about/1028/placeholder.svg");
        });                       
    }         
});