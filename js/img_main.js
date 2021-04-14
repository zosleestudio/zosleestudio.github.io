//contact map
$(window).resize(function(e){
    if($(window).width() <= 599) {
        // console.log($(window).width());
        //loading
        $("#loadingValue").each(function() {
            $(this).attr("src", "../img/loading/320/values.svg");
        })
        //internal
        $("#internal1").each(function() {
            $(this).attr("src", "../img/main/");
        });
        $("#internal2").each(function() {
            $(this).attr("src", "../img/main/");
        });
        //external
        $("#musio").each(function() {
            $(this).attr("src", "../img/main/aka/320/");
        });
        $("#mcm").each(function() {
            $(this).attr("src", "../img/main/mcm/320/");
        });
        $("#airpremia").each(function() {
            $(this).attr("src", "../img/main/airpremia/320/");
        });
        $("#mataba").each(function() {
            $(this).attr("src", "../img/main/mataba/320/");
        });
    }
    else if($(window).width() > 599 && $(window).width() <= 1027) {
        //loading
        $("#loadingValue").each(function() {
            $(this).attr("src", "../img/loading/600/values.svg");
        })
        //internal
        $("#internal1").each(function() {
            $(this).attr("src", "../img/main/");
        });
        $("#internal2").each(function() {
            $(this).attr("src", "../img/main/");
        });
        //external
        $("#musio").each(function() {
            $(this).attr("src", "../img/main/aka/600/");
        });
        $("#mcm").each(function() {
            $(this).attr("src", "../img/main/mcm/600/");
        });
        $("#airpremia").each(function() {
            $(this).attr("src", "../img/main/airpremia/600/");
        });
        $("#mataba").each(function() {
            $(this).attr("src", "../img/main/mataba/600/");
        });
    } else if ($(window).width() > 1028) {
        //loading
        $("#loadingValue").each(function() {
            $(this).attr("src", "../img/loading/1028/values.svg");
        })
        //internal
        $("#internal1").each(function() {
            $(this).attr("src", "../img/main/");
        });
        $("#internal2").each(function() {
            $(this).attr("src", "../img/main/");
        });
        //external
        $("#musio").each(function() {
            $(this).attr("src", "../img/main/aka/1028/");
        });
        $("#mcm").each(function() {
            $(this).attr("src", "../img/main/mcm/1028/");
        });
        $("#airpremia").each(function() {
            $(this).attr("src", "../img/main/airpremia/1028/");
        });
        $("#mataba").each(function() {
            $(this).attr("src", "../img/main/mataba/1028/");
        });                    
    }         
});
