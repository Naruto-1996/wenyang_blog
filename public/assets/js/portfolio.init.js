$(window).on("load", function () {
    var a = $(".projects-wrapper");
    var b = $("#filter");
    a.isotope({filter: "*", layoutMode: "masonry", animationOptions: {duration: 750, easing: "linear"}});
    b.find("a").click(function () {
        var c = $(this).attr("data-filter");
        b.find("a").removeClass("active");
        $(this).addClass("active");
        a.isotope({filter: c, animationOptions: {animationDuration: 750, easing: "linear", queue: false,}});
        return false
    })
});