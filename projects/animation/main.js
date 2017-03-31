TweenMax.fromTo(".container", 12, {x:-2000}, {x:2000, repeat: -1, ease: Linear.easeNone});
TweenMax.to("#front-wheel, #back-wheel", 2, {rotation:360, repeat:-1, transformOrigin:"center center", ease: Linear.easeNone});
TweenMax.to("#front-pedal", 1.5, {rotation:360, repeat:-1, transformOrigin:"center top", ease: Linear.easeNone});
TweenMax.to("#back-pedal", 1.5, {rotation:360, repeat:-1, transformOrigin:"center bottom", ease: Linear.easeNone});
TweenMax.to("#front-foot", 1.5,{bezier:[{x:-30, y:-30}, {x:0, y:-60}, {x:30, y:-30}, {x:0, y:0}], ease:Linear.easeNone, repeat:-1});
TweenMax.to("#back-foot", 1.5,{bezier:[{x:30, y:30}, {x:0, y:60}, {x:-30, y:30}, {x:0, y:0}], ease:Linear.easeNone, repeat:-1});


var tl = new TimelineMax({repeat:-1, repeatDelay:1});
tl.to("#sheath", 0.5,{x:-500, y:-90, rotation:15}, 0.2)
.to("#sword", 1.25, {rotation:60, transformOrigin:"75% center"})
.from("#front-log, #back-log", 1, {x:-400}, "-=1")
.to("#sword", 0.5, {rotation:-45, ease:Back.easeIn.config(2)})
.to("#front-log", 2, {y:550, ease: Power4.easeIn}, "-=0.4")
.to("#back-log", 1, {x:-400})
.to("#sword", 2, {rotation:0, ease: Elastic.easeOut}, "-=0.9")
.to("#sheath", 0.5, {x:0, y:0, rotation:0}, "-=0.3");