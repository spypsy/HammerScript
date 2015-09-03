var body = document.getElementsByTagName('body')[0];
var mc = new Hammer(body);
mc.on("panleft panright", function(ev) {
    console.log(ev.type +" gesture detected.");
});
body.addEventListener('mousemove', console.log('mouse moved'));
body.addEventListener('touchmove', console.log('touch moved'));
