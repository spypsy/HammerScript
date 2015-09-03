var body = document.getElementsByTagName('body')[0];
var mc = new Hammer(body);
mc.on("panleft panright", function(ev) {
    console.log(ev.type +" gesture detected.");
    console.log(ev);
});

body.addEventListener('touchmove', function(ev) {console.log("touch moved"); console.log(ev)});
body.addEventListener('touchstart', function(ev) {console.log("touch started"); console.log(ev)});
body.addEventListener('touchend', function(ev) {console.log("touch ended"); console.log(ev)});

body.addEventListener('mousemove', function(ev) {console.log("mouse moved"); console.log(ev)});
body.addEventListener('mousedown', function(ev) {console.log("mouse down"); console.log(ev)});
body.addEventListener('mouseup', function(ev) {console.log("mouse up"); console.log(ev)});

mc.get('pan').set({ direction: Hammer.DIRECTION_ALL, threshold: 0 }); 

//mc.on('panstart', touchstart);
mc.on('panmove', touchmove);
//mc.on('panend', touchend);


