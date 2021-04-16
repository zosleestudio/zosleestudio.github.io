//contact map
$(window).ready(function(e){
    if($(window).width() <= 599) {
        // console.log($(window).width());
            $("#map").each(function() {
                $(this).attr("src", "../img/contact/320/map.svg");
            });
        }
    else if($(window).width() > 599 && $(window).width() <= 1027) {
        $("#map").each(function() {
            $(this).attr("src", "../img/contact/600/map.svg");
        });
    } else if ($(window).width() > 1028) {
        $("#map").each(function() {
            $(this).attr("src","../img/contact/1028/map.svg");
        });                        
    }         
});
