(()=>{let e="bmg-custom-progress-slider";$(`[${e}]`).each(function(){let t=$(this),r=t.find(".w-slider-arrow-left"),a=t.find(".w-slider-arrow-right"),i=t[0].querySelectorAll(".home_big-slider_progress-bar"),l=parseInt(t.attr(e)),o=parseInt(t.attr("bmg-gsap-repeat-delay"))||500,n=t.attr("bmg-gsap-hover-effect")||!1;r.add(a).click(()=>{s.pause(),gsap.set(i,{width:"0%"}),setTimeout(()=>{s.restart()},o)});let s=gsap.timeline({repeat:-1,repeatDelay:o/1e3});function c(){s.play()}function d(){s.pause()}s.fromTo(i,{width:"0%"},{width:"100%",duration:l/1e3,ease:"linear"}),s.call(function e(){gsap.set(i,{width:"0%"}),a.click()}),s.pause(),ScrollTrigger.create({trigger:t[0],onEnter(){c()},onEnterBack(){c()},onLeave(){d()},onLeaveBack(){d()}}),n&&t.hover(d,c)})})();


/* I am different now */
