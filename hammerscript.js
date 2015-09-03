var body = document.getElementsByTagName('body')[0];
var mc = new Hammer(body);
mc.on("panleft panright", function(ev) {
    console.log(ev.type +" gesture detected.");
});
body.addEventListener('mousemove', function(ev) {console.log("mouse moved"); console.log(ev)});

body.addEventListener('touchmove', function(ev) {console.log("touch moved"); console.log(ev)});
