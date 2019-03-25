$(document).ready(function () {
    $(".animate-scroll").click(function () {
        var o = $("a[name=" + $(this).attr("href").substr(1) + "]");
        return 1 == o.length && $("html, body").animate({
            scrollTop: o.offset().top
        }, 800), !1
    }), $("#Go_Top").hide().removeAttr("href"), $(window).scrollTop() >= "250" && $("#Go_Top").fadeIn("slow"), $(window).scroll(function () {
        $(window).scrollTop() <= "250" ? $("#Go_Top").fadeOut("slow") : $("#Go_Top").fadeIn("slow")
    }), $("#Go_Bottom").hide().removeAttr("href"), $(window).scrollTop() <= $(document).height() - "999" && $("#Go_Bottom").fadeIn("slow"), $(window).scroll(function () {
        $(window).scrollTop() >= $(document).height() - "999" ? $("#Go_Bottom").fadeOut("slow") : $("#Go_Bottom").fadeIn("slow")
    }), $("#Go_Top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow")
    }), $("#Go_Bottom").click(function () {
        $("html, body").animate({
            scrollTop: $(document).height()
        }, "slow")
    }), lightbox.option({
        fitImagesInViewport: !0,
        albumLabel: "Work %1 из %2"
    }), $("#collapseExample").on("show.bs.collapse", function () {
        $(".work_more").text("roll up")
    }), $("#collapseExample").on("hide.bs.collapse", function () {
        $(".work_more").text("load more work")
    }), $(".navbar-toggler").click(function () {
        $(".navbar").fadeToggle()
    })
    
    $(function() {
        $('.lazy').lazy();
    });
});
