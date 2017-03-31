TweenMax.fromTo(".container", 12, {x:-2000}, {x:2000, repeat: -1, ease: Linear.easeNone});
TweenMax.to("#front-wheel, #back-wheel", 2, {rotation:360, repeat:-1, transformOrigin:"center center", ease: Linear.easeNone});
TweenMax.to("#front-pedal", 1.5, {rotation:360, repeat:-1, transformOrigin:"center top", ease: Linear.easeNone});
TweenMax.to("#back-pedal", 1.5, {rotation:360, repeat:-1, transformOrigin:"center bottom", ease: Linear.easeNone});
TweenMax.to("#front-foot", 1.5,{bezier:[{x:-30, y:-30}, {x:0, y:-60}, {x:30, y:-30}, {x:0, y:0}], ease:Linear.easeNone, repeat:-1});
TweenMax.to("#back-foot", 1.5,{bezier:[{x:30, y:30}, {x:0, y:60}, {x:-30, y:30}, {x:0, y:0}], ease:Linear.easeNone, repeat:-1});
