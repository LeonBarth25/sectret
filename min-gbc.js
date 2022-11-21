(() => {
    $("#w-node-_67f3a354-872a-28bf-f546-273d4265dbba-01a8b4b5").remove();
    let t = ".w-radio",
        e = $('[bmg-element = "slide"]'),
        n = e.length - 1;
    function o(t) {
        t.each(function () {
            gsap.to($(this)[0], { borderColor: "red", duration: 0.35 });
        });
    }
    function i(t) {
        t.each(function () {
            gsap.to($(this)[0], { borderColor: "", duration: 0.35 });
        });
    }
    e.each(function (e) {
        let d = $(this),
            c = d.find(t),
            l = e != n ? d.find(".next-button-slide") : d.find(".collection-next-button");
        l.attr("class"), l.text(), l.parent().append(l.clone());
        let a = l.next();
        a.css({ "pointer-events": "none" }),
            a.wrap("<div style='cursor: not-allowed;'></div>"),
            l.hide(),
            a.parent().click(() => {
                o(c);
            }),
            c.click(() => {
                i(c), a.parent().hide(), l.show();
            });
    }),
        $(".next-button-type.w-button").each(function () {
            let e = $(this),
                n = e.attr("class"),
                d = e.text();
            (button2ExtraStyles = { "grid-column-start": "span 2", "grid-column-end": "span 2" }),
                ($radioButtons = ($form1 = $("#type-form")).find(t)),
                e.parent().append(`<div class='${n}' style='cursor: not-allowed; width: 100%;'>${d}</div>`);
            let c = e.next();
            c.css(button2ExtraStyles),
                e.hide(),
                c.click(() => {
                    o($radioButtons);
                }),
                $radioButtons.click(() => {
                    i($radioButtons), c.hide(), e.show();
                });
        });
})();
