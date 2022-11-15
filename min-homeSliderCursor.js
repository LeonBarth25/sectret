(() => {
    let s = $("#home-slider"),
        r = s.find(".w-slider-mask"),
        i = s.find(".w-slider-arrow-left"),
        t = s.find(".w-slider-arrow-right"),
        n = s.find(".slider-cursor");
    function c(s) {
        var r = s.css("-webkit-transform") || s.css("-moz-transform") || s.css("-ms-transform") || s.css("-o-transform") || s.css("transform");
        if ("none" !== r)
            var i = r.split("(")[1].split(")")[0].split(","),
                t = i[0],
                n = Math.round(Math.atan2(i[1], t) * (180 / Math.PI));
        else var n = 0;
        return n < 0 ? n + 360 : n;
    }
    $(window).width() > 767 &&
        r.click(() => {
            let s = parseFloat(n.css("opacity")),
                r = c(n);
            1 == s && (r <= 90 ? t.click() : i.click());
        });
})();
